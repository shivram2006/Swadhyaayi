from typing import Dict, Any, Optional, Tuple, List
import cv2
import numpy as np

from .face_landmarker import FaceLandmarkerHelper


# Stable upper-face + nose + mouth-corner landmarks for similarity alignment
_ALIGN_IDXS = [33, 133, 362, 263, 1, 2, 61, 291]


class LipSyncEngine:
    """
    Renders smooth, realistic, flicker-free avatar frames by locking onto a clean
    closed-mouth anchor frame and cross-blending real aligned mouth/chin patches
    from the uploaded avatar frame bank (plus real blinking eyelids when available).
    """

    def __init__(
        self,
        anchor_image_path: str,
        library_frames: Optional[List[Dict[str, Any]]] = None,
    ):
        self.base_bgr = cv2.imread(anchor_image_path)
        if self.base_bgr is None:
            raise ValueError(f"Unable to load anchor avatar frame: {anchor_image_path}")

        self.h, self.w = self.base_bgr.shape[:2]
        self._landmarker = FaceLandmarkerHelper()
        self.landmarks = self._detect_landmarks(self.base_bgr)

        self._mouth_roi = self._compute_mouth_roi()
        self._mouth_mask, self._border_mask = self._build_mouth_masks()
        self._eye_rois = self._compute_eye_rois()

        # Temporal EMA state for ultra-smooth transitions
        self._smooth_open = 0.0
        self._smooth_width = 0.0
        self._smooth_blink = 0.0

        # Build aligned real-frame mouth & blink banks
        self._mouth_bank: List[Dict[str, Any]] = []
        self._blink_frames: List[np.ndarray] = []
        self._build_banks(library_frames or [])

    def _detect_landmarks(self, image_bgr: np.ndarray) -> Optional[np.ndarray]:
        lm = self._landmarker.detect(image_bgr)
        if lm is None:
            return None
        ih, iw = image_bgr.shape[:2]
        return np.array([[p.x * iw, p.y * ih] for p in lm], dtype=np.float32)

    def _compute_mouth_roi(self) -> Tuple[int, int, int, int]:
        if self.landmarks is None:
            return (int(self.w * 0.42), int(self.h * 0.25), int(self.w * 0.68), int(self.h * 0.42))
        pts = self.landmarks[[61, 291, 0, 17, 152]]
        mw = float(np.linalg.norm(self.landmarks[291] - self.landmarks[61]))
        x1 = max(0, int(np.min(pts[:, 0]) - mw * 0.48))
        y1 = max(0, int(self.landmarks[2][1] - mw * 0.05))
        x2 = min(self.w, int(np.max(pts[:, 0]) + mw * 0.48))
        y2 = min(self.h, int(self.landmarks[152][1] + mw * 0.22))
        return (x1, y1, x2, y2)

    def _build_mouth_masks(self) -> Tuple[np.ndarray, np.ndarray]:
        x1, y1, x2, y2 = self._mouth_roi
        rh, rw = max(1, y2 - y1), max(1, x2 - x1)
        yy, xx = np.mgrid[0:rh, 0:rw].astype(np.float32)

        if self.landmarks is not None:
            cx = float((self.landmarks[61][0] + self.landmarks[291][0]) * 0.5 - x1)
            cy = float((self.landmarks[13][1] + self.landmarks[17][1]) * 0.5 - y1)
        else:
            cx, cy = rw * 0.5, rh * 0.5

        rx = max(8.0, rw * 0.42)
        ry = max(8.0, rh * 0.42)
        dist = np.sqrt(((xx - cx) / rx) ** 2 + ((yy - cy) / ry) ** 2)

        # Smooth cosine feather inside ellipse [0.45 .. 0.98]
        alpha = np.clip((0.98 - dist) / (0.98 - 0.45), 0.0, 1.0)
        alpha = 0.5 - 0.5 * np.cos(alpha * np.pi)
        alpha = cv2.GaussianBlur(alpha, (9, 9), 0)

        # Outer skin ring used to match color/luminance to the anchor frame
        border_mask = (dist >= 0.72) & (dist <= 1.05)
        return alpha[:, :, None].astype(np.float32), border_mask

    def _compute_eye_rois(self):
        if self.landmarks is None:
            return []
        rois = []
        for upper_idx, lower_idx, left_idx, right_idx in [
            (159, 145, 33, 133),
            (386, 374, 362, 263),
        ]:
            cx = int((self.landmarks[left_idx][0] + self.landmarks[right_idx][0]) / 2.0)
            cy = int((self.landmarks[upper_idx][1] + self.landmarks[lower_idx][1]) / 2.0)
            ew = max(10, int(np.linalg.norm(self.landmarks[right_idx] - self.landmarks[left_idx]) * 0.75))
            eh = max(6, int(ew * 0.50))
            rois.append((cx, cy, ew, eh, int(self.landmarks[upper_idx][1] - eh * 0.85)))
        return rois

    def _align_to_anchor(self, src_bgr: np.ndarray, src_lm: np.ndarray) -> Optional[np.ndarray]:
        if self.landmarks is None:
            return None
        src_pts = src_lm[_ALIGN_IDXS]
        dst_pts = self.landmarks[_ALIGN_IDXS]
        M, _ = cv2.estimateAffinePartial2D(src_pts, dst_pts, method=cv2.LMEDS)
        if M is None:
            return None
        return cv2.warpAffine(
            src_bgr,
            M,
            (self.w, self.h),
            flags=cv2.INTER_LINEAR,
            borderMode=cv2.BORDER_REPLICATE,
        )

    def _match_roi_tone(self, src_roi: np.ndarray, anchor_roi: np.ndarray) -> np.ndarray:
        if not np.any(self._border_mask):
            return src_roi
        out = src_roi.astype(np.float32)
        anc = anchor_roi.astype(np.float32)
        for c in range(3):
            s_mean = float(np.mean(out[:, :, c][self._border_mask]))
            a_mean = float(np.mean(anc[:, :, c][self._border_mask]))
            shift = np.clip(a_mean - s_mean, -16.0, 16.0)
            out[:, :, c] = np.clip(out[:, :, c] + shift, 0.0, 255.0)
        return out.astype(np.uint8)

    def _build_banks(self, library_frames: List[Dict[str, Any]]) -> None:
        if self.landmarks is None:
            return

        x1, y1, x2, y2 = self._mouth_roi
        anchor_roi = self.base_bgr[y1:y2, x1:x2].copy()

        raw_mouth_entries: List[Dict[str, Any]] = []
        seen_paths = set()

        for item in library_frames:
            path = item.get("library_path") or item.get("source_path")
            if not path or path in seen_paths:
                continue
            seen_paths.add(path)

            lm_meta = item.get("landmarks")
            if not lm_meta:
                continue

            img = cv2.imread(path)
            if img is None:
                continue

            src_lm = self._detect_landmarks(img)
            if src_lm is None:
                continue

            aligned = self._align_to_anchor(img, src_lm)
            if aligned is None:
                continue

            ear = float(lm_meta.get("eye_aspect_ratio", 0.3))
            mar = float(lm_meta.get("mouth_aspect_ratio", 0.05))
            mw_norm = float(lm_meta.get("mouth_width_norm", 0.4))

            if ear < 0.18:
                self._blink_frames.append(aligned)
                continue

            roi = self._match_roi_tone(aligned[y1:y2, x1:x2], anchor_roi)
            raw_mouth_entries.append({"mar": mar, "mw": mw_norm, "roi": roi})

        # Ensure anchor itself is always in the bank as the closed/rest reference
        if not raw_mouth_entries:
            raw_mouth_entries.append({"mar": 0.01, "mw": 0.36, "roi": anchor_roi})

        raw_mouth_entries.sort(key=lambda e: e["mar"])
        mar_min = raw_mouth_entries[0]["mar"]
        mar_max = max(raw_mouth_entries[-1]["mar"], mar_min + 0.05)

        for entry in raw_mouth_entries:
            norm_open = float(np.clip((entry["mar"] - mar_min) / (mar_max - mar_min), 0.0, 1.0))
            self._mouth_bank.append(
                {
                    "norm_open": norm_open,
                    "mar": entry["mar"],
                    "mw": entry["mw"],
                    "roi": entry["roi"],
                }
            )

    def _sample_mouth_roi(self, target_open: float) -> Optional[np.ndarray]:
        if not self._mouth_bank:
            return None

        target = float(np.clip(target_open, 0.0, 1.0))
        if target <= self._mouth_bank[0]["norm_open"]:
            return self._mouth_bank[0]["roi"]
        if target >= self._mouth_bank[-1]["norm_open"]:
            return self._mouth_bank[-1]["roi"]

        for i in range(len(self._mouth_bank) - 1):
            a = self._mouth_bank[i]
            b = self._mouth_bank[i + 1]
            if a["norm_open"] <= target <= b["norm_open"]:
                span = max(b["norm_open"] - a["norm_open"], 1e-5)
                w = (target - a["norm_open"]) / span
                return cv2.addWeighted(a["roi"], 1.0 - w, b["roi"], w, 0.0)

        return self._mouth_bank[-1]["roi"]

    def _apply_mouth_articulation(self, frame: np.ndarray, layers: Dict[str, Any]) -> None:
        raw_open = float(layers.get("lip_open", 0.0))
        raw_width = float(layers.get("lip_width", 0.0))

        # Smooth temporal EMA so mouth glides naturally without snapping
        self._smooth_open = self._smooth_open * 0.48 + raw_open * 0.52
        self._smooth_width = self._smooth_width * 0.55 + raw_width * 0.45

        if self._smooth_open <= 0.015 or not self._mouth_bank or self.landmarks is None:
            return

        blended_roi = self._sample_mouth_roi(self._smooth_open)
        if blended_roi is None:
            return

        x1, y1, x2, y2 = self._mouth_roi
        anchor_roi = frame[y1:y2, x1:x2]
        if blended_roi.shape != anchor_roi.shape:
            return

        composed = (
            blended_roi.astype(np.float32) * self._mouth_mask
            + anchor_roi.astype(np.float32) * (1.0 - self._mouth_mask)
        )
        frame[y1:y2, x1:x2] = np.clip(composed, 0, 255).astype(np.uint8)

    def _apply_blink(self, frame: np.ndarray, blink_weight: float) -> None:
        self._smooth_blink = self._smooth_blink * 0.35 + blink_weight * 0.65
        bw = self._smooth_blink
        if bw <= 0.05 or not self._eye_rois:
            return

        # Prefer real aligned blinking frame from uploaded assets when available
        if self._blink_frames:
            blink_src = self._blink_frames[0]
            alpha = min(0.95, bw)
            for cx, cy, ew, eh, _ in self._eye_rois:
                pad_x = int(ew * 1.4)
                pad_y = int(eh * 1.6)
                ex1 = max(0, cx - pad_x)
                ey1 = max(0, cy - pad_y)
                ex2 = min(self.w, cx + pad_x)
                ey2 = min(self.h, cy + pad_y)
                if ex2 <= ex1 + 4 or ey2 <= ey1 + 4:
                    continue
                rw, rh = ex2 - ex1, ey2 - ey1
                yy, xx = np.mgrid[0:rh, 0:rw].astype(np.float32)
                dist = np.sqrt(((xx - rw * 0.5) / max(rw * 0.45, 1.0)) ** 2 + ((yy - rh * 0.5) / max(rh * 0.45, 1.0)) ** 2)
                m = np.clip((1.0 - dist) * 1.8, 0.0, 1.0) * alpha
                m = cv2.GaussianBlur(m, (7, 7), 0)[:, :, None]
                frame[ey1:ey2, ex1:ex2] = (
                    blink_src[ey1:ey2, ex1:ex2].astype(np.float32) * m
                    + frame[ey1:ey2, ex1:ex2].astype(np.float32) * (1.0 - m)
                ).astype(np.uint8)
            return

        # Fallback soft eyelid blend if no blink frame was uploaded
        for cx, cy, ew, eh, skin_y in self._eye_rois:
            sy = max(2, min(self.h - 3, skin_y))
            sx = max(2, min(self.w - 3, cx))
            skin_color = frame[sy, sx].tolist()
            overlay = frame.copy()
            cur_eh = max(2, int(eh * bw))
            cv2.ellipse(overlay, (cx, cy), (ew, cur_eh), 0, 0, 360, skin_color, -1)
            cv2.ellipse(overlay, (cx, cy + int(cur_eh * 0.25)), (ew, max(1, cur_eh // 5)), 0, 0, 180, (45, 35, 35), 1)
            alpha = min(0.88, bw)
            cv2.addWeighted(overlay, alpha, frame, 1.0 - alpha, 0, frame)

    def render_frame(self, layers: Dict[str, Any]) -> np.ndarray:
        frame = self.base_bgr.copy()

        # Subtle stabilized micro head motion
        nod = float(layers.get("head_nod_px", 0.0))
        if abs(nod) > 0.2:
            M = np.float32([[1, 0, 0], [0, 1, nod]])
            frame = cv2.warpAffine(frame, M, (self.w, self.h), borderMode=cv2.BORDER_REPLICATE)

        self._apply_mouth_articulation(frame, layers)
        self._apply_blink(frame, float(layers.get("blink_weight", 0.0)))
        return frame

from typing import Dict, Any, Optional, Tuple
import cv2
import numpy as np

from .face_landmarker import FaceLandmarkerHelper


class LipSyncEngine:
    """
    Renders smooth, flicker-free avatar frames by locking onto a stabilized anchor frame
    and applying MediaPipe FaceMesh-guided lip/jaw articulation, inner-mouth shading,
    natural eyelid blinking, and subtle head micro-motion.
    """

    def __init__(self, anchor_image_path: str):
        self.base_bgr = cv2.imread(anchor_image_path)
        if self.base_bgr is None:
            raise ValueError(f"Unable to load anchor avatar frame: {anchor_image_path}")

        self.h, self.w = self.base_bgr.shape[:2]
        self.landmarks = self._detect_landmarks(self.base_bgr)

        # Precompute mouth & eye masks/ROIs for fast per-frame rendering
        self._mouth_roi = self._compute_mouth_roi()
        self._eye_rois = self._compute_eye_rois()

    def _detect_landmarks(self, image_bgr: np.ndarray) -> Optional[np.ndarray]:
        helper = FaceLandmarkerHelper()
        lm = helper.detect(image_bgr)
        if lm is None:
            return None
        return np.array([[p.x * self.w, p.y * self.h] for p in lm], dtype=np.float32)

    def _compute_mouth_roi(self) -> Tuple[int, int, int, int]:
        if self.landmarks is None:
            return (int(self.w * 0.42), int(self.h * 0.30), int(self.w * 0.58), int(self.h * 0.42))
        pts = self.landmarks[[61, 291, 0, 17, 152]]
        mw = float(np.linalg.norm(self.landmarks[291] - self.landmarks[61]))
        x1 = max(0, int(np.min(pts[:, 0]) - mw * 0.45))
        y1 = max(0, int(self.landmarks[0][1] - mw * 0.25))
        x2 = min(self.w, int(np.max(pts[:, 0]) + mw * 0.45))
        y2 = min(self.h, int(self.landmarks[152][1] + mw * 0.15))
        return (x1, y1, x2, y2)

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
            ew = max(10, int(np.linalg.norm(self.landmarks[right_idx] - self.landmarks[left_idx]) * 0.72))
            eh = max(6, int(ew * 0.48))
            rois.append((cx, cy, ew, eh, int(self.landmarks[upper_idx][1] - eh * 0.8)))
        return rois

    def _apply_mouth_articulation(self, frame: np.ndarray, layers: Dict[str, Any]) -> None:
        lip_open = float(layers.get("lip_open", 0.0))
        lip_width = float(layers.get("lip_width", 0.0))
        if lip_open <= 0.015 and abs(lip_width) <= 0.02:
            return

        if self.landmarks is None:
            return

        x1, y1, x2, y2 = self._mouth_roi
        if x2 <= x1 + 4 or y2 <= y1 + 4:
            return

        mw = float(np.linalg.norm(self.landmarks[291] - self.landmarks[61]))
        drop_px = lip_open * mw * 0.26

        # Warp lower jaw/chin region smoothly downward inside mouth ROI
        roi = frame[y1:y2, x1:x2].copy()
        rh, rw = roi.shape[:2]

        mouth_cy_local = float(self.landmarks[14][1] - y1)
        mouth_cx_local = float((self.landmarks[61][0] + self.landmarks[291][0]) * 0.5 - x1)

        grid_y, grid_x = np.mgrid[0:rh, 0:rw].astype(np.float32)
        dy = np.zeros_like(grid_y)
        dx = np.zeros_like(grid_x)

        # Gaussian falloff centered at lower lip
        sigma_x = max(12.0, mw * 0.55)
        sigma_y = max(10.0, (rh - mouth_cy_local) * 0.55)

        lower_mask = np.clip((grid_y - (mouth_cy_local - 4.0)) / max(sigma_y, 1.0), 0.0, 1.0)
        horiz_weight = np.exp(-((grid_x - mouth_cx_local) ** 2) / (2.0 * sigma_x * sigma_x))
        vert_weight = np.exp(-((grid_y - (mouth_cy_local + sigma_y * 0.35)) ** 2) / (2.0 * sigma_y * sigma_y))

        dy = -drop_px * lower_mask * horiz_weight * vert_weight
        if abs(lip_width) > 0.01:
            dx = -lip_width * (grid_x - mouth_cx_local) * 0.14 * horiz_weight * vert_weight

        map_x = np.clip(grid_x + dx, 0, rw - 1)
        map_y = np.clip(grid_y + dy, 0, rh - 1)
        warped = cv2.remap(roi, map_x, map_y, interpolation=cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)

        # Draw subtle dark oral cavity inside the parted lips so speech looks natural
        if lip_open > 0.08:
            inner_pts = self.landmarks[[78, 81, 13, 311, 308, 402, 14, 178]].copy()
            inner_pts[:, 0] -= x1
            inner_pts[:, 1] -= y1
            # Expand lower inner lip points slightly by drop_px
            inner_pts[5:, 1] += drop_px * 0.72
            inner_pts[0, 0] -= lip_width * mw * 0.05
            inner_pts[4, 0] += lip_width * mw * 0.05

            cavity_mask = np.zeros((rh, rw), dtype=np.float32)
            cv2.fillPoly(cavity_mask, [inner_pts.astype(np.int32)], 1.0)
            cavity_mask = cv2.GaussianBlur(cavity_mask, (7, 7), 0)
            darkness = min(0.78, 0.25 + lip_open * 0.65)
            for c in range(3):
                warped[:, :, c] = (
                    warped[:, :, c].astype(np.float32) * (1.0 - cavity_mask * darkness)
                    + np.array([18, 16, 26][c], dtype=np.float32) * (cavity_mask * darkness)
                ).astype(np.uint8)

        # Feather ROI edges back into frame
        blend_mask = np.ones((rh, rw), dtype=np.float32)
        pad = max(4, min(rh, rw) // 8)
        blend_mask[:pad, :] *= np.linspace(0, 1, pad)[:, None]
        blend_mask[-pad:, :] *= np.linspace(1, 0, pad)[:, None]
        blend_mask[:, :pad] *= np.linspace(0, 1, pad)[None, :]
        blend_mask[:, -pad:] *= np.linspace(1, 0, pad)[None, :]
        blend_mask = blend_mask[:, :, None]

        frame[y1:y2, x1:x2] = (
            warped.astype(np.float32) * blend_mask + roi.astype(np.float32) * (1.0 - blend_mask)
        ).astype(np.uint8)

    def _apply_blink(self, frame: np.ndarray, blink_weight: float) -> None:
        if blink_weight <= 0.05 or not self._eye_rois:
            return
        for cx, cy, ew, eh, skin_y in self._eye_rois:
            sy = max(2, min(self.h - 3, skin_y))
            sx = max(2, min(self.w - 3, cx))
            skin_color = frame[sy, sx].tolist()
            overlay = frame.copy()
            cur_eh = max(2, int(eh * blink_weight))
            cv2.ellipse(overlay, (cx, cy), (ew, cur_eh), 0, 0, 360, skin_color, -1)
            cv2.ellipse(overlay, (cx, cy + int(cur_eh * 0.25)), (ew, max(1, cur_eh // 5)), 0, 0, 180, (45, 35, 35), 1)
            alpha = min(0.92, blink_weight)
            cv2.addWeighted(overlay, alpha, frame, 1.0 - alpha, 0, frame)

    def render_frame(self, layers: Dict[str, Any]) -> np.ndarray:
        frame = self.base_bgr.copy()

        # Subtle stabilized micro head motion (keeps background clean by tiny 1-2px shift)
        nod = float(layers.get("head_nod_px", 0.0))
        if abs(nod) > 0.2:
            M = np.float32([[1, 0, 0], [0, 1, nod]])
            frame = cv2.warpAffine(frame, M, (self.w, self.h), borderMode=cv2.BORDER_REPLICATE)

        self._apply_mouth_articulation(frame, layers)
        self._apply_blink(frame, float(layers.get("blink_weight", 0.0)))
        return frame

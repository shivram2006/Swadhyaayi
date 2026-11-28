import os
import json
from pathlib import Path
from typing import Dict, List, Any, Optional, Tuple
import cv2
import numpy as np

from .face_landmarker import FaceLandmarkerHelper


def compute_dhash(image_bgr: np.ndarray, hash_size: int = 8) -> int:
    gray = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2GRAY)
    resized = cv2.resize(gray, (hash_size + 1, hash_size), interpolation=cv2.INTER_AREA)
    diff = resized[:, 1:] > resized[:, :-1]
    val = 0
    for i, bit in enumerate(diff.flatten()):
        if bit:
            val |= 1 << i
    return val


def hamming_distance(a: int, b: int) -> int:
    return (a ^ b).bit_count()


def _dist(p1: Tuple[float, float], p2: Tuple[float, float]) -> float:
    return float(np.hypot(p1[0] - p2[0], p1[1] - p2[1]))


class AssetAnalyzer:
    """
    Inspects uploaded avatar frames for resolution, sharpness, identity/framing consistency,
    duplicates, and MediaPipe FaceMesh facial/mouth/eye metrics.
    """

    SUPPORTED_EXTS = {".jpg", ".jpeg", ".png", ".webp"}

    def __init__(self, duplicate_hamming_threshold: int = 4):
        self.duplicate_hamming_threshold = duplicate_hamming_threshold
        self._landmarker = FaceLandmarkerHelper()

    def _extract_landmarks(self, image_bgr: np.ndarray) -> Optional[Dict[str, Any]]:
        h, w = image_bgr.shape[:2]
        lm = self._landmarker.detect(image_bgr)
        if lm is None:
            return None

        def pt(idx: int) -> Tuple[float, float]:
            return (lm[idx].x * w, lm[idx].y * h)

        # Mouth landmarks (outer & inner)
        mouth_left = pt(61)
        mouth_right = pt(291)
        upper_inner = pt(13)
        lower_inner = pt(14)
        upper_outer = pt(0)
        lower_outer = pt(17)

        mouth_width = max(_dist(mouth_left, mouth_right), 1e-5)
        inner_open = _dist(upper_inner, lower_inner)
        outer_open = _dist(upper_outer, lower_outer)
        mar = inner_open / mouth_width

        # Left & right eye aspect ratios
        l_ear = _dist(pt(159), pt(145)) / max(_dist(pt(33), pt(133)), 1e-5)
        r_ear = _dist(pt(386), pt(374)) / max(_dist(pt(362), pt(263)), 1e-5)
        ear = (l_ear + r_ear) / 2.0

        # Face bounding box & normalized scale
        xs = [p.x for p in lm]
        ys = [p.y for p in lm]
        face_w = max(xs) - min(xs)
        face_h = max(ys) - min(ys)
        face_cx = (max(xs) + min(xs)) / 2.0
        face_cy = (max(ys) + min(ys)) / 2.0

        # Eyebrow height relative to eye center
        brow_dist = (_dist(pt(70), pt(159)) + _dist(pt(300), pt(386))) / (2.0 * max(face_h * h, 1e-5))

        # Approximate yaw asymmetry
        nose = pt(1)
        left_cheek = pt(234)
        right_cheek = pt(454)
        d_left = _dist(nose, left_cheek)
        d_right = _dist(nose, right_cheek)
        yaw_ratio = (d_left - d_right) / max(d_left + d_right, 1e-5)

        return {
            "face_detected": True,
            "face_bbox_norm": [round(min(xs), 4), round(min(ys), 4), round(face_w, 4), round(face_h, 4)],
            "face_center_norm": [round(face_cx, 4), round(face_cy, 4)],
            "face_scale": round(face_h, 4),
            "mouth_aspect_ratio": round(mar, 4),
            "mouth_width_norm": round(mouth_width / max(face_w * w, 1e-5), 4),
            "outer_open_ratio": round(outer_open / mouth_width, 4),
            "eye_aspect_ratio": round(ear, 4),
            "brow_height_ratio": round(brow_dist, 4),
            "yaw_ratio": round(yaw_ratio, 4),
            "mouth_center_px": [
                round((mouth_left[0] + mouth_right[0]) / 2.0, 1),
                round((upper_inner[1] + lower_inner[1]) / 2.0, 1),
            ],
            "mouth_box_px": [
                int(max(0, min(mouth_left[0], mouth_right[0]) - mouth_width * 0.25)),
                int(max(0, min(upper_outer[1], mouth_left[1]) - mouth_width * 0.25)),
                int(min(w, max(mouth_left[0], mouth_right[0]) + mouth_width * 0.25)),
                int(min(h, max(lower_outer[1], mouth_right[1]) + mouth_width * 0.35)),
            ],
        }

    def analyze_directory(self, input_dir: str) -> Dict[str, Any]:
        root = Path(input_dir)
        image_paths = sorted(
            [p for p in root.rglob("*") if p.is_file() and p.suffix.lower() in self.SUPPORTED_EXTS]
        )

        records: List[Dict[str, Any]] = []
        seen_hashes: List[Tuple[str, int, Optional[Dict[str, Any]]]] = []
        resolutions: set = set()
        scales: List[float] = []
        mars: List[float] = []
        ears: List[float] = []
        duplicate_count = 0
        no_face_count = 0

        for path in image_paths:
            img = cv2.imread(str(path))
            if img is None:
                records.append({"path": str(path), "filename": path.name, "valid": False, "error": "unreadable"})
                continue

            h, w = img.shape[:2]
            resolutions.add(f"{w}x{h}")

            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            sharpness = float(cv2.Laplacian(gray, cv2.CV_64F).var())
            brightness = float(np.mean(gray))
            dhash = compute_dhash(img)

            lm_info = self._extract_landmarks(img)
            if lm_info is None:
                no_face_count += 1
            else:
                scales.append(lm_info["face_scale"])
                mars.append(lm_info["mouth_aspect_ratio"])
                ears.append(lm_info["eye_aspect_ratio"])

            dup_of: Optional[str] = None
            for prev_name, prev_hash, prev_lm in seen_hashes:
                if hamming_distance(dhash, prev_hash) <= self.duplicate_hamming_threshold:
                    if lm_info is None or prev_lm is None:
                        dup_of = prev_name
                        break
                    # Keep frames that differ in mouth openness, mouth width, or eye blink
                    mar_diff = abs(lm_info["mouth_aspect_ratio"] - prev_lm["mouth_aspect_ratio"])
                    ear_diff = abs(lm_info["eye_aspect_ratio"] - prev_lm["eye_aspect_ratio"])
                    mw_diff = abs(lm_info["mouth_width_norm"] - prev_lm["mouth_width_norm"])
                    if mar_diff < 0.015 and ear_diff < 0.025 and mw_diff < 0.015:
                        dup_of = prev_name
                        break

            if dup_of is None:
                seen_hashes.append((path.name, dhash, lm_info))
            else:
                duplicate_count += 1

            records.append(
                {
                    "path": str(path),
                    "filename": path.name,
                    "valid": True,
                    "width": w,
                    "height": h,
                    "format": path.suffix.lower().lstrip("."),
                    "sharpness": round(sharpness, 2),
                    "brightness": round(brightness, 2),
                    "dhash": hex(dhash),
                    "duplicate_of": dup_of,
                    "landmarks": lm_info,
                }
            )

        scale_std = float(np.std(scales)) if scales else 0.0
        mar_min = min(mars) if mars else 0.0
        mar_max = max(mars) if mars else 0.0
        ear_min = min(ears) if ears else 0.0
        ear_max = max(ears) if ears else 0.0

        limitations: List[str] = []
        if len(image_paths) < 100:
            limitations.append(
                f"Only {len(image_paths)} frames uploaded (target 100-200). Lip-sync uses landmark-guided mouth synthesis over a stabilized anchor frame."
            )
        if scale_std > 0.03:
            limitations.append(
                f"Camera framing/zoom varies across frames (face scale std={scale_std:.3f}). Engine locks to a consistent anchor cluster to prevent body-jump flickering."
            )
        if (mar_max - mar_min) < 0.18:
            limitations.append(
                f"Limited mouth-opening range across frames (MAR {mar_min:.3f}-{mar_max:.3f}). Neutral/rounded visemes (OO, BMP, FV) are synthesized via smooth lip warping."
            )
        if ear_min > 0.18:
            limitations.append(
                "No fully closed-eye blinking frames detected; natural eye blinks are synthesized smoothly via eyelid blending."
            )

        return {
            "summary": {
                "total_files": len(image_paths),
                "unique_frames": len(image_paths) - duplicate_count,
                "duplicate_frames": duplicate_count,
                "faces_detected": len(image_paths) - no_face_count,
                "resolutions": sorted(resolutions),
                "face_scale_range": [round(min(scales), 4), round(max(scales), 4)] if scales else [0, 0],
                "mar_range": [round(mar_min, 4), round(mar_max, 4)],
                "ear_range": [round(ear_min, 4), round(ear_max, 4)],
                "mediapipe_active": self._landmarker.is_active,
                "limitations": limitations,
            },
            "frames": records,
        }

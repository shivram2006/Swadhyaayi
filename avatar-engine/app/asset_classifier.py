import json
import shutil
from pathlib import Path
from typing import Dict, Any, List


class AssetClassifier:
    """
    Classifies analyzed avatar frames into semantic expression & viseme categories,
    selects a stable camera-framing anchor cluster, and builds assets/manifest.json.
    """

    CATEGORIES = [
        "neutral",
        "listening",
        "smiling",
        "speaking_open",
        "speaking_wide",
        "blinking",
        "thinking",
        "encouraging",
        "surprised",
        "positive_reaction",
    ]

    @staticmethod
    def _classify_frame(frame: Dict[str, Any]) -> Dict[str, str]:
        lm = frame.get("landmarks")
        if not lm:
            return {"expression": "neutral", "viseme": "REST"}

        mar = lm["mouth_aspect_ratio"]
        ear = lm["eye_aspect_ratio"]
        mw = lm["mouth_width_norm"]
        brow = lm["brow_height_ratio"]
        yaw = abs(lm["yaw_ratio"])

        # Eye blink check first
        if ear < 0.16:
            return {"expression": "blinking", "viseme": "REST"}

        # Mouth open / speaking vs closed / smiling
        if mar >= 0.24:
            expression = "positive_reaction" if mw > 0.50 else "speaking_wide"
            viseme = "AA"
        elif mar >= 0.13:
            expression = "speaking_open"
            viseme = "EE" if mw > 0.46 else "OO"
        elif brow > 0.28 and mar < 0.10:
            expression = "surprised"
            viseme = "REST"
        elif yaw > 0.18 and mar < 0.10:
            expression = "thinking"
            viseme = "REST"
        elif mw > 0.45:
            expression = "smiling"
            viseme = "REST"
        else:
            expression = "listening"
            viseme = "REST"

        return {"expression": expression, "viseme": viseme}

    def build_manifest(
        self,
        analysis: Dict[str, Any],
        library_dir: str,
        manifest_path: str,
    ) -> Dict[str, Any]:
        lib_root = Path(library_dir)
        lib_root.mkdir(parents=True, exist_ok=True)
        for cat in self.CATEGORIES:
            (lib_root / cat).mkdir(parents=True, exist_ok=True)

        frames = [f for f in analysis["frames"] if f.get("valid") and not f.get("duplicate_of")]
        classified_frames: List[Dict[str, Any]] = []
        category_counts: Dict[str, int] = {c: 0 for c in self.CATEGORIES}

        for f in frames:
            cls = self._classify_frame(f)
            expr = cls["expression"]
            category_counts[expr] = category_counts.get(expr, 0) + 1

            dest = lib_root / expr / f["filename"]
            if Path(f["path"]).resolve() != dest.resolve():
                shutil.copy2(f["path"], dest)

            classified_frames.append(
                {
                    "filename": f["filename"],
                    "source_path": f["path"],
                    "library_path": str(dest),
                    "expression": expr,
                    "viseme": cls["viseme"],
                    "sharpness": f["sharpness"],
                    "landmarks": f["landmarks"],
                }
            )

        # Pick best anchor frame: closest to median face scale, centered, sharp, closed/gentle mouth
        with_lm = [f for f in classified_frames if f.get("landmarks")]
        anchor_frame = None
        if with_lm:
            scales = sorted(f["landmarks"]["face_scale"] for f in with_lm)
            median_scale = scales[len(scales) // 2]
            # Prefer clean closed-mouth, open-eyes frame near median scale for stable base
            anchor_frame = min(
                with_lm,
                key=lambda f: (
                    (5.0 if f["landmarks"]["mouth_aspect_ratio"] > 0.08 else 0.0)
                    + (5.0 if f["landmarks"]["eye_aspect_ratio"] < 0.22 else 0.0)
                    + abs(f["landmarks"]["face_scale"] - median_scale) * 8.0
                    + f["landmarks"]["mouth_aspect_ratio"] * 6.0
                    - min(f["sharpness"], 500.0) / 1000.0
                ),
            )
        elif classified_frames:
            anchor_frame = classified_frames[0]

        manifest = {
            "summary": analysis["summary"],
            "category_counts": category_counts,
            "anchor_frame": anchor_frame,
            "frames": classified_frames,
        }

        Path(manifest_path).parent.mkdir(parents=True, exist_ok=True)
        with open(manifest_path, "w", encoding="utf-8") as fp:
            json.dump(manifest, fp, indent=2)

        return manifest

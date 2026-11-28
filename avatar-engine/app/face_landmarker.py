import urllib.request
from pathlib import Path
from typing import Optional, List
import cv2
import numpy as np

try:
    import mediapipe as mp
    from mediapipe.tasks.python import BaseOptions
    from mediapipe.tasks.python.vision import FaceLandmarker, FaceLandmarkerOptions, RunningMode
except Exception:
    mp = None


FACE_LANDMARKER_URL = (
    "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task"
)


class FaceLandmarkerHelper:
    """
    Shared MediaPipe FaceLandmarker wrapper (Tasks API) that detects 478 facial landmarks
    for both AssetAnalyzer and LipSyncEngine.
    """

    def __init__(self, models_dir: Optional[str] = None):
        if models_dir is None:
            models_dir = str(Path(__file__).resolve().parent.parent / "models" / "mediapipe")
        self.model_path = Path(models_dir) / "face_landmarker.task"
        self._landmarker = None

        if mp is not None and self._ensure_model():
            try:
                options = FaceLandmarkerOptions(
                    base_options=BaseOptions(model_asset_path=str(self.model_path)),
                    running_mode=RunningMode.IMAGE,
                    num_faces=1,
                    min_face_detection_confidence=0.45,
                    min_face_presence_confidence=0.45,
                )
                self._landmarker = FaceLandmarker.create_from_options(options)
            except Exception:
                self._landmarker = None

    @property
    def is_active(self) -> bool:
        return self._landmarker is not None

    def _ensure_model(self) -> bool:
        if self.model_path.exists():
            return True
        try:
            self.model_path.parent.mkdir(parents=True, exist_ok=True)
            urllib.request.urlretrieve(FACE_LANDMARKER_URL, str(self.model_path))
            return self.model_path.exists()
        except Exception:
            return False

    def detect(self, image_bgr: np.ndarray) -> Optional[List]:
        if self._landmarker is None:
            return None
        rgb = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2RGB)
        mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb)
        res = self._landmarker.detect(mp_image)
        if not res.face_landmarks:
            return None
        return res.face_landmarks[0]

import math
from typing import Dict, Any, List


SUPPORTED_STATES = [
    "idle",
    "speaking",
    "listening",
    "thinking",
    "smiling",
    "encouraging",
    "surprised",
    "positive_reaction",
]


class FacialAnimationController:
    """
    Coordinates independent facial animation layers:
    - Lip movement (from audio-synced viseme)
    - Natural eye blinking (periodic 3.4s cycle, 150ms blink curve)
    - Eyebrow lift & expression tone
    - Subtle head micro-motion / nod
    """

    def __init__(self, state: str = "speaking"):
        self.state = state if state in SUPPORTED_STATES else "speaking"

    @staticmethod
    def _blink_weight(t_sec: float, period_sec: float = 3.5, blink_dur: float = 0.16) -> float:
        phase = t_sec % period_sec
        if phase < blink_dur:
            # Smooth sine bell 0 -> 1 -> 0
            return float(math.sin(math.pi * (phase / blink_dur)))
        return 0.0

    def get_layer_weights(
        self,
        t_sec: float,
        viseme_sample: Dict[str, Any],
        state_override: str = None,
    ) -> Dict[str, Any]:
        active_state = state_override or self.state
        is_speaking = viseme_sample["viseme"] != "REST" and viseme_sample.get("energy", 0.0) > 0.01

        blink = self._blink_weight(t_sec + 0.4)

        # Expression layer defaults
        smile_boost = 0.15
        brow_lift = 0.0
        head_nod_px = 0.0
        head_tilt_deg = 0.0

        if active_state in ("smiling", "positive_reaction", "encouraging"):
            smile_boost = 0.35
            brow_lift = 0.15
        elif active_state == "surprised":
            smile_boost = 0.05
            brow_lift = 0.45
        elif active_state == "thinking":
            smile_boost = 0.0
            head_tilt_deg = 1.2 * math.sin(t_sec * 0.7)
        elif active_state == "listening":
            smile_boost = 0.18
            head_nod_px = 2.0 * math.sin(t_sec * 1.4)

        if is_speaking:
            # Subtle natural head emphasis while speaking
            head_nod_px += 1.6 * math.sin(t_sec * 2.6) * min(1.0, viseme_sample.get("energy", 0.5))

        return {
            "state": active_state,
            "is_speaking": is_speaking,
            "viseme": viseme_sample["viseme"],
            "lip_open": round(viseme_sample["open"], 4),
            "lip_width": round(viseme_sample["width"], 4),
            "lip_round": round(viseme_sample["round"], 4),
            "blink_weight": round(blink, 4),
            "smile_boost": round(smile_boost, 4),
            "brow_lift": round(brow_lift, 4),
            "head_nod_px": round(head_nod_px, 3),
            "head_tilt_deg": round(head_tilt_deg, 3),
        }

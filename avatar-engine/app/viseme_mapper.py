from typing import Dict, List, Any


PHONEME_TO_VISEME: Dict[str, str] = {
    "SIL": "REST",
    "PAU": "REST",
    # Bilabial closed mouth (M, B, P)
    "M": "BMP",
    "B": "BMP",
    "P": "BMP",
    # Labiodental (F, V)
    "F": "FV",
    "V": "FV",
    # Dental / Alveolar (TH, DH, L, N, T, D, S, Z)
    "TH": "LTH",
    "DH": "LTH",
    "L": "LTH",
    "N": "LTH",
    "T": "LTH",
    "D": "LTH",
    "S": "EE",
    "Z": "EE",
    "SH": "OO",
    "ZH": "OO",
    "CH": "OO",
    "JH": "OO",
    # Open vowels (AA, AE, AH, AO, AW, AY)
    "AA": "AA",
    "AE": "AA",
    "AH": "AA",
    "AO": "AA",
    "AW": "AA",
    "AY": "AA",
    # Wide/smile vowels (EE, EH, EY, IH, IY)
    "EH": "EE",
    "EY": "EE",
    "IH": "EE",
    "IY": "EE",
    "Y": "EE",
    # Rounded vowels (OO, OW, OY, UH, UW, W, R, ER)
    "OW": "OO",
    "OY": "OO",
    "UH": "OO",
    "UW": "OO",
    "W": "OO",
    "R": "OO",
    "ER": "OO",
    # Velars / glottals
    "K": "AA",
    "G": "AA",
    "NG": "EE",
    "HH": "AA",
}

# Target mouth geometry per viseme: (openness 0..1, width 0..1, roundness 0..1)
VISEME_SHAPES: Dict[str, Dict[str, float]] = {
    "REST": {"open": 0.0, "width": 0.0, "round": 0.0},
    "BMP": {"open": 0.0, "width": -0.05, "round": 0.0},
    "FV": {"open": 0.14, "width": 0.05, "round": 0.0},
    "LTH": {"open": 0.28, "width": 0.05, "round": 0.0},
    "EE": {"open": 0.34, "width": 0.22, "round": 0.0},
    "AA": {"open": 0.78, "width": 0.08, "round": 0.1},
    "OO": {"open": 0.52, "width": -0.22, "round": 0.7},
}


class VisemeMapper:
    """
    Converts phoneme timeline into smoothed viseme keyframes with minimum hold duration
    to prevent unnatural rapid mouth switching.
    """

    def __init__(self, min_hold_sec: float = 0.07):
        self.min_hold_sec = min_hold_sec

    def map_timeline(self, phoneme_timeline: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        raw_visemes: List[Dict[str, Any]] = []
        for item in phoneme_timeline:
            ph = item["phoneme"]
            viseme = PHONEME_TO_VISEME.get(ph, "AA")
            energy = float(item.get("energy", 0.0))
            if viseme == "REST" or energy <= 0.01:
                viseme = "REST"

            if (
                raw_visemes
                and raw_visemes[-1]["viseme"] == viseme
                and (viseme == "REST" or (item["end"] - raw_visemes[-1]["start"]) < 0.22)
            ):
                raw_visemes[-1]["end"] = item["end"]
                raw_visemes[-1]["energy"] = max(raw_visemes[-1]["energy"], energy)
            else:
                raw_visemes.append(
                    {
                        "viseme": viseme,
                        "start": item["start"],
                        "end": item["end"],
                        "energy": energy,
                    }
                )

        # Merge ultra-short non-REST visemes (< min_hold_sec) into neighbors
        smoothed: List[Dict[str, Any]] = []
        for v in raw_visemes:
            dur = v["end"] - v["start"]
            if smoothed and v["viseme"] != "REST" and dur < self.min_hold_sec and smoothed[-1]["viseme"] != "REST":
                smoothed[-1]["end"] = v["end"]
            else:
                smoothed.append(v)

        return smoothed

    @staticmethod
    def sample_at_time(viseme_timeline: List[Dict[str, Any]], t_sec: float) -> Dict[str, Any]:
        if not viseme_timeline:
            return {"viseme": "REST", **VISEME_SHAPES["REST"], "energy": 0.0}

        for idx, v in enumerate(viseme_timeline):
            if v["start"] <= t_sec <= v["end"]:
                shape = VISEME_SHAPES.get(v["viseme"], VISEME_SHAPES["REST"]).copy()
                # Subtle co-articulation blend at edges (25ms)
                dur = max(v["end"] - v["start"], 1e-4)
                rel = (t_sec - v["start"]) / dur
                if rel > 0.78 and idx + 1 < len(viseme_timeline):
                    nxt = VISEME_SHAPES.get(viseme_timeline[idx + 1]["viseme"], VISEME_SHAPES["REST"])
                    alpha = (rel - 0.78) / 0.22 * 0.45
                    for k in ("open", "width", "round"):
                        shape[k] = shape[k] * (1.0 - alpha) + nxt[k] * alpha

                # Scale mouth openness gently by speech energy
                energy = float(v.get("energy", 0.0))
                if v["viseme"] != "REST":
                    scale = 0.55 + 0.45 * min(1.0, energy)
                    shape["open"] *= scale
                return {"viseme": v["viseme"], **shape, "energy": energy}

        return {"viseme": "REST", **VISEME_SHAPES["REST"], "energy": 0.0}

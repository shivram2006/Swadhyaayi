import re
import wave
from typing import Dict, List, Any, Tuple
import numpy as np

try:
    from g2p_en import G2p
except Exception:
    G2p = None


class PhonemeAligner:
    """
    Converts text into ARPAbet phonemes and aligns them directly against the
    real WAV audio RMS energy envelope so silent pauses map strictly to SIL/closed mouth.
    """

    def __init__(self):
        self._g2p = None
        if G2p is not None:
            try:
                self._g2p = G2p()
            except Exception:
                self._g2p = None

    def text_to_phonemes(self, text: str) -> List[str]:
        if self._g2p is not None:
            try:
                raw = self._g2p(text)
                cleaned: List[str] = []
                for token in raw:
                    if token in {",", ".", "!", "?", ";", ":"}:
                        cleaned.append("PAU")
                    elif token.strip() and re.match(r"^[A-Z]+[0-9]?$", token):
                        cleaned.append(re.sub(r"[0-9]", "", token))
                if cleaned:
                    return cleaned
            except Exception:
                pass

        # Deterministic rule-based fallback
        tokens: List[str] = []
        for ch in text.lower():
            if ch in ".!?,;:":
                tokens.append("PAU")
            elif ch in "a":
                tokens.append("AA")
            elif ch in "ei":
                tokens.append("IY")
            elif ch in "ou":
                tokens.append("OW")
            elif ch in "bmp":
                tokens.append("M")
            elif ch in "fv":
                tokens.append("F")
            elif ch in "l":
                tokens.append("L")
            elif ch.isalpha():
                tokens.append("T")
        return tokens or ["SIL"]

    @staticmethod
    def _detect_speech_segments(
        wav_path: str,
        frame_ms: int = 20,
        silence_threshold_ratio: float = 0.08,
        min_silence_ms: int = 120,
    ) -> Tuple[float, List[Tuple[float, float, float]]]:
        """
        Returns (total_duration_sec, list of (start_sec, end_sec, avg_energy_norm))
        for voiced speech intervals.
        """
        with wave.open(wav_path, "rb") as wf:
            rate = wf.getframerate()
            n_frames = wf.getnframes()
            raw = wf.readframes(n_frames)

        samples = np.frombuffer(raw, dtype=np.int16).astype(np.float32) / 32768.0
        total_sec = len(samples) / float(rate) if rate else 0.0
        if len(samples) == 0:
            return 0.0, []

        step = max(1, int(rate * frame_ms / 1000))
        energies = []
        for i in range(0, len(samples), step):
            chunk = samples[i : i + step]
            rms = float(np.sqrt(np.mean(chunk * chunk))) if len(chunk) else 0.0
            energies.append(rms)

        peak = max(energies) if energies else 1.0
        thresh = max(0.012, peak * silence_threshold_ratio)

        # Smooth energy slightly (3-window moving average)
        smooth_e = np.convolve(energies, np.ones(3) / 3.0, mode="same")

        is_voiced = [e >= thresh for e in smooth_e]
        min_sil_windows = max(1, min_silence_ms // frame_ms)

        # Bridge tiny gaps shorter than min_silence_ms
        i = 0
        while i < len(is_voiced):
            if not is_voiced[i]:
                j = i
                while j < len(is_voiced) and not is_voiced[j]:
                    j += 1
                if (j - i) < min_sil_windows and i > 0 and j < len(is_voiced):
                    for k in range(i, j):
                        is_voiced[k] = True
                i = j
            else:
                i += 1

        segments: List[Tuple[float, float, float]] = []
        i = 0
        while i < len(is_voiced):
            if is_voiced[i]:
                j = i
                while j < len(is_voiced) and is_voiced[j]:
                    j += 1
                s_t = round(i * frame_ms / 1000.0, 4)
                e_t = round(min(total_sec, j * frame_ms / 1000.0), 4)
                avg_e = float(np.mean(smooth_e[i:j]) / max(peak, 1e-5))
                if e_t - s_t >= 0.04:
                    segments.append((s_t, e_t, min(1.0, avg_e)))
                i = j
            else:
                i += 1

        return round(total_sec, 4), segments

    def align(self, text: str, wav_path: str) -> Dict[str, Any]:
        duration_sec, speech_segments = self._detect_speech_segments(wav_path)
        phonemes = self.text_to_phonemes(text)

        # Split phonemes by punctuation pauses into groups
        groups: List[List[str]] = []
        cur: List[str] = []
        for ph in phonemes:
            if ph == "PAU":
                if cur:
                    groups.append(cur)
                    cur = []
            else:
                cur.append(ph)
        if cur:
            groups.append(cur)

        if not groups:
            groups = [["SIL"]]

        timeline: List[Dict[str, Any]] = []
        if not speech_segments:
            timeline.append({"phoneme": "SIL", "start": 0.0, "end": duration_sec, "energy": 0.0})
            return {"duration_sec": duration_sec, "phonemes": timeline, "speech_segments": []}

        # Distribute phoneme groups proportionally across detected voiced speech segments
        total_speech_dur = sum(e - s for s, e, _ in speech_segments)
        flat_phonemes = [ph for g in groups for ph in g]
        total_ph = max(1, len(flat_phonemes))

        cursor_t = 0.0
        ph_idx = 0

        for seg_idx, (seg_start, seg_end, seg_energy) in enumerate(speech_segments):
            if seg_start > cursor_t + 0.005:
                timeline.append(
                    {
                        "phoneme": "SIL",
                        "start": round(cursor_t, 4),
                        "end": round(seg_start, 4),
                        "energy": 0.0,
                    }
                )

            seg_dur = seg_end - seg_start
            if seg_idx == len(speech_segments) - 1:
                seg_ph_count = max(1, total_ph - ph_idx)
            else:
                seg_ph_count = max(1, round(total_ph * (seg_dur / max(total_speech_dur, 1e-5))))

            seg_phs = flat_phonemes[ph_idx : ph_idx + seg_ph_count] or ["AH"]
            ph_idx = min(total_ph, ph_idx + seg_ph_count)

            # Weight vowels slightly longer than consonants for natural timing
            vowels = {"AA", "AE", "AH", "AO", "AW", "AY", "EH", "ER", "EY", "IH", "IY", "OW", "OY", "UH", "UW"}
            weights = [1.45 if p in vowels else 0.85 for p in seg_phs]
            w_sum = sum(weights)

            t = seg_start
            for p, w in zip(seg_phs, weights):
                d = seg_dur * (w / w_sum)
                timeline.append(
                    {
                        "phoneme": p,
                        "start": round(t, 4),
                        "end": round(t + d, 4),
                        "energy": round(seg_energy, 3),
                    }
                )
                t += d

            cursor_t = seg_end

        if cursor_t < duration_sec - 0.005:
            timeline.append(
                {
                    "phoneme": "SIL",
                    "start": round(cursor_t, 4),
                    "end": round(duration_sec, 4),
                    "energy": 0.0,
                }
            )

        return {
            "duration_sec": duration_sec,
            "speech_segments": [
                {"start": s, "end": e, "energy": round(en, 3)} for s, e, en in speech_segments
            ],
            "phonemes": timeline,
        }

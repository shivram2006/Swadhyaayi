import os
import subprocess
import urllib.request
import wave
from pathlib import Path
from typing import Dict, Any, Optional


DEFAULT_PIPER_MODEL_NAME = "en_US-amy-medium"
DEFAULT_PIPER_ONNX_URL = (
    "https://huggingface.co/rhasspy/piper-voices/resolve/v1.0.0/en/en_US/amy/medium/en_US-amy-medium.onnx"
)
DEFAULT_PIPER_JSON_URL = (
    "https://huggingface.co/rhasspy/piper-voices/resolve/v1.0.0/en/en_US/amy/medium/en_US-amy-medium.onnx.json"
)


class AudioGenerator:
    """
    Generates natural, open-source interviewer speech using Piper TTS + FFmpeg normalization.
    Never depends on paid voice APIs.
    """

    def __init__(self, models_dir: str):
        self.models_dir = Path(models_dir)
        self.models_dir.mkdir(parents=True, exist_ok=True)
        self.onnx_path = self.models_dir / f"{DEFAULT_PIPER_MODEL_NAME}.onnx"
        self.json_path = self.models_dir / f"{DEFAULT_PIPER_MODEL_NAME}.onnx.json"

    def ensure_model(self) -> bool:
        if self.onnx_path.exists() and self.json_path.exists():
            return True
        try:
            if not self.onnx_path.exists():
                urllib.request.urlretrieve(DEFAULT_PIPER_ONNX_URL, str(self.onnx_path))
            if not self.json_path.exists():
                urllib.request.urlretrieve(DEFAULT_PIPER_JSON_URL, str(self.json_path))
            return self.onnx_path.exists() and self.json_path.exists()
        except Exception:
            return False

    @staticmethod
    def get_wav_duration(wav_path: str) -> float:
        with wave.open(wav_path, "rb") as wf:
            frames = wf.getnframes()
            rate = wf.getframerate()
            return round(frames / float(rate), 4) if rate else 0.0

    def synthesize(self, text: str, output_wav_path: str) -> Dict[str, Any]:
        out_path = Path(output_wav_path)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        raw_wav = out_path.with_suffix(".raw.wav")

        engine_used = "piper"
        has_model = self.ensure_model()

        if has_model:
            try:
                from piper.voice import PiperVoice

                voice = PiperVoice.load(str(self.onnx_path), config_path=str(self.json_path))
                with wave.open(str(raw_wav), "wb") as wf:
                    voice.synthesize_wav(text, wf)
            except Exception:
                # Fallback to piper CLI if Python API differs
                proc = subprocess.run(
                    ["piper", "--model", str(self.onnx_path), "--output_file", str(raw_wav)],
                    input=text.encode("utf-8"),
                    capture_output=True,
                    timeout=60,
                )
                if proc.returncode != 0 or not raw_wav.exists():
                    has_model = False

        if not has_model or not raw_wav.exists():
            # Offline Windows SAPI fallback via PowerShell System.Speech (zero paid APIs)
            engine_used = "system_speech_offline"
            safe_text = text.replace("'", "''")
            ps_script = (
                f"Add-Type -AssemblyName System.Speech; "
                f"$s = New-Object System.Speech.Synthesis.SpeechSynthesizer; "
                f"$s.Rate = 0; "
                f"$s.SetOutputToWaveFile('{str(raw_wav)}'); "
                f"$s.Speak('{safe_text}'); "
                f"$s.Dispose()"
            )
            subprocess.run(["powershell", "-NoProfile", "-Command", ps_script], check=True, timeout=60)

        # Normalize sample rate (22050Hz mono) & loudness with FFmpeg
        subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-i",
                str(raw_wav),
                "-ar",
                "22050",
                "-ac",
                "1",
                "-af",
                "loudnorm=I=-16:TP=-1.5:LRA=11",
                str(out_path),
            ],
            capture_output=True,
            check=True,
            timeout=60,
        )

        if raw_wav.exists():
            raw_wav.unlink(missing_ok=True)

        duration_sec = self.get_wav_duration(str(out_path))
        return {
            "audio_path": str(out_path),
            "duration_sec": duration_sec,
            "sample_rate": 22050,
            "engine": engine_used,
        }

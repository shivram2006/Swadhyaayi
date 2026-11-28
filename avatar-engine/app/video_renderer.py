import subprocess
from pathlib import Path
from typing import Dict, Any, List
import cv2

from .audio_generator import AudioGenerator
from .phoneme_aligner import PhonemeAligner
from .viseme_mapper import VisemeMapper
from .facial_animation import FacialAnimationController
from .lip_sync_engine import LipSyncEngine


BASIC_STARTER_QUESTIONS: List[Dict[str, str]] = [
    {
        "id": "basic_tell_me_about_yourself",
        "title": "Tell me about yourself",
        "text": "Hello, I am Anjali Sharma from Human Resources. To begin our interview, please tell me about yourself, your background, and your key projects.",
        "state": "smiling",
    },
    {
        "id": "basic_strengths_weaknesses",
        "title": "Strengths and areas of improvement",
        "text": "Thank you. What would you consider your greatest technical strengths, and what is one area you are currently working to improve?",
        "state": "listening",
    },
    {
        "id": "basic_why_this_role",
        "title": "Why this role and company",
        "text": "Why are you interested in this software engineering role, and what motivates you to join our team?",
        "state": "encouraging",
    },
    {
        "id": "basic_challenging_project",
        "title": "Most challenging project",
        "text": "Walk me through the most challenging technical problem you solved recently, and how you approached debugging it.",
        "state": "thinking",
    },
]


class VideoRenderer:
    """
    Combines audio generation, phoneme alignment, viseme mapping, and LipSyncEngine
    to render synchronized H.264/AAC MP4 videos at fixed FPS.
    """

    def __init__(self, models_dir: str, output_dir: str, fps: int = 25):
        self.audio_gen = AudioGenerator(models_dir)
        self.aligner = PhonemeAligner()
        self.viseme_mapper = VisemeMapper()
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.fps = fps

    def render(
        self,
        job_id: str,
        text: str,
        anchor_image_path: str,
        state: str = "speaking",
    ) -> Dict[str, Any]:
        wav_path = self.output_dir / f"{job_id}.wav"
        silent_mp4 = self.output_dir / f"{job_id}.silent.mp4"
        final_mp4 = self.output_dir / f"{job_id}.mp4"

        audio_info = self.audio_gen.synthesize(text, str(wav_path))
        alignment = self.aligner.align(text, str(wav_path))
        visemes = self.viseme_mapper.map_timeline(alignment["phonemes"])

        duration = max(0.5, float(audio_info["duration_sec"]))
        total_frames = max(1, int(round(duration * self.fps)))

        engine = LipSyncEngine(anchor_image_path)
        controller = FacialAnimationController(state=state)

        fourcc = cv2.VideoWriter_fourcc(*"mp4v")
        writer = cv2.VideoWriter(str(silent_mp4), fourcc, float(self.fps), (engine.w, engine.h))

        frame_metadata: List[Dict[str, Any]] = []
        for idx in range(total_frames):
            t_sec = idx / float(self.fps)
            v_sample = self.viseme_mapper.sample_at_time(visemes, t_sec)
            layers = controller.get_layer_weights(t_sec, v_sample, state_override=state)
            rendered = engine.render_frame(layers)
            writer.write(rendered)
            if idx % 5 == 0:
                frame_metadata.append({"frame": idx, "t": round(t_sec, 3), **layers})

        writer.release()

        # Mux video + audio with FFmpeg (H.264 + AAC, faststart for web streaming)
        subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-i",
                str(silent_mp4),
                "-i",
                str(wav_path),
                "-c:v",
                "libx264",
                "-preset",
                "veryfast",
                "-pix_fmt",
                "yuv420p",
                "-c:a",
                "aac",
                "-b:a",
                "128k",
                "-movflags",
                "+faststart",
                "-shortest",
                str(final_mp4),
            ],
            capture_output=True,
            check=True,
            timeout=120,
        )

        silent_mp4.unlink(missing_ok=True)

        return {
            "job_id": job_id,
            "video_path": str(final_mp4),
            "audio_path": str(wav_path),
            "duration_sec": duration,
            "fps": self.fps,
            "total_frames": total_frames,
            "audio_engine": audio_info["engine"],
            "viseme_count": len(visemes),
            "phoneme_count": len(alignment["phonemes"]),
            "visemes": visemes,
            "sample_timeline": frame_metadata,
        }

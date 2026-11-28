import json
import subprocess
import sys
from pathlib import Path

ENGINE_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ENGINE_ROOT))

from app.asset_analyzer import AssetAnalyzer
from app.asset_classifier import AssetClassifier
from app.audio_generator import AudioGenerator
from app.phoneme_aligner import PhonemeAligner
from app.viseme_mapper import VisemeMapper
from app.video_renderer import VideoRenderer, BASIC_STARTER_QUESTIONS


def ffprobe_durations(mp4_path: str):
    res = subprocess.run(
        [
            "ffprobe",
            "-v",
            "error",
            "-show_entries",
            "stream=codec_type,duration",
            "-of",
            "json",
            mp4_path,
        ],
        capture_output=True,
        text=True,
        check=True,
    )
    data = json.loads(res.stdout)
    durations = {}
    for s in data.get("streams", []):
        durations[s["codec_type"]] = float(s.get("duration", 0.0))
    return durations


def main():
    raw_dir = ENGINE_ROOT / "assets" / "raw_upload"
    lib_dir = ENGINE_ROOT / "assets" / "library"
    manifest_path = ENGINE_ROOT / "assets" / "manifest.json"
    models_dir = ENGINE_ROOT / "models" / "piper"
    out_dir = ENGINE_ROOT / "output"

    print("=== 1. Asset Analysis & Classification ===")
    analyzer = AssetAnalyzer()
    analysis = analyzer.analyze_directory(str(raw_dir))
    manifest = AssetClassifier().build_manifest(analysis, str(lib_dir), str(manifest_path))
    print("Summary:", json.dumps(manifest["summary"], indent=2))
    print("Categories:", json.dumps(manifest["category_counts"], indent=2))
    assert manifest["anchor_frame"] is not None, "Anchor frame must be selected"

    print("\n=== 2. Phoneme & Pause Alignment QA (Short, Long, Punctuation, Vowels/Consonants) ===")
    audio_gen = AudioGenerator(str(models_dir))
    aligner = PhonemeAligner()
    mapper = VisemeMapper()

    qa_sentences = {
        "short": "Tell me about yourself.",
        "vowels_consonants": "Peter Piper picked a peck of pickled peppers, oh my!",
        "pauses": "Welcome to Innovate Solutions. Take a breath... and walk me through your resume.",
        "long": BASIC_STARTER_QUESTIONS[0]["text"],
    }

    for label, text in qa_sentences.items():
        wav = out_dir / f"qa_{label}.wav"
        info = audio_gen.synthesize(text, str(wav))
        aligned = aligner.align(text, str(wav))
        visemes = mapper.map_timeline(aligned["phonemes"])
        sil_count = sum(1 for v in visemes if v["viseme"] == "REST")
        print(
            f"[{label}] engine={info['engine']} dur={info['duration_sec']}s "
            f"phonemes={len(aligned['phonemes'])} visemes={len(visemes)} pauses={sil_count}"
        )
        assert info["duration_sec"] > 0.5
        assert len(visemes) >= 3

    print("\n=== 3. Video Render & Audio-Video Sync QA (Basic Question: Tell me about yourself) ===")
    renderer = VideoRenderer(str(models_dir), str(out_dir), fps=25)
    render_res = renderer.render(
        job_id="qa_tell_me_about_yourself",
        text=BASIC_STARTER_QUESTIONS[0]["text"],
        anchor_image_path=manifest["anchor_frame"]["library_path"],
        state=BASIC_STARTER_QUESTIONS[0]["state"],
    )
    streams = ffprobe_durations(render_res["video_path"])
    av_diff = abs(streams.get("video", 0.0) - streams.get("audio", 0.0))
    print(f"Rendered: {render_res['video_path']}")
    print(f"Streams: {streams}, AV_DIFF={av_diff:.3f}s, frames={render_res['total_frames']}")
    assert av_diff < 0.25, f"Audio/Video desync too large: {av_diff}"
    print("\nALL_AVATAR_QA_PASSED")


if __name__ == "__main__":
    main()

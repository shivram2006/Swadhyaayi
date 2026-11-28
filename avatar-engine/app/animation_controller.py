import os
import json
import uuid
from pathlib import Path
from typing import Dict, Any, Optional
from fastapi import FastAPI, HTTPException, Header, BackgroundTasks
from fastapi.responses import FileResponse
from pydantic import BaseModel

from .asset_analyzer import AssetAnalyzer
from .asset_classifier import AssetClassifier
from .audio_generator import AudioGenerator
from .phoneme_aligner import PhonemeAligner
from .viseme_mapper import VisemeMapper
from .video_renderer import VideoRenderer, BASIC_STARTER_QUESTIONS

BASE_DIR = Path(__file__).resolve().parent.parent
ASSETS_RAW_DIR = BASE_DIR / "assets" / "raw_upload"
ASSETS_LIB_DIR = BASE_DIR / "assets" / "library"
MANIFEST_PATH = BASE_DIR / "assets" / "manifest.json"
MODELS_DIR = BASE_DIR / "models" / "piper"
OUTPUT_DIR = BASE_DIR / "output"

API_KEY = os.getenv("AVATAR_ENGINE_API_KEY", "").strip()

app = FastAPI(title="Swadhyayi AI Avatar Animation Engine", version="1.0.0")
_jobs: Dict[str, Dict[str, Any]] = {}


def verify_api_key(x_avatar_key: Optional[str]) -> None:
    if API_KEY and x_avatar_key != API_KEY:
        raise HTTPException(status_code=401, detail="Invalid avatar engine API key")


class SpeechRequest(BaseModel):
    text: str


class RenderRequest(BaseModel):
    text: str
    state: str = "speaking"
    async_mode: bool = False


@app.get("/health")
def health():
    return {"status": "ok", "manifest_exists": MANIFEST_PATH.exists()}


@app.get("/api/avatar/starter-questions")
def get_starter_questions(x_avatar_key: Optional[str] = Header(default=None)):
    verify_api_key(x_avatar_key)
    return {"questions": BASIC_STARTER_QUESTIONS}


@app.post("/api/avatar/analyze")
def analyze_assets(x_avatar_key: Optional[str] = Header(default=None)):
    verify_api_key(x_avatar_key)
    analyzer = AssetAnalyzer()
    analysis = analyzer.analyze_directory(str(ASSETS_RAW_DIR))
    classifier = AssetClassifier()
    manifest = classifier.build_manifest(analysis, str(ASSETS_LIB_DIR), str(MANIFEST_PATH))
    return {
        "summary": manifest["summary"],
        "category_counts": manifest["category_counts"],
        "anchor_frame": manifest["anchor_frame"],
    }


@app.post("/api/avatar/speech")
def generate_speech(req: SpeechRequest, x_avatar_key: Optional[str] = Header(default=None)):
    verify_api_key(x_avatar_key)
    job_id = f"speech_{uuid.uuid4().hex[:10]}"
    audio_gen = AudioGenerator(str(MODELS_DIR))
    wav_path = OUTPUT_DIR / f"{job_id}.wav"
    audio_info = audio_gen.synthesize(req.text, str(wav_path))
    aligner = PhonemeAligner()
    alignment = aligner.align(req.text, str(wav_path))
    visemes = VisemeMapper().map_timeline(alignment["phonemes"])
    return {
        "job_id": job_id,
        **audio_info,
        "alignment": alignment,
        "visemes": visemes,
    }


def _run_render_job(job_id: str, text: str, state: str):
    try:
        _jobs[job_id] = {"status": "RENDERING", "job_id": job_id}
        if not MANIFEST_PATH.exists():
            analyze_assets(None)
        with open(MANIFEST_PATH, "r", encoding="utf-8") as fp:
            manifest = json.load(fp)
        anchor = manifest.get("anchor_frame")
        if not anchor:
            raise RuntimeError("No valid avatar anchor frame found in manifest")
        renderer = VideoRenderer(str(MODELS_DIR), str(OUTPUT_DIR))
        result = renderer.render(job_id, text, anchor["library_path"], state=state)
        _jobs[job_id] = {"status": "COMPLETED", **result}
    except Exception as exc:
        _jobs[job_id] = {"status": "FAILED", "job_id": job_id, "error": str(exc)}


@app.post("/api/avatar/render")
def render_avatar(
    req: RenderRequest,
    background_tasks: BackgroundTasks,
    x_avatar_key: Optional[str] = Header(default=None),
):
    verify_api_key(x_avatar_key)
    job_id = f"vid_{uuid.uuid4().hex[:10]}"
    if req.async_mode:
        _jobs[job_id] = {"status": "QUEUED", "job_id": job_id}
        background_tasks.add_task(_run_render_job, job_id, req.text, req.state)
        return {"status": "QUEUED", "job_id": job_id}

    _run_render_job(job_id, req.text, req.state)
    job = _jobs[job_id]
    if job.get("status") == "FAILED":
        raise HTTPException(status_code=500, detail=job.get("error", "Render failed"))
    return job


@app.post("/api/avatar/prerender-basics")
def prerender_basic_questions(x_avatar_key: Optional[str] = Header(default=None)):
    verify_api_key(x_avatar_key)
    if not MANIFEST_PATH.exists():
        analyze_assets(None)
    with open(MANIFEST_PATH, "r", encoding="utf-8") as fp:
        manifest = json.load(fp)
    anchor = manifest.get("anchor_frame")
    if not anchor:
        raise HTTPException(status_code=400, detail="No anchor frame found")

    renderer = VideoRenderer(str(MODELS_DIR), str(OUTPUT_DIR))
    results = []
    for q in BASIC_STARTER_QUESTIONS:
        job_id = q["id"]
        out_mp4 = OUTPUT_DIR / f"{job_id}.mp4"
        if out_mp4.exists():
            results.append({"job_id": job_id, "title": q["title"], "cached": True, "video_path": str(out_mp4)})
            continue
        res = renderer.render(job_id, q["text"], anchor["library_path"], state=q["state"])
        _jobs[job_id] = {"status": "COMPLETED", **res}
        results.append({"job_id": job_id, "title": q["title"], "cached": False, "duration_sec": res["duration_sec"]})
    return {"prerendered": results}


@app.get("/api/avatar/status/{job_id}")
def get_status(job_id: str, x_avatar_key: Optional[str] = Header(default=None)):
    verify_api_key(x_avatar_key)
    job = _jobs.get(job_id)
    if not job:
        mp4 = OUTPUT_DIR / f"{job_id}.mp4"
        if mp4.exists():
            return {"status": "COMPLETED", "job_id": job_id, "video_path": str(mp4)}
        raise HTTPException(status_code=404, detail="Job not found")
    return job


@app.get("/api/avatar/media/{job_id}")
def get_media(job_id: str, x_avatar_key: Optional[str] = Header(default=None)):
    verify_api_key(x_avatar_key)
    mp4 = OUTPUT_DIR / f"{job_id}.mp4"
    if mp4.exists():
        return FileResponse(str(mp4), media_type="video/mp4", filename=f"{job_id}.mp4")
    wav = OUTPUT_DIR / f"{job_id}.wav"
    if wav.exists():
        return FileResponse(str(wav), media_type="audio/wav", filename=f"{job_id}.wav")
    raise HTTPException(status_code=404, detail="Media file not found")


@app.get("/api/avatar/metadata/{job_id}")
def get_metadata(job_id: str, x_avatar_key: Optional[str] = Header(default=None)):
    verify_api_key(x_avatar_key)
    job = _jobs.get(job_id)
    if not job:
        raise HTTPException(status_code=404, detail="Metadata not found")
    return job

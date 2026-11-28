import React, { useEffect, useRef } from 'react';

interface VoiceOrbProps {
  isSpeaking: boolean;
  isListening: boolean;
  isLoading: boolean;
  analyser: AnalyserNode | null;
}

/**
 * ChatGPT Voice Mode-inspired fluid glowing orb that bubbles and ripples
 * in real time with the interviewer's speech audio frequency & amplitude.
 */
export const VoiceOrb: React.FC<VoiceOrbProps> = ({
  isSpeaking,
  isListening,
  isLoading,
  analyser,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const smoothEnergyRef = useRef<number>(0);
  const smoothBassRef = useRef<number>(0);
  const smoothTrebleRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    const freqData = analyser ? new Uint8Array(analyser.frequencyBinCount) : null;

    const render = (nowMs: number) => {
      const t = nowMs * 0.001;
      const dpr = window.devicePixelRatio || 1;
      const cssSize = 260;
      if (canvas.width !== cssSize * dpr || canvas.height !== cssSize * dpr) {
        canvas.width = cssSize * dpr;
        canvas.height = cssSize * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, cssSize, cssSize);

      // Compute real-time audio energy from AnalyserNode
      let rawBass = 0;
      let rawMid = 0;
      let rawTreble = 0;
      if (analyser && freqData && isSpeaking) {
        analyser.getByteFrequencyData(freqData);
        const len = freqData.length;
        const bassEnd = Math.max(2, Math.floor(len * 0.18));
        const midEnd = Math.max(bassEnd + 2, Math.floor(len * 0.55));
        for (let i = 0; i < bassEnd; i++) rawBass += freqData[i];
        for (let i = bassEnd; i < midEnd; i++) rawMid += freqData[i];
        for (let i = midEnd; i < len; i++) rawTreble += freqData[i];
        rawBass = rawBass / (bassEnd * 255);
        rawMid = rawMid / ((midEnd - bassEnd) * 255);
        rawTreble = rawTreble / (Math.max(1, len - midEnd) * 255);
      } else if (isListening) {
        rawBass = 0.18 + 0.08 * Math.sin(t * 3.2);
        rawMid = 0.12;
      } else if (isLoading) {
        rawBass = 0.12 + 0.06 * Math.sin(t * 4.5);
        rawMid = 0.14;
      }

      const rawEnergy = Math.min(1, rawBass * 0.65 + rawMid * 0.45 + rawTreble * 0.25);
      smoothEnergyRef.current = smoothEnergyRef.current * 0.72 + rawEnergy * 0.28;
      smoothBassRef.current = smoothBassRef.current * 0.70 + rawBass * 0.30;
      smoothTrebleRef.current = smoothTrebleRef.current * 0.74 + rawTreble * 0.26;

      const energy = smoothEnergyRef.current;
      const bass = smoothBassRef.current;
      const treble = smoothTrebleRef.current;

      const cx = cssSize / 2;
      const cy = cssSize / 2;
      const baseRadius = 74 + bass * 18 + Math.sin(t * 1.8) * 2.2;

      // Outer ambient halo
      const haloGrad = ctx.createRadialGradient(cx, cy, baseRadius * 0.55, cx, cy, baseRadius * 1.55);
      if (isListening) {
        haloGrad.addColorStop(0, `rgba(52, 211, 153, ${0.26 + energy * 0.3})`);
        haloGrad.addColorStop(0.6, 'rgba(16, 185, 129, 0.08)');
        haloGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
      } else {
        haloGrad.addColorStop(0, `rgba(96, 165, 250, ${0.28 + energy * 0.36})`);
        haloGrad.addColorStop(0.55, `rgba(56, 189, 248, ${0.10 + energy * 0.14})`);
        haloGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
      }
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 1.55, 0, Math.PI * 2);
      ctx.fill();

      // Helper to draw organic bubbling harmonic blob
      const drawBlob = (
        rBase: number,
        amp: number,
        speed: number,
        phaseOffset: number,
        fillStyle: CanvasGradient | string
      ) => {
        const steps = 96;
        ctx.beginPath();
        for (let i = 0; i <= steps; i++) {
          const angle = (i / steps) * Math.PI * 2;
          const wave1 = Math.sin(angle * 3 + t * speed + phaseOffset) * amp;
          const wave2 = Math.cos(angle * 5 - t * (speed * 1.35) + phaseOffset * 1.7) * (amp * 0.55);
          const wave3 = Math.sin(angle * 7 + t * (speed * 1.9)) * (amp * 0.30 * (0.4 + treble * 1.8));
          const r = rBase + wave1 + wave2 + wave3;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = fillStyle;
        ctx.fill();
      };

      const bubbleAmp = isSpeaking
        ? 2.2 + energy * 13.5
        : isListening
          ? 2.5 + Math.sin(t * 3) * 1.2
          : isLoading
            ? 3.2
            : 1.4;

      // Primary fluid sphere gradient (ChatGPT sky-blue / white / deep-azure look)
      const shiftX = Math.sin(t * (1.2 + energy * 2.5)) * (12 + energy * 10);
      const shiftY = Math.cos(t * (1.0 + energy * 2.1)) * (12 + energy * 10);
      const mainGrad = ctx.createRadialGradient(
        cx - 18 + shiftX,
        cy - 22 + shiftY,
        baseRadius * 0.12,
        cx,
        cy,
        baseRadius * 1.15
      );
      if (isListening) {
        mainGrad.addColorStop(0, '#ecfdf5');
        mainGrad.addColorStop(0.35, '#6ee7b7');
        mainGrad.addColorStop(0.75, '#10b981');
        mainGrad.addColorStop(1, '#047857');
      } else {
        mainGrad.addColorStop(0, '#f0f9ff');
        mainGrad.addColorStop(0.28, '#bae6fd');
        mainGrad.addColorStop(0.62, '#38bdf8');
        mainGrad.addColorStop(0.88, '#2563eb');
        mainGrad.addColorStop(1, '#1d4ed8');
      }

      drawBlob(baseRadius, bubbleAmp, isSpeaking ? 4.2 : 1.6, 0, mainGrad);

      // Inner translucent swirling cloud layer
      const innerGrad = ctx.createRadialGradient(
        cx + shiftX * 0.8,
        cy - shiftY * 0.8,
        4,
        cx,
        cy,
        baseRadius * 0.9
      );
      innerGrad.addColorStop(0, 'rgba(255, 255, 255, 0.72)');
      innerGrad.addColorStop(0.5, 'rgba(186, 230, 253, 0.25)');
      innerGrad.addColorStop(1, 'rgba(56, 189, 248, 0.0)');

      ctx.globalCompositeOperation = 'screen';
      drawBlob(baseRadius * 0.84, bubbleAmp * 0.85, isSpeaking ? -3.4 : -1.3, 2.1, innerGrad);
      ctx.globalCompositeOperation = 'source-over';

      ctx.restore();
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [isSpeaking, isListening, isLoading, analyser]);

  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      <canvas
        ref={canvasRef}
        style={{ width: 260, height: 260 }}
        className="block"
      />
    </div>
  );
};

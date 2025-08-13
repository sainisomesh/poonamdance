import { useEffect, useRef } from "react";

const HeroNotesCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const pointerFine = window.matchMedia?.("(pointer: fine)").matches;
    if (prefersReduced || !pointerFine) {
      // Keep canvas but skip heavy work on mobile/coarse pointers or reduced-motion users
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const particles: Array<{
      x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number; rot: number; char: string; hueShift: number;
    }> = [];

    const styles = getComputedStyle(document.documentElement);
    const purpleVar = styles.getPropertyValue("--note-purple").trim() || "275 65% 88%";
    const blueVar = styles.getPropertyValue("--note-blue").trim() || "210 90% 70%";
    const purple = `hsl(${purpleVar})`;
    const blue = `hsl(${blueVar})`;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      const w = (rect?.width || window.innerWidth);
      const h = (rect?.height || 400);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let lastX = 0, lastY = 0;
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const dx = x - lastX;
      const dy = y - lastY;
      const speed = Math.min(12, Math.hypot(dx, dy));
      lastX = x; lastY = y;

      for (let i = 0; i < 2; i++) {
        particles.push({
          x, y,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          life: 0,
          maxLife: 120 + Math.random() * 60,
          size: 16 + speed * 0.8 + Math.random() * 4,
          rot: Math.random() * Math.PI,
          char: Math.random() < 0.5 ? "♪" : "♫",
          hueShift: Math.random(),
        });
      }
    };

    canvas.addEventListener("pointermove", onMove);

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += 1;
        if (p.life > p.maxLife) { particles.splice(i, 1); continue; }
        p.x += p.vx; p.y += p.vy;
        p.vy += 0.005; // gentle drift
        const t = p.life / p.maxLife;

        ctx.save();
        ctx.globalAlpha = 0.7 * (1 - t);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot + t * 0.6);
        ctx.font = `${p.size}px Poppins, system-ui, sans-serif`;
        // Soft gradient between purple and blue per particle
        const grad = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
        grad.addColorStop(0, purple);
        grad.addColorStop(1, blue);
        ctx.fillStyle = grad;
        ctx.shadowColor = blue;
        ctx.shadowBlur = 6;
        ctx.fillText(p.char, 0, 0);
        ctx.restore();
      }
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />
  );
};

export default HeroNotesCanvas;

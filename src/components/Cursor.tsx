"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Unique brand cursor — a slowly rotating GOLD diamond (echoing the star in the
 * Legacy crest) that lags behind a precise dot. Grows + fills purple over
 * interactive elements. Hidden on touch devices.
 */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    let mx = -100, my = -100, rx = -100, ry = -100, rot = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };

    const overInteractive = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const hot = !!t.closest("a, button, [data-cursor], input, textarea, select, .cursor-hot");
      ring.current?.classList.toggle("is-hot", hot);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", overInteractive);

    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      rot += 0.6;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) rotate(${rot}deg)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", overInteractive);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={ring} className="legacy-ring" aria-hidden />
      <div ref={dot} className="legacy-dot" aria-hidden />
      <style jsx global>{`
        .legacy-ring {
          position: fixed; left: 0; top: 0; z-index: 9999; pointer-events: none;
          width: 34px; height: 34px; border: 2px solid #f39223; background: transparent;
          transition: width .25s ease, height .25s ease, background .25s ease, border-color .25s ease, opacity .25s ease;
        }
        .legacy-dot {
          position: fixed; left: 0; top: 0; z-index: 10000; pointer-events: none;
          width: 6px; height: 6px; background: #f39223; border-radius: 50%;
        }
        .legacy-ring.is-hot {
          width: 56px; height: 56px;
          background: rgba(141, 71, 158, 0.85);
          border-color: #8d479e;
        }
      `}</style>
    </>
  );
}

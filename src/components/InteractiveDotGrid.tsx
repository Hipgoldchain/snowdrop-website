"use client";

import { useRef, useEffect, useCallback } from "react";

const GRID_SPACING = 22;
const DOT_RADIUS = 1.2;
const BASE_OPACITY = 0.38;
const VERDANT = { r: 63, g: 225, b: 116 }; // #3FE174

export default function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawStatic = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / GRID_SPACING) + 1;
      const rows = Math.ceil(height / GRID_SPACING) + 1;
      ctx.fillStyle = `rgba(${VERDANT.r},${VERDANT.g},${VERDANT.b},${BASE_OPACITY})`;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          ctx.beginPath();
          ctx.arc(c * GRID_SPACING, r * GRID_SPACING, DOT_RADIUS, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const section = canvas.closest("section");
    if (!section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = section.clientWidth;
      const h = section.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawStatic(ctx, w, h);
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 100);
    };

    resize();
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, [drawStatic]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

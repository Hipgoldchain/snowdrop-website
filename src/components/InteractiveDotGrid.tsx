"use client";

import { useRef, useEffect, useCallback } from "react";

const GRID_SPACING = 22;
const DOT_RADIUS = 1.2;
const BASE_OPACITY = 0.38;
const VERDANT = { r: 63, g: 225, b: 116 }; // #3FE174
const LINE_COLOR = { r: 242, g: 208, b: 107 }; // #F2D06B (yellow from dioramas)
const LINE_LENGTH = 4; // Number of grid cells the line extends

export default function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);
  const dashOffsetRef = useRef(0);
  const reducedMotionRef = useRef(false);

  const drawStatic = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
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

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mql.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mql.addEventListener("change", handleMotionChange);

    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = section.clientWidth;
      height = section.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawStatic(ctx, width, height);
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 100);
    };

    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mouseRef.current = null;
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", debouncedResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw static dots
      drawStatic(ctx, width, height);

      // Draw animated lines near cursor (if not reduced motion and mouse present)
      if (!reducedMotionRef.current && mouseRef.current) {
        const mouse = mouseRef.current;

        // Find nearest grid intersection
        const nearestCol = Math.round(mouse.x / GRID_SPACING);
        const nearestRow = Math.round(mouse.y / GRID_SPACING);
        const gridX = nearestCol * GRID_SPACING;
        const gridY = nearestRow * GRID_SPACING;

        // Animate dash offset for flowing effect
        dashOffsetRef.current = (dashOffsetRef.current + 0.5) % 13;

        ctx.strokeStyle = `rgba(${LINE_COLOR.r},${LINE_COLOR.g},${LINE_COLOR.b},0.45)`;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.setLineDash([6, 7]);
        ctx.lineDashOffset = dashOffsetRef.current;

        // Draw horizontal line (left and right from cursor)
        ctx.beginPath();
        ctx.moveTo(gridX - LINE_LENGTH * GRID_SPACING, gridY);
        ctx.lineTo(gridX + LINE_LENGTH * GRID_SPACING, gridY);
        ctx.stroke();

        // Draw vertical line (up and down from cursor)
        ctx.beginPath();
        ctx.moveTo(gridX, gridY - LINE_LENGTH * GRID_SPACING);
        ctx.lineTo(gridX, gridY + LINE_LENGTH * GRID_SPACING);
        ctx.stroke();

        // Reset line dash for future drawings
        ctx.setLineDash([]);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", debouncedResize);
      mql.removeEventListener("change", handleMotionChange);
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

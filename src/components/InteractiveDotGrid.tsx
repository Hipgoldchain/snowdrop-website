"use client";

import { useRef, useEffect, useCallback } from "react";

const GRID_SPACING = 22;
const DOT_RADIUS = 1.2;
const BASE_OPACITY = 0.38;
const VERDANT = { r: 63, g: 225, b: 116 }; // #3FE174
const GLOW_RADIUS = 120;
const LERP_SPEED = 0.08; // Smooth interpolation speed (lower = slower, more organic)

interface DotState {
  x: number;
  y: number;
  currentOpacity: number;
  currentRadius: number;
  targetOpacity: number;
  targetRadius: number;
}

export default function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);
  const reducedMotionRef = useRef(false);
  const dotsRef = useRef<DotState[]>([]);

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

      // Initialize dot states
      const cols = Math.ceil(width / GRID_SPACING) + 1;
      const rows = Math.ceil(height / GRID_SPACING) + 1;
      dotsRef.current = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dotsRef.current.push({
            x: c * GRID_SPACING,
            y: r * GRID_SPACING,
            currentOpacity: BASE_OPACITY,
            currentRadius: DOT_RADIUS,
            targetOpacity: BASE_OPACITY,
            targetRadius: DOT_RADIUS,
          });
        }
      }
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

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const dots = dotsRef.current;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Calculate target values based on cursor proximity
        if (!reducedMotionRef.current && mouse) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < GLOW_RADIUS) {
            const proximity = 1 - (dist / GLOW_RADIUS);
            const glowStrength = proximity * proximity;

            dot.targetOpacity = BASE_OPACITY + (0.5 * glowStrength);
            dot.targetRadius = DOT_RADIUS + (1.5 * glowStrength);
          } else {
            dot.targetOpacity = BASE_OPACITY;
            dot.targetRadius = DOT_RADIUS;
          }
        } else {
          dot.targetOpacity = BASE_OPACITY;
          dot.targetRadius = DOT_RADIUS;
        }

        // Smooth interpolation (creates delay and reverb effect)
        dot.currentOpacity += (dot.targetOpacity - dot.currentOpacity) * LERP_SPEED;
        dot.currentRadius += (dot.targetRadius - dot.currentRadius) * LERP_SPEED;

        ctx.fillStyle = `rgba(${VERDANT.r},${VERDANT.g},${VERDANT.b},${dot.currentOpacity})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", debouncedResize);
      mql.removeEventListener("change", handleMotionChange);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

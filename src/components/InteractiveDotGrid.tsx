"use client";

import { useRef, useEffect, useCallback } from "react";

const GRID_SPACING = 22;
const DOT_RADIUS = 1.2;
const MAX_DOT_RADIUS = 3;
const BASE_OPACITY = 0.38;
const VERDANT = { r: 63, g: 225, b: 116 }; // #3FE174

const MAGNET_RADIUS = 140;
const MAGNET_STRENGTH = 0.3;
const FILAMENT_DISTANCE = 44;
const LERP_SPEED = 0.12;

interface Dot {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
}

export default function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);
  const reducedMotionRef = useRef(false);

  const buildGrid = useCallback((width: number, height: number) => {
    const dots: Dot[] = [];
    const cols = Math.ceil(width / GRID_SPACING) + 1;
    const rows = Math.ceil(height / GRID_SPACING) + 1;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * GRID_SPACING;
        const y = r * GRID_SPACING;
        dots.push({ homeX: x, homeY: y, x, y });
      }
    }
    return dots;
  }, []);

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

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mql.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mql.addEventListener("change", handleMotionChange);

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = section.clientWidth;
      const h = section.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dotsRef.current = buildGrid(w, h);

      if (reducedMotionRef.current) {
        drawStatic(ctx, w, h);
      }
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 100);
    };

    resize();

    // Listen on the section so mouse events work even over the hero card
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
      if (reducedMotionRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);

      const dots = dotsRef.current;
      const mouse = mouseRef.current;

      // Update dot positions
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        let targetX = dot.homeX;
        let targetY = dot.homeY;

        if (mouse) {
          const dx = dot.homeX - mouse.x;
          const dy = dot.homeY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAGNET_RADIUS) {
            const force = (1 - dist / MAGNET_RADIUS) * MAGNET_STRENGTH;
            targetX = dot.homeX - dx * force;
            targetY = dot.homeY - dy * force;
          }
        }

        dot.x += (targetX - dot.x) * LERP_SPEED;
        dot.y += (targetY - dot.y) * LERP_SPEED;
      }

      // Draw filament lines between displaced dots that are close
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        const aDist = Math.abs(a.x - a.homeX) + Math.abs(a.y - a.homeY);
        if (aDist < 0.3) continue;

        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const bDist = Math.abs(b.x - b.homeX) + Math.abs(b.y - b.homeY);
          if (bDist < 0.3) continue;

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < FILAMENT_DISTANCE) {
            const alpha = (1 - dist / FILAMENT_DISTANCE) * 0.35;
            ctx.strokeStyle = `rgba(${VERDANT.r},${VERDANT.g},${VERDANT.b},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const displacement = Math.sqrt(
          (dot.x - dot.homeX) ** 2 + (dot.y - dot.homeY) ** 2
        );
        // Grow dot radius near the cursor
        const proximity = Math.min(displacement / (MAGNET_RADIUS * MAGNET_STRENGTH), 1);
        const radius = DOT_RADIUS + (MAX_DOT_RADIUS - DOT_RADIUS) * proximity;
        // Brighten near cursor
        const extraBrightness = proximity * 0.45;
        const opacity = BASE_OPACITY + extraBrightness;

        ctx.fillStyle = `rgba(${VERDANT.r},${VERDANT.g},${VERDANT.b},${opacity})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fill();
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
  }, [buildGrid, drawStatic]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

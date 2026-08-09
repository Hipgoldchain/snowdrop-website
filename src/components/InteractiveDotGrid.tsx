"use client";

import { useRef, useEffect, useCallback } from "react";

const GRID_SPACING = 22;
const DOT_RADIUS = 1.2;
const BASE_OPACITY = 0.38;
const VERDANT = { r: 63, g: 225, b: 116 }; // #3FE174
const VERDANT_DEEP = { r: 27, g: 117, b: 58 }; // #1b753a
const VERDANT_DARK = { r: 11, g: 79, b: 48 }; // #0b4f30

export default function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);
  const rotationRef = useRef(0);
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

  const drawCube = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, rotation: number) => {
    const size = 30;
    const angle = rotation;

    // Calculate isometric vertices
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    // Define cube vertices (centered at origin, then rotated)
    const vertices = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], // back face
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]      // front face
    ];

    // Rotate and project to 2D isometric
    const projected = vertices.map(([vx, vy, vz]) => {
      // Rotate around Y axis
      const rx = vx * cos - vz * sin;
      const rz = vx * sin + vz * cos;

      // Isometric projection
      const isoX = (rx - rz) * 0.866;
      const isoY = (rx + rz) * 0.5 - vy;

      return [x + isoX * size, y + isoY * size];
    });

    // Draw faces (back to front for proper layering)
    // Back face
    ctx.fillStyle = `rgba(${VERDANT_DARK.r},${VERDANT_DARK.g},${VERDANT_DARK.b},0.7)`;
    ctx.beginPath();
    ctx.moveTo(projected[0][0], projected[0][1]);
    ctx.lineTo(projected[1][0], projected[1][1]);
    ctx.lineTo(projected[2][0], projected[2][1]);
    ctx.lineTo(projected[3][0], projected[3][1]);
    ctx.closePath();
    ctx.fill();

    // Left face
    ctx.fillStyle = `rgba(${VERDANT_DEEP.r},${VERDANT_DEEP.g},${VERDANT_DEEP.b},0.8)`;
    ctx.beginPath();
    ctx.moveTo(projected[0][0], projected[0][1]);
    ctx.lineTo(projected[4][0], projected[4][1]);
    ctx.lineTo(projected[7][0], projected[7][1]);
    ctx.lineTo(projected[3][0], projected[3][1]);
    ctx.closePath();
    ctx.fill();

    // Top face
    ctx.fillStyle = `rgba(${VERDANT.r},${VERDANT.g},${VERDANT.b},0.85)`;
    ctx.beginPath();
    ctx.moveTo(projected[4][0], projected[4][1]);
    ctx.lineTo(projected[5][0], projected[5][1]);
    ctx.lineTo(projected[6][0], projected[6][1]);
    ctx.lineTo(projected[7][0], projected[7][1]);
    ctx.closePath();
    ctx.fill();
  }, []);

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

      // Draw spinning cube near cursor (if not reduced motion and mouse present)
      if (!reducedMotionRef.current && mouseRef.current) {
        const mouse = mouseRef.current;

        // Slowly rotate the cube
        rotationRef.current += 0.01;

        drawCube(ctx, mouse.x, mouse.y, rotationRef.current);
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
  }, [drawStatic, drawCube]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

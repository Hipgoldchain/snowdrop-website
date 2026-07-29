"use client";

import { useEffect, useRef } from "react";

const CALENDLY_URL = "https://calendly.com/snowdropgrowth/ai-discovery-call";

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget rounded-xl overflow-hidden"
      data-url={CALENDLY_URL}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

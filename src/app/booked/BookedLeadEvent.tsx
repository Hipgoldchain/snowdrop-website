"use client";

import { useEffect, useRef } from "react";

export default function BookedLeadEvent() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  }, []);

  return null;
}

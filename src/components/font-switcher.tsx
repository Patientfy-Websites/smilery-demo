"use client";

import { useState, useEffect } from "react";

export default function FontSwitcher() {
  const [version, setVersion] = useState<"suisse" | "bunken">("suisse");

  useEffect(() => {
    if (version === "bunken") {
      document.documentElement.setAttribute("data-font", "bunken");
    } else {
      document.documentElement.removeAttribute("data-font");
    }
  }, [version]);

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex items-center gap-0 bg-ink text-white text-[0.625rem] font-sans uppercase tracking-wide font-medium overflow-hidden shadow-lg">
      <button
        onClick={() => setVersion("suisse")}
        className={`px-4 py-3 transition-colors duration-200 ${
          version === "suisse" ? "bg-accent text-white" : "hover:bg-ink-soft"
        }`}
      >
        A — Suisse + Inter
      </button>
      <button
        onClick={() => setVersion("bunken")}
        className={`px-4 py-3 transition-colors duration-200 ${
          version === "bunken" ? "bg-accent text-white" : "hover:bg-ink-soft"
        }`}
      >
        B — Bunken + Inter
      </button>
    </div>
  );
}

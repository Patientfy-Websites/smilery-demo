"use client";

import { useRef, useState, useEffect, useCallback } from "react";

export default function CardSlider({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateNav = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateNav, { passive: true });
    updateNav();
    return () => el.removeEventListener("scroll", updateNav);
  }, [updateNav]);

  function scroll(dir: -1 | 1) {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement;
    if (card) {
      el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: "smooth" });
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") scroll(-1);
    if (e.key === "ArrowRight") scroll(1);
  }

  return (
    <div className="flex flex-col gap-10">
      <div
        ref={scrollRef}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none"
      >
        {children}
      </div>

      {/* Controls */}
      <div className="flex justify-end gap-2">
        <button
          onClick={() => scroll(-1)}
          disabled={!canPrev}
          aria-label="Previous"
          className="w-10 h-10 border border-ink/10 bg-transparent text-ink flex items-center justify-center transition-colors duration-200 hover:border-ink cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ←
        </button>
        <button
          onClick={() => scroll(1)}
          disabled={!canNext}
          aria-label="Next"
          className="w-10 h-10 bg-ink text-cream flex items-center justify-center transition-colors duration-200 hover:bg-accent cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        >
          →
        </button>
      </div>
    </div>
  );
}

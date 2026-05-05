"use client";

import { useRef, useState, useEffect, useCallback } from "react";

type Review = {
  quote: string;
  name: string;
  location: string;
};

export default function ReviewCarousel({
  reviews,
  dark = false,
}: {
  reviews: Review[];
  dark?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const updateNav = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  // Intersection observer for active dot
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const cards = el.querySelectorAll("[data-review]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.review);
            setActive(idx);
          }
        }
      },
      { root: el, threshold: 0.6 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [reviews.length]);

  // Scroll event for nav buttons
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateNav, { passive: true });
    updateNav();
    return () => el.removeEventListener("scroll", updateNav);
  }, [updateNav]);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const card = el.querySelector("[data-review]") as HTMLElement;
        if (card) {
          el.scrollBy({ left: card.offsetWidth + 20, behavior: "smooth" });
        }
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  function scroll(dir: -1 | 1) {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-review]") as HTMLElement;
    if (card) {
      el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: "smooth" });
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") scroll(-1);
    if (e.key === "ArrowRight") scroll(1);
  }

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Cards */}
      <div
        ref={scrollRef}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Patient reviews"
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none pr-[1px]"
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            data-review={i}
            className={`w-[31%] min-w-[31%] min-h-[16em] snap-start flex flex-col gap-3 border p-6 shrink-0 ${
              dark
                ? "border-white/10 bg-white/5"
                : "border-[#D6D6D2] bg-white"
            }`}
          >
            <span
              className={`font-display text-4xl leading-none ${
                dark ? "text-white/10" : "text-ink/10"
              }`}
            >
              &ldquo;
            </span>

            <p
              className={`font-sans text-[1em] leading-relaxed ${
                dark ? "text-white/80" : "text-ink"
              }`}
            >
              &ldquo;{review.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <div
                className={`w-8 h-8 shrink-0 ${
                  dark ? "bg-white/10" : "bg-ink/10"
                }`}
                style={{ borderRadius: "50%" }}
              />
              <div className="flex flex-col">
                <span
                  className={`font-sans text-xs font-medium ${
                    dark ? "text-white" : "text-ink"
                  }`}
                >
                  {review.name}
                </span>
                <span
                  className={`font-sans text-xs ${
                    dark ? "text-white/40" : "text-ink-muted"
                  }`}
                >
                  {review.location}
                </span>
              </div>
              <span className="text-accent tracking-widest text-xs ml-auto">
                ★★★★★
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center pt-6">
        {/* Progress dots */}
        <div className="flex items-center gap-1">
          {reviews.map((_, i) => (
            <div
              key={i}
              className={`h-0.5 transition-all duration-300 ease-in-out ${
                i === active
                  ? dark
                    ? "w-6 bg-white"
                    : "w-6 bg-ink"
                  : dark
                    ? "w-2 bg-white/20"
                    : "w-2 bg-[#D6D6D2]"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            disabled={!canPrev}
            aria-label="Previous review"
            className={`w-10 h-10 border bg-transparent flex items-center justify-center transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed ${
              dark
                ? "border-white/20 text-white hover:border-white/50"
                : "border-[#D6D6D2] text-ink hover:border-ink"
            }`}
          >
            ←
          </button>
          <button
            onClick={() => scroll(1)}
            disabled={!canNext}
            aria-label="Next review"
            className={`w-10 h-10 flex items-center justify-center transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed ${
              dark
                ? "bg-white text-ink hover:bg-accent"
                : "bg-ink text-cream hover:bg-accent"
            }`}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

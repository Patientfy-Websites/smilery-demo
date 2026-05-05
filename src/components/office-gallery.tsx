"use client";

import { useState, useEffect, useCallback } from "react";

type Tile = {
  alt: string;
  className?: string;
};

const tiles: Tile[] = [
  { alt: "Welcome desk detail at Smilery" },
  { alt: "Reception and waiting area at Smilery", className: "lg:row-span-2" },
  { alt: "3D dental scanner at Smilery" },
  { alt: "Sterilization station at Smilery" },
  { alt: "Awards and certificates at Smilery" },
  { alt: "X-ray equipment at Smilery" },
  { alt: "Waiting area lounge at Smilery" },
];

export default function OfficeGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox((i) => (i !== null ? (i - 1 + tiles.length) % tiles.length : null));
  }, []);

  const next = useCallback(() => {
    setLightbox((i) => (i !== null ? (i + 1) % tiles.length : null));
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <>
      {/* Mosaic grid */}
      <div className="grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr_1fr] lg:grid-rows-2 gap-3 lg:aspect-[16/7]">
        {tiles.map((tile, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className={`group relative overflow-hidden w-full h-full ${
              tile.className ?? ""
            } ${i >= 4 ? "hidden sm:block" : ""}`}
          >
            <div
              className="w-full h-full bg-[#EDE6D8] transition-transform duration-600 group-hover:scale-[1.04]"
              role="img"
              aria-label={tile.alt}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl transition-colors"
            aria-label="Close lightbox"
          >
            ✕
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-6 w-10 h-10 border border-white/20 text-white flex items-center justify-center hover:border-white/50 transition-colors"
            aria-label="Previous image"
          >
            ←
          </button>

          <div
            className="max-w-[80vw] max-h-[80vh] aspect-[4/3] bg-[#EDE6D8]"
            onClick={(e) => e.stopPropagation()}
            role="img"
            aria-label={tiles[lightbox].alt}
          />

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-6 w-10 h-10 bg-white text-ink flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}

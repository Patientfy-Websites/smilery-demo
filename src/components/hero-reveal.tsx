"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeroReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        filter: "blur(20px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.8,
        delay: 0.3 + delay,
        ease: "power3.out",
      }
    );
  }, [delay]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

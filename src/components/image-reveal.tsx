"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal({
  children,
  className = "",
  delay = 0,
  onMount = false,
  direction = "bottom",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onMount?: boolean;
  direction?: "top" | "bottom" | "left" | "right";
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const clipStart = {
      top: "inset(100% 0% 0% 0%)",
      bottom: "inset(0% 0% 100% 0%)",
      left: "inset(0% 100% 0% 0%)",
      right: "inset(0% 0% 0% 100%)",
    };

    gsap.set(el, {
      clipPath: clipStart[direction],
    });

    const animate = () => {
      gsap.to(el, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.4,
        delay: onMount ? 0.3 + delay : delay,
        ease: "power4.inOut",
      });
    };

    if (onMount) {
      animate();
    } else {
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 92%",
        once: true,
        onEnter: animate,
      });
      return () => trigger.kill();
    }
  }, [delay, onMount, direction]);

  return (
    <div ref={wrapperRef} className={className} style={{ clipPath: "inset(0% 0% 100% 0%)" }}>
      {children}
    </div>
  );
}

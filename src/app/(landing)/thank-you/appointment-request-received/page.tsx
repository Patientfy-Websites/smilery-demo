import { Lock } from "lucide-react";
import HeroReveal from "@/components/hero-reveal";
import Logo from "@/components/logo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're on the List — Waitlist Confirmed",
  description:
    "Thanks for joining the Smilery waitlist! You'll receive exclusive updates about our Summer 2026 opening in Miami Shores, FL. Orthodontics, reimagined.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AppointmentRequestReceivedPage() {
  return (
    <section className="bg-cream flex-1 flex">
      <div className="px-6 w-full">
        <div className="mx-auto max-w-[28em] min-h-screen flex flex-col items-center text-center py-16">
          {/* Logo */}
          <HeroReveal>
            <Logo className="h-12 sm:h-14 w-auto text-ink" />
          </HeroReveal>

          {/* Content block — checkmark + heading + dash + paragraph, evenly spaced */}
          <div className="flex flex-col items-center gap-8 mt-[25vh]">
            <HeroReveal delay={0.1} className="">
                <CheckCircle />
            </HeroReveal>

            <HeroReveal delay={0.2}>
              <h1 className="font-display font-bold text-[1.8125em] md:text-4xl uppercase text-ink leading-[1.35] tracking-[0.175em] text-center whitespace-nowrap">
                You&apos;re on the List
              </h1>
            </HeroReveal>

            <HeroReveal delay={0.3}>
              <div className="w-10 h-0.5 bg-accent" />
            </HeroReveal>

            <HeroReveal delay={0.4}>
              <p className="font-sans text-sm leading-relaxed text-ink-muted whitespace-nowrap tracking-wide font-medium">
                You&apos;ll receive opening updates from Smilery.
              </p>
            </HeroReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────── Animated check mark ──────────── */

function CheckCircle() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Confirmed"
      className="text-accent"
    >
      <circle
        cx="32"
        cy="32"
        r="29"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M20 33.5L28.5 42L45 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

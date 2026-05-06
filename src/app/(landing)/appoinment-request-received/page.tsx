import { Lock } from "lucide-react";
import HeroReveal from "@/components/hero-reveal";
import Logo from "@/components/logo";

export const metadata = {
  title: "You're on the list · Smilery",
  description:
    "Thanks for joining the Smilery waitlist. We'll let you know as soon as we open.",
};

export default function AppointmentRequestReceivedPage() {
  return (
    <section className="bg-cream flex-1 flex">
      <div className="px-6 w-full">
        <div className="mx-auto max-w-[28em] min-h-screen flex flex-col items-center text-center py-16">
          {/* Logo */}
          <HeroReveal>
            <Logo className="h-7 sm:h-8 w-auto text-ink" />
          </HeroReveal>

          {/* Centered message */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full">
            <HeroReveal delay={0.1}>
              <CheckCircle />
            </HeroReveal>

            <div className="flex flex-col items-center gap-6">
              <HeroReveal delay={0.2}>
                <h1 className="font-display font-bold text-3xl md:text-4xl uppercase text-ink leading-[1.05]">
                  You&apos;re
                  <br />
                  on the List
                </h1>
              </HeroReveal>

              <HeroReveal delay={0.3}>
                <div className="w-10 h-0.5 bg-accent" />
              </HeroReveal>

              <HeroReveal delay={0.4}>
                <p className="font-sans text-sm leading-relaxed text-ink-muted max-w-[20em]">
                  We&apos;ll let you know as soon as we open.
                </p>
              </HeroReveal>
            </div>
          </div>

          {/* Footer mark */}
          <HeroReveal delay={0.5}>
            <div className="inline-flex items-center gap-2 font-sans text-xs text-ink-muted">
              <Lock className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>smilery.com</span>
            </div>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
}

/* ──────────── Animated check mark ──────────── */

function CheckCircle() {
  return (
    <svg
      width="64"
      height="64"
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

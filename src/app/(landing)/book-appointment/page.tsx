import Link from "next/link";
import Script from "next/script";
import { ArrowLeft } from "lucide-react";
import HeroReveal from "@/components/hero-reveal";
import Logo from "@/components/logo";

export const metadata = {
  title: "Request Your Appointment · Smilery",
  description:
    "Request an appointment with Smilery — orthodontics, reimagined.",
};

export default function WaitlistPage() {
  return (
    <section className="bg-cream flex-1 flex">
      <div className="px-6 w-full">
        <div className="mx-auto max-w-[44em] min-h-screen flex flex-col items-center text-center gap-10 py-16">
          {/* Logo */}
          <HeroReveal>
            <Link href="/coming-soon" aria-label="Smilery — back to home">
              <Logo className="h-7 sm:h-8 w-auto text-ink" />
            </Link>
          </HeroReveal>

          {/* Heading */}
          <div className="flex w-full flex-col items-center gap-6 pt-4">
            <HeroReveal delay={0.1}>
              <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink">
                Opening Summer 2026
              </p>
            </HeroReveal>

            <HeroReveal delay={0.15}>
              <h1 className="font-display font-bold text-3xl md:text-4xl uppercase text-ink leading-[1.05]">
                Be First
                To Know
              </h1>
            </HeroReveal>

            <HeroReveal delay={0.2}>
              <div className="w-10 h-0.5 bg-accent" />
            </HeroReveal>

            <HeroReveal delay={0.25}>
              <p className="font-sans text-sm leading-relaxed text-ink-muted max-w-[22em]">
                Join the waitlist to be notified when we open.
              </p>
            </HeroReveal>
          </div>

          {/* Embedded form */}
          <HeroReveal delay={0.35} className="w-full pt-4">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/kAGOQ8rmI04g3T1Ymb94"
              id="inline-kAGOQ8rmI04g3T1Ymb94"
              title="Request Your Appointment"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Request Your Appointment"
              data-height="932"
              data-layout-iframe-id="inline-kAGOQ8rmI04g3T1Ymb94"
              data-form-id="kAGOQ8rmI04g3T1Ymb94"
              style={{
                width: "100%",
                height: "932px",
                border: "none",
                borderRadius: "3px",
              }}
            />
          </HeroReveal>

          {/* Back */}
          <HeroReveal delay={0.45}>
            <Link
              href="/coming-soon"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase font-medium text-ink hover:text-accent transition-colors duration-200 mt-4"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              Back
            </Link>
          </HeroReveal>
        </div>
      </div>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </section>
  );
}

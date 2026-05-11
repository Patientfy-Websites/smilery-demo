import Link from "next/link";
import Script from "next/script";
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
        <div className="mx-auto max-w-176 min-h-screen flex flex-col items-center text-center gap-10 py-16">
          {/* Logo */}
          <HeroReveal>
            <Link href="/coming-soon" aria-label="Smilery — back to home">
              <Logo className="h-12 sm:h-14 w-auto text-ink" />
            </Link>
          </HeroReveal>

          {/* Heading */}
          <div className="flex w-full flex-col items-center gap-6 pt-4">
            <HeroReveal delay={0.1}>
              <h1 className="font-display font-bold text-2xl md:text-3xl uppercase text-ink leading-[1.05] whitespace-nowrap">
                Be First To Know
              </h1>
            </HeroReveal>

            <HeroReveal delay={0.15}>
              <div className="w-10 h-0.5 bg-accent" />
            </HeroReveal>

            <HeroReveal delay={0.2}>
              <div className="flex flex-col gap-1 font-sans text-sm leading-relaxed text-ink-muted max-w-[22em]">
                <p>A new space for orthodontics.</p>
                <p>Join the waitlist for opening updates.</p>
              </div>
            </HeroReveal>
          </div>

          {/* Embedded form */}
          <HeroReveal delay={0.35} className="w-full max-w-104 md:max-w-none mx-auto pt-4">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/wtDcnjWeVJaOvHTUpbPE"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "0px" }}
              id="inline-wtDcnjWeVJaOvHTUpbPE"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Request Your Appointment - Copy"
              data-height="731"
              data-layout-iframe-id="inline-wtDcnjWeVJaOvHTUpbPE"
              data-form-id="wtDcnjWeVJaOvHTUpbPE"
              title="Request Your Appointment - Copy"
            />
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

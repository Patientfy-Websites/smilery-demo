import Link from "next/link";
import HeroReveal from "@/components/hero-reveal";
import Logo from "@/components/logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orthodontics, Reimagined — Opening Summer 2026 in Miami Shores",
  description:
    "Smilery is a modern orthodontics practice opening Summer 2026 in Miami Shores, FL. Braces, Invisalign, clear aligners — join the waitlist for a reimagined orthodontic experience.",
  alternates: {
    canonical: "https://smilery.com",
  },
  openGraph: {
    title: "Smilery — Orthodontics, Reimagined | Opening Summer 2026",
    description:
      "A modern orthodontics practice opening Summer 2026 in Miami Shores, FL. Braces, Invisalign, and clear aligners. Join the waitlist for opening updates and exclusive offers.",
    url: "https://smilery.com",
    type: "website",
  },
  twitter: {
    title: "Smilery — Orthodontics, Reimagined | Opening Summer 2026",
    description:
      "Modern orthodontics opening Summer 2026 in Miami Shores, FL. Braces, Invisalign & clear aligners. Join the waitlist.",
  },
  keywords: [
    "Smilery",
    "orthodontist Miami Shores",
    "orthodontics reimagined",
    "new orthodontist Miami Shores 2026",
    "braces Miami Shores",
    "Invisalign Miami Shores",
    "orthodontist opening Miami",
    "waitlist orthodontist Miami",
  ],
};

export default function ComingSoonPage() {
  return (
    <section className="bg-cream flex-1 flex">
      <div className="px-6 w-full">
        <div className="mx-auto max-w-136 min-h-screen flex flex-col items-center justify-center text-center gap-32 py-16">
          <HeroReveal>
            <Logo className="h-12 sm:h-14 w-auto text-ink" />
          </HeroReveal>

          <div className="flex flex-col items-center gap-12">
            <HeroReveal delay={0.1}>
              <h1 className="font-display font-bold text-[1.8125em] md:text-4xl uppercase text-ink leading-[1.35] tracking-[0.3em] text-center">
                Orthodontics,
                <br />
                Reimagined.
              </h1>
            </HeroReveal>

            <HeroReveal delay={0.2}>
              <div className="w-12 h-0.5 bg-accent" />
            </HeroReveal>

            <HeroReveal delay={0.3}>
              <div className="flex flex-col gap-1 font-sans text-xs tracking-widest uppercase font-medium text-ink">
                <p className="tracking-[0.3em]">Opening Summer 2026</p>
                <p className="tracking-[0.3em]">Miami Shores, FL</p>
              </div>
            </HeroReveal>
          </div>

          <HeroReveal delay={0.4}>
            <Link
              href="/book-appointment"
              className="font-sans text-xs tracking-[0.3em] uppercase font-medium text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors duration-200"
            >
              Join the Waitlist
            </Link>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
}

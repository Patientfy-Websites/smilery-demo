import Link from "next/link";
import HeroReveal from "@/components/hero-reveal";
import Logo from "@/components/logo";

export const metadata = {
  title: "Smilery · Opening Summer 2026",
  description: "Orthodontics, reimagined · Miami Shores, FL",
};

export default function ComingSoonPage() {
  return (
    <section className="bg-cream flex-1 flex">
      <div className="px-6 w-full">
        <div className="mx-auto max-w-[34em] min-h-screen flex flex-col items-center justify-center text-center gap-32 py-16">
          <HeroReveal>
            <Logo className="h-12 sm:h-14 w-auto text-ink" />
          </HeroReveal>

          <div className="flex flex-col items-center gap-12">
            <HeroReveal delay={0.1}>
              <h1 className="font-display font-bold text-3xl md:text-4xl uppercase text-ink leading-[1.05] tracking-[0.15em] max-w-[12em]">
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
                <p>Opening Summer 2026</p>
                <p>Miami Shores, FL</p>
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

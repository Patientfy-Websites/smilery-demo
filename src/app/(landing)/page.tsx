import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroReveal from "@/components/hero-reveal";
import ImageReveal from "@/components/image-reveal";
import Reveal from "@/components/reveal";
import { Metadata } from "next";

const VALUE_PROPS = [
  {
    number: "01",
    title: ["Care that's custom", "for you."],
    description:
      "Every smile is unique. Your treatment plan should be too. We combine expertise with advanced technology to create a plan that fits you—your goals, your lifestyle, your timeline.",
    cta: { label: "Our Services", href: "#" },
  },
  {
    number: "02",
    title: ["Designing confidence,", "through every detail."],
    description:
      "From your first visit to your final smile, we're here to make the experience seamless, comfortable, and straightforward.",
    cta: { label: "How it works", href: "#" },
  },
  {
    number: "03",
    title: ["Built for real life.", "Made to last."],
    description:
      "Modern solutions that are subtle, durable, and designed to move with you.",
    cta: { label: "Why Smilery", href: "#" },
  },
];

export const metadata: Metadata = {
  title: "Smilery Orthodontics | Miami Shores, FL Orthodontist",
  description:
    "Modern orthodontic care in Miami Shores, FL. Smilery offers expert treatment for kids, teens, and adults in a warm, welcoming, design-forward practice.",
  alternates: {
    canonical: "https://smilery.com",
  },
  openGraph: {
    title: "Smilery Orthodontics | Miami Shores, FL Orthodontist",
    description:
      "Modern orthodontic care in Miami Shores, FL. Smilery offers expert treatment for kids, teens, and adults in a warm, welcoming, design-forward practice.",
    url: "https://smilery.com",
    type: "website",
  },
  twitter: {
    title: "Smilery Orthodontics | Miami Shores, FL Orthodontist",
    description:
      "Modern orthodontic care in Miami Shores, FL. Smilery offers expert treatment for kids, teens, and adults in a warm, welcoming, design-forward practice.",
  },
  keywords: [
    "Smilery",
    "orthodontist Miami Shores",
    "orthodontics reimagined",
    "braces Miami Shores",
    "Invisalign Miami Shores",
    "modern orthodontist Miami",
  ],
};

export default function HomePage() {
  return (
    <>
    <section className="bg-cream flex-1 flex">
      <div className="px-8 md:px-6 w-full">
        <div className="max-w-[96em] mx-auto w-full">
          <div className="pt-16 pb-6 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex flex-col gap-10 md:gap-12">
              <HeroReveal>
                <h1 className="font-display font-bold text-[2.25em] md:text-4xl uppercase text-ink leading-[1.15] tracking-[0.2em]">
                  Orthodontics,
                  <br />
                  Reimagined<span className="text-accent">.</span>
                </h1>
              </HeroReveal>

              <HeroReveal delay={0.1}>
                <div className="w-12 h-0.5 bg-accent" />
              </HeroReveal>

              <HeroReveal delay={0.2}>
                <p className="font-sans text-sm md:text-base text-ink-soft leading-relaxed max-w-[28em]">
                  Thoughtful care. Advanced technology.
                  <br className="hidden sm:block" />
                  A better experience from start to finish.
                </p>
              </HeroReveal>

              <HeroReveal delay={0.3}>
                <Link
                  href="/book-appointment"
                  className="group inline-flex items-center gap-4 self-start font-sans text-xs tracking-[0.3em] uppercase font-medium text-ink hover:text-accent transition-colors duration-200"
                >
                  <span className="border-b border-ink group-hover:border-accent pb-1 transition-colors duration-200">
                    Book your consultation
                  </span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </Link>
              </HeroReveal>
            </div>

            <ImageReveal
              onMount
              delay={0.2}
              className="relative aspect-square w-full overflow-hidden rounded-[1.5em]"
            >
              <Image
                src="/images/office/reception-front.avif"
                alt="Smilery's modern reception area with warm lighting and curved architecture"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cream">
      <div className="px-8 md:px-6">
        <div className="max-w-[96em] mx-auto">
          <div className="py-10 md:py-16 grid grid-cols-1 md:grid-cols-3">
            {VALUE_PROPS.map((item, i) => (
              <Reveal
                key={item.number}
                delay={i * 0.1}
                className={`flex flex-col gap-8 py-12 md:py-0 md:px-10 ${
                  i > 0
                    ? "border-t border-ink/15 md:border-t-0 md:border-l"
                    : ""
                } ${i === 0 ? "md:pl-0" : ""} ${
                  i === VALUE_PROPS.length - 1 ? "md:pr-0" : ""
                }`}
              >
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs tracking-[0.3em] uppercase font-medium text-accent">
                    {item.number}
                  </span>
                  <div className="w-8 h-px bg-accent" />
                </div>

                <h2 className="font-display font-bold text-[1.125em] md:text-[1.25em] uppercase text-ink leading-[1.4] tracking-[0.2em]">
                  {item.title.map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </h2>

                <p className="font-sans text-sm text-ink-soft leading-relaxed">
                  {item.description}
                </p>

                <Link
                  href={item.cta.href}
                  className="group inline-flex items-center gap-4 self-start font-sans text-xs tracking-[0.3em] uppercase font-medium text-ink hover:text-accent transition-colors duration-200"
                >
                  <span className="border-b border-ink group-hover:border-accent pb-1 transition-colors duration-200">
                    {item.cta.label}
                  </span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

import Link from "next/link";
import { Heart, Sparkles, ShieldCheck, Sun, Stethoscope, Users, Star, CalendarCheck } from "lucide-react";
import Button from "@/components/button";
import Container from "@/components/container";
import Eyebrow from "@/components/eyebrow";
import CardSlider from "@/components/card-slider";
import Marquee from "@/components/marquee";
import ReviewCarousel from "@/components/review-carousel";

export default function Home() {
  return (
    <>
    {/* ── Section 01 · Hero ── */}
    <section className="bg-cream">
      <div className="px-6">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
            {/* Left — Text */}
            <div className="flex flex-col justify-center gap-16">
              <div className="flex flex-col gap-6">
                <Eyebrow icon={Sun}>Orthodontics · Reimagined · 2026</Eyebrow>

                <h1 className="font-display font-bold text-4xl md:text-5xl uppercase text-ink">
                  Lorem Ipsum
                  <br />
                  Dolor Sit
                  <br />
                  Amet
                </h1>

                <div className="w-12 h-0.5 bg-accent" />

                <p className="font-sans text-sm text-ink max-w-[24em]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <Button href="/book" theme="primary" size="md">
                  Book Now
                </Button>
                <Button href="/services" theme="link" size="md">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right — Image placeholder */}
            <div className="aspect-square bg-ink/5 border border-ink/10" />
          </div>
        </Container>
      </div>
    </section>
    <div className="bg-cream px-6"><Container><div className="h-px bg-ink/5" /></Container></div>
    {/* ── Section 02 · Why Choose Us ── */}
    <section className="bg-cream">
      <div className="px-6">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 py-16">
            {/* Left — Image placeholder */}
            <div className="aspect-square bg-ink/5 border border-ink/10" />

            {/* Right — Text */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <Eyebrow icon={Heart}>Why Choose Us</Eyebrow>

                <h2 className="font-display font-bold text-2xl md:text-4xl uppercase text-ink">
                  Lorem Ipsum
                  <br />
                  Dolor Sit.
                </h2>

                <div className="w-12 h-0.5 bg-accent" />

                <p className="font-sans text-sm text-ink max-w-[28em]">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore.
                </p>
              </div>

              {/* Feature list */}
              <div className="flex flex-col">
                {[
                  {
                    icon: Heart,
                    title: "Lorem Ipsum",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  },
                  {
                    icon: Sparkles,
                    title: "Dolor Sit Amet",
                    desc: "Sed do eiusmod tempor incididunt ut labore et dolore.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Consectetur",
                    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-3 py-6 border-t border-ink/5"
                  >
                    <item.icon className="w-6 h-6 text-accent" strokeWidth={1.25} />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-display font-bold text-sm uppercase text-ink">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-ink-muted">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Button href="/book" theme="primary" size="md">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
    <div className="bg-cream px-6"><Container><div className="h-px bg-ink/5" /></Container></div>
    {/* ── Section 03 · Our Services ── */}
    <section className="bg-cream">
      <div className="px-6">
        <Container>
          <div className="py-16 flex flex-col gap-12">
            {/* Intro */}
            <div className="flex flex-col gap-6">
              <Eyebrow tone="soft" icon={Stethoscope}>Our Services</Eyebrow>

              <h2 className="font-display font-bold text-2xl md:text-4xl uppercase text-ink max-w-[14em]">
                Lorem Ipsum Dolor Sit Amet.
              </h2>

              <div className="w-12 h-0.5 bg-accent" />

              <p className="font-sans text-sm leading-relaxed text-ink-muted max-w-[30em]">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>

              <div className="flex items-center gap-6">
                <Button href="/book" theme="primary" size="md">
                  Book Now
                </Button>
                <Button href="/services" theme="link" size="md">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Cards slider */}
            <CardSlider>
              {[
                {
                  num: "01",
                  title: "Lorem Ipsum",
                  desc: "Lorem ipsum dolor sit amet consectetur.",
                  slug: "lorem-ipsum",
                },
                {
                  num: "02",
                  title: "Dolor Sit",
                  desc: "Adipiscing elit, sed do eiusmod tempor.",
                  slug: "dolor-sit",
                },
                {
                  num: "03",
                  title: "Amet Consectetur",
                  desc: "Ut labore et dolore magna aliqua enim.",
                  slug: "amet-consectetur",
                },
                {
                  num: "04",
                  title: "Adipiscing",
                  desc: "Quis nostrud exercitation ullamco laboris.",
                  slug: "adipiscing",
                },
              ].map((card) => (
                <Link
                  key={card.slug}
                  data-card
                  href={`/services/${card.slug}`}
                  className="group flex flex-col gap-4 min-w-[calc((100%-3*1.25rem)/4)] shrink-0 snap-start"
                >
                  <div className="aspect-[4/5] w-full bg-ink/5 overflow-hidden">
                    <div className="w-full h-full bg-ink/5 transition-[filter] duration-300 group-hover:brightness-105" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <Eyebrow as="span" tone="muted">{card.num}</Eyebrow>
                    <h3 className="font-display font-bold text-base uppercase text-ink">
                      {card.title}
                    </h3>
                    <p className="font-sans text-xs text-ink-muted">
                      {card.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </CardSlider>
          </div>
        </Container>
      </div>
    </section>
    <Marquee items={["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"]} />
    {/* ── Section 05 · Our Team ── */}
    <section className="bg-cream">
      <div className="px-6">
        <Container>
          <div className="pt-14 pb-14 flex flex-col gap-12">
            {/* Intro */}
            <div className="flex flex-col gap-6">
              <Eyebrow tone="soft" icon={Users}>Our Team</Eyebrow>

              <h2 className="font-display font-bold text-2xl md:text-4xl uppercase text-ink max-w-[14em]">
                Lorem Ipsum Dolor Sit.
              </h2>

              <div className="w-12 h-0.5 bg-accent" />

              <p className="font-sans text-sm leading-relaxed text-ink-muted max-w-[30em]">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                Lorem ipsum dolor sit amet.
              </p>

              <div className="flex items-center gap-6">
                <Button href="/book" theme="primary" size="md">
                  Book Now
                </Button>
                <Button href="/team" theme="link" size="md">
                  Meet the Team
                </Button>
              </div>
            </div>

            {/* Team slider */}
            <CardSlider>
              {[
                {
                  num: "01",
                  name: "A. Lorem",
                  role: "Lorem Ipsum",
                  slug: "a-lorem",
                },
                {
                  num: "02",
                  name: "B. Ipsum",
                  role: "Dolor Sit",
                  slug: "b-ipsum",
                },
                {
                  num: "03",
                  name: "C. Dolor",
                  role: "Amet Consectetur",
                  slug: "c-dolor",
                },
                {
                  num: "04",
                  name: "D. Sit",
                  role: "Adipiscing Elit",
                  slug: "d-sit",
                },
              ].map((member) => (
                <Link
                  key={member.slug}
                  data-card
                  href={`/team/${member.slug}`}
                  className="group flex flex-col gap-4 min-w-[calc((100%-3*1.25rem)/4)] shrink-0 snap-start"
                >
                  <div className="aspect-[4/5] w-full bg-ink/5 overflow-hidden">
                    <div
                      className="w-full h-full bg-ink/5 transition-[filter] duration-300 group-hover:brightness-105"
                      role="img"
                      aria-label={`Portrait of ${member.name}`}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Eyebrow as="span" tone="muted">{member.num}</Eyebrow>
                    <h3 className="font-display font-bold text-base uppercase text-ink">
                      {member.name}
                    </h3>
                    <p className="font-sans text-xs text-ink-muted">
                      {member.role}
                    </p>
                  </div>
                </Link>
              ))}
            </CardSlider>
          </div>
        </Container>
      </div>
    </section>
    <div className="bg-cream px-6"><Container><div className="h-px bg-ink/5" /></Container></div>
    {/* ── Section 06 · Reviews ── */}
    <section className="bg-ink text-white overflow-hidden">
      <div className="px-6">
        <Container>
          <div className="pt-14 pb-8 flex flex-col gap-12">
            {/* Intro */}
            <div className="flex flex-col gap-6">
              <Eyebrow tone="light" icon={Star}>Reviews</Eyebrow>

              <h2 className="font-display font-bold text-2xl md:text-4xl uppercase text-white max-w-[14em]">
                Lorem Ipsum Dolor.
              </h2>

              <div className="w-12 h-0.5 bg-accent" />

              <p className="font-sans text-sm leading-relaxed text-white/60 max-w-[30em]">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                Lorem ipsum dolor sit amet.
              </p>

              <div className="flex items-center gap-6">
                <Button href="/book" theme="white" size="md">
                  Book Now
                </Button>
                <Button href="/reviews" theme="outline-light" size="md">
                  Read All
                </Button>
              </div>
            </div>

            {/* Carousel */}
            <ReviewCarousel
              dark
              reviews={[
                {
                  quote:
                    "Lorem ipsum dolor sit amet — consectetur adipiscing elit.",
                  name: "A. Lorem",
                  location: "Ipsum",
                },
                {
                  quote:
                    "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
                  name: "B. Dolor",
                  location: "Sit",
                },
                {
                  quote: "Ut enim ad minim veniam, quis nostrud exercitation.",
                  name: "C. Amet",
                  location: "Consectetur",
                },
                {
                  quote:
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
                  name: "D. Elit",
                  location: "Adipiscing",
                },
                {
                  quote:
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
                  name: "E. Tempor",
                  location: "Eiusmod",
                },
              ]}
            />
          </div>
        </Container>
      </div>
    </section>
    {/* ── Section 07 · Book Now (CTA Dark) ── */}
    <section className="bg-ink">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto py-12 sm:py-16 lg:py-20">
          <Eyebrow tone="light" icon={CalendarCheck}>Book Now</Eyebrow>

          <h2 className="font-display font-bold text-2xl md:text-4xl leading-none uppercase text-cream">
            Lorem Ipsum
            <br />
            Dolor Sit Amet.
          </h2>

          <div className="w-12 h-0.5 bg-accent" />

          <p className="font-sans text-sm leading-relaxed text-white/70 max-w-[30em]">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 pt-2">
            <Button href="/book" theme="white" size="md">
              Book Now
            </Button>
            <a
              href="tel:+13055550100"
              className="font-sans text-xs tracking-widest uppercase font-medium text-white/50 border-b border-white/25 pb-0.5 hover:text-cream hover:border-cream transition-colors duration-200"
            >
              (305) 555-0100
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

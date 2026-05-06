import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";
import Container from "@/components/container";
import Eyebrow from "@/components/eyebrow";
import CardSlider from "@/components/card-slider";
import Marquee from "@/components/marquee";
import ReviewCarousel from "@/components/review-carousel";
import HeroReveal from "@/components/hero-reveal";
import ImageReveal from "@/components/image-reveal";
import Reveal from "@/components/reveal";
import OfficeGallery from "@/components/office-gallery";
import { Heart, Sparkles, Shield, BookOpen, Users, Star, CalendarCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-cream">
        <div className="px-6">
          <Container>
            <div className="flex flex-col items-center text-center gap-8 pt-20 pb-12">
              <HeroReveal>
                <Eyebrow tone="soft" icon={Sparkles}>Our Story</Eyebrow>
              </HeroReveal>

              <HeroReveal delay={0.1}>
                <h1 className="font-display font-bold text-3xl md:text-5xl uppercase text-ink max-w-[18em]">
                  Lorem Ipsum Dolor Sit Amet Consectetur.
                </h1>
              </HeroReveal>

              <HeroReveal delay={0.2}>
                <p className="font-sans text-sm leading-relaxed text-ink-muted max-w-[36em]">
                  Lorem ipsum <strong className="font-medium text-ink">dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </HeroReveal>

              <HeroReveal delay={0.3}>
                <div className="flex items-center gap-6">
                  <Button href="#" theme="primary" size="md">
                    Book Now
                  </Button>
                  <Button href="#" theme="link" size="md">
                    Meet the Team
                  </Button>
                </div>
              </HeroReveal>
            </div>

            {/* Team image */}
            <ImageReveal delay={0.4} onMount>
            <div className="relative aspect-[2/1] w-full overflow-hidden">
              <Image
                src="/images/team-hero.avif"
                alt="Smilery team with patient"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
            </ImageReveal>
          </Container>
        </div>
      </section>

      {/* ── Block 1: Image left + Text right ── */}
      <section id="values" className="bg-cream">
        <div className="px-6">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-12 gap-y-8 py-24">
              {/* Left — Image */}
              <ImageReveal>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/patient-smile.avif"
                  alt="Patient smiling during consultation at Smilery"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
              </ImageReveal>

              {/* Right — Text */}
              <Reveal delay={0.15}>
              <div className="flex flex-col justify-center gap-8">
                <div className="flex flex-col gap-6">
                  <Eyebrow tone="soft" icon={Heart}>Our Values</Eyebrow>

                  <h2 className="font-display font-bold text-2xl md:text-4xl uppercase text-ink">
                    Lorem Ipsum Dolor
                    <br />
                    Sit Amet.
                  </h2>

                  <p className="font-sans text-sm text-ink-muted max-w-[28em]">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </p>
                </div>

                <div className="flex flex-col">
                  {[
                    {
                      icon: Heart,
                      title: "Lorem Ipsum",
                      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                    {
                      icon: Sparkles,
                      title: "Dolor Sit Amet",
                      desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex flex-col gap-3 py-6 border-t border-ink/5">
                      <item.icon className="w-6 h-6 text-accent" strokeWidth={1.25} />
                      <div className="flex flex-col gap-1">
                        <h3 className="font-display font-bold text-sm uppercase text-ink">
                          {item.title}
                        </h3>
                        <p className="font-sans text-sm text-ink-muted max-w-[30em]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </Reveal>
            </div>
          </Container>
        </div>
      </section>

      <div className="bg-cream px-6"><Container><div className="h-px bg-ink/5" /></Container></div>

      {/* ── Block 2: Text left + Image right ── */}
      <section className="bg-cream">
        <div className="px-6">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-12 gap-y-8 py-24">
              {/* Left — Text */}
              <Reveal>
              <div className="flex flex-col justify-center gap-8">
                <div className="flex flex-col gap-6">
                  <Eyebrow tone="soft" icon={Sparkles}>Our Values</Eyebrow>

                  <h2 className="font-display font-bold text-2xl md:text-4xl uppercase text-ink">
                    Consectetur Adipiscing
                    <br />
                    Elit Tempor.
                  </h2>

                  <p className="font-sans text-sm text-ink-muted max-w-[28em]">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip.
                  </p>
                </div>

                <div className="flex flex-col">
                  {[
                    {
                      icon: Shield,
                      title: "Amet Consectetur",
                      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    },
                    {
                      icon: BookOpen,
                      title: "Adipiscing Elit",
                      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex flex-col gap-3 py-6 border-t border-ink/5">
                      <item.icon className="w-6 h-6 text-accent" strokeWidth={1.25} />
                      <div className="flex flex-col gap-1">
                        <h3 className="font-display font-bold text-sm uppercase text-ink">
                          {item.title}
                        </h3>
                        <p className="font-sans text-sm text-ink-muted max-w-[30em]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </Reveal>

              {/* Right — Image */}
              <ImageReveal delay={0.15}>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/doctor-consultation.avif"
                  alt="Doctor consulting with patient at Smilery"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
              </ImageReveal>
            </div>
          </Container>
        </div>
      </section>

      <Marquee items={["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"]} />

      {/* ── Our Team ── */}
      <section id="team" className="bg-ink/[0.015]">
        <div className="px-6">
          <Container>
            <div className="py-24 flex flex-col gap-12">
              <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div className="flex flex-col gap-6">
                  <Eyebrow tone="soft" icon={Users}>Our Team</Eyebrow>

                  <h2 className="font-display font-bold text-2xl md:text-4xl uppercase text-ink max-w-[14em]">
                    Lorem Ipsum Dolor Sit.
                  </h2>

                  <div className="w-12 h-0.5 bg-accent" />
                </div>

                <div className="flex flex-col justify-end gap-6">
                  <p className="font-sans text-sm leading-relaxed text-ink-muted max-w-[30em]">
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    Lorem ipsum dolor sit amet.
                  </p>

                  <div className="flex items-center gap-6">
                    <Button href="#" theme="primary" size="md">
                      Book Now
                    </Button>
                    <Button href="#" theme="link" size="md">
                      Meet the Team
                    </Button>
                  </div>
                </div>
              </div>
              </Reveal>

              <Reveal delay={0.1}>
              <CardSlider>
                {[
                  { num: "01", name: "A. Lorem", role: "Lorem Ipsum", slug: "a-lorem", img: "/images/team/doctor-procedure.avif" },
                  { num: "02", name: "B. Ipsum", role: "Dolor Sit", slug: "b-ipsum", img: "/images/team/doctor-portrait.avif" },
                  { num: "03", name: "C. Dolor", role: "Amet Consectetur", slug: "c-dolor", img: "/images/team/hygienist-prep.avif" },
                  { num: "04", name: "D. Sit", role: "Adipiscing Elit", slug: "d-sit", img: "/images/team/hygienist-procedure.avif" },
                ].map((member) => (
                  <Link
                    key={member.slug}
                    data-card
                    href="#"
                    className="group flex flex-col gap-4 min-w-[calc((100%-3*1.25rem)/4)] shrink-0 snap-start"
                  >
                    <div className="relative aspect-[4/5] w-full bg-ink/5 overflow-hidden">
                      <Image
                        src={member.img}
                        alt={`Portrait of ${member.name}`}
                        fill
                        sizes="25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
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
              </Reveal>
            </div>
          </Container>
        </div>
      </section>
      <div className="bg-cream px-6"><Container><div className="h-px bg-ink/5" /></Container></div>

      {/* ── Reviews ── */}
      <section id="reviews" className="bg-ink/[0.015] overflow-hidden">
        <div className="px-6">
          <Container>
            <div className="py-24 flex flex-col gap-12">
              <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div className="flex flex-col gap-6">
                  <Eyebrow tone="soft" icon={Star}>Reviews</Eyebrow>

                  <h2 className="font-display font-bold text-2xl md:text-4xl uppercase text-ink max-w-[14em]">
                    Lorem Ipsum Dolor.
                  </h2>

                  <div className="w-12 h-0.5 bg-accent" />
                </div>

                <div className="flex flex-col justify-end gap-6">
                  <p className="font-sans text-sm leading-relaxed text-ink-muted max-w-[30em]">
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    Lorem ipsum dolor sit amet.
                  </p>

                  <div className="flex items-center gap-6">
                    <Button href="#" theme="primary" size="md">
                      Book Now
                    </Button>
                    <Button href="#" theme="link" size="md">
                      Read All
                    </Button>
                  </div>
                </div>
              </div>
              </Reveal>

              <Reveal delay={0.1}>
              <ReviewCarousel
                reviews={[
                  { quote: "Lorem ipsum dolor sit amet — consectetur adipiscing elit.", name: "A. Lorem", location: "Ipsum" },
                  { quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna.", name: "B. Dolor", location: "Sit" },
                  { quote: "Ut enim ad minim veniam, quis nostrud exercitation.", name: "C. Amet", location: "Consectetur" },
                  { quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse.", name: "D. Elit", location: "Adipiscing" },
                  { quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.", name: "E. Tempor", location: "Eiusmod" },
                ]}
              />
              </Reveal>
            </div>
          </Container>
        </div>
      </section>

      <div className="bg-cream px-6"><Container><div className="h-px bg-ink/5" /></Container></div>

      {/* ── Our Office ── */}
      <section id="office" className="bg-cream" aria-labelledby="office-heading">
        <div className="px-6">
          <Container>
            <div className="flex flex-col gap-10 py-24">
              <Reveal>
              <div className="flex flex-col items-center text-center gap-6 max-w-[60em] mx-auto">
                <Eyebrow tone="soft">Our Office</Eyebrow>

                <h2
                  id="office-heading"
                  className="font-display font-bold text-2xl md:text-4xl uppercase text-ink max-w-[18em]"
                >
                  The Journey to a Radiant Smile Begins Here.
                </h2>

                <div className="w-12 h-0.5 bg-accent" />

                <p className="font-sans text-sm text-ink-muted max-w-[30em]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>

                <Button href="#" theme="primary" size="md">
                  Book Now
                </Button>
              </div>
              </Reveal>

              <Reveal delay={0.1}>
                <OfficeGallery />
              </Reveal>
            </div>
          </Container>
        </div>
      </section>

      {/* ── CTA Dark ── */}
      <section className="bg-ink">
        <div className="px-6">
          <Reveal>
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto py-24">
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
              <Button href="#" theme="white" size="md">
                Book Now
              </Button>
              <a
                href="tel:+13055550100"
                className="font-sans text-xs tracking-wide uppercase font-medium text-white/50 border-b border-white/25 pb-0.5 hover:text-cream hover:border-cream transition-colors duration-200"
              >
                (305) 555-0100
              </a>
            </div>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

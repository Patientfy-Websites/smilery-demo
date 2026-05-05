import Button from "@/components/button";
import Container from "@/components/container";
import Eyebrow from "@/components/eyebrow";
import OfficeGallery from "@/components/office-gallery";

export default function AboutPage() {
  return (
    <>
      <main className="bg-cream">
        <div className="px-6">
          <Container>
            <div className="py-16">
              <h1 className="font-display font-bold text-4xl md:text-5xl uppercase text-ink">
                About
              </h1>
            </div>
          </Container>
        </div>
      </main>

      {/* ── Our Office ── */}
      <section className="bg-cream" aria-labelledby="office-heading">
        <div className="px-6">
          <Container>
            <div className="flex flex-col gap-10 pt-14 pb-14">
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

                <Button href="/book" theme="primary" size="md">
                  Book Now
                </Button>
              </div>

              <OfficeGallery />
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

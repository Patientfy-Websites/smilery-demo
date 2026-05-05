import Container from "@/components/container";

export default function StyleguidePage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="bg-cream">
        <div className="px-6">
          <Container size="small">
            <div className="py-16">
              <p className="font-sans text-xs tracking-widest uppercase font-medium mb-6">
                Smilery · Styleguide v1.4
              </p>
              <h1 className="font-display text-3xl tracking-wider uppercase mb-4">
                Design System
              </h1>
              <div className="w-12 h-0.5 bg-accent mb-6" />
              <p className="font-sans text-sm max-w-[28em]">
                Orthodontics, reimagined · Miami Shores, FL · Opening Summer
                2026. Tailwind v4 · CSS-first config · all sizes in em · borders
                in px.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* ── 01 · Colors ── */}
      <section className="bg-cream">
        <div className="px-6">
          <Container size="small">
            <div className="py-12">
              <SectionTitle>01 · Colors</SectionTitle>
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
                <ColorSwatch name="Cream" value="#F4EEE5" className="bg-cream border border-ink-soft" />
                <ColorSwatch name="Ink" value="#0E0E0E" className="bg-ink" textLight />
                <ColorSwatch name="Ink Soft" value="#2A2A2A" className="bg-ink-soft" textLight />
                <ColorSwatch name="Ink Muted" value="rgba(14,14,14,0.55)" className="bg-ink-muted" textLight />
                <ColorSwatch name="Ember" value="#E76F3D" className="bg-accent" textLight />
                <ColorSwatch name="White" value="#FFFFFF" className="bg-white border border-ink-soft" />
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ── 02 · Typography ── */}
      <section className="bg-cream">
        <div className="px-6">
          <Container size="small">
            <div className="py-12">
              <SectionTitle>02 · Typography</SectionTitle>

              <div className="flex flex-col gap-10">
                {/* Fonts */}
                <div className="flex flex-col gap-6">
                  <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted">
                    Typefaces
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="font-display text-xl tracking-wider uppercase mb-2">
                        Bunken Tech Sans Wide
                      </p>
                      <p className="font-sans text-xs text-ink-muted">
                        Display · Headlines · Labels
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xl mb-2">
                        Inter
                      </p>
                      <p className="font-sans text-xs text-ink-muted">
                        Sans · Body · UI · Captions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Scale */}
                <div className="flex flex-col gap-8">
                  <TypeSample
                    label="Headline"
                    classes="font-display text-3xl tracking-wider uppercase"
                    sample="Be First to Know"
                    specs="1.875em · line-height 1.2 · tracking 0.04em"
                  />
                  <TypeSample
                    label="Sub-headline"
                    classes="font-display text-xl tracking-wider uppercase"
                    sample="Orthodontics Reimagined"
                    specs="1.25em · line-height 1.2 · tracking 0.04em"
                  />
                  <TypeSample
                    label="Body"
                    classes="font-sans text-sm"
                    sample="Join the waitlist to be notified when we open. We're bringing a new kind of orthodontic experience to Miami Shores."
                    specs="0.875em · line-height 1.43"
                  />
                  <TypeSample
                    label="Label / Eyebrow"
                    classes="font-sans text-xs tracking-widest uppercase font-medium"
                    sample="Opening Summer 2026"
                    specs="0.6875em · line-height 1.45 · tracking 0.08em · medium"
                  />
                  <TypeSample
                    label="Button"
                    classes="font-sans text-xs tracking-widest uppercase font-medium"
                    sample="Join the Waitlist"
                    specs="0.8125em · line-height 1.23 · tracking 0.18em · medium"
                  />
                  <TypeSample
                    label="Caption"
                    classes="font-sans text-xs text-ink-muted"
                    sample="By joining, you agree to receive updates from Smilery. We respect your privacy."
                    specs="0.75em · line-height 1.5"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ── 03 · Buttons ── */}
      <section className="bg-cream">
        <div className="px-6">
          <Container size="small">
            <div className="py-12">
              <SectionTitle>03 · Buttons</SectionTitle>

              <div className="grid grid-cols-2 gap-8">
                {/* Primary */}
                <div className="flex flex-col gap-4">
                  <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted">
                    Primary
                  </p>
                  <button className="w-full bg-ink text-white font-sans text-xs font-medium tracking-widest uppercase px-7 py-[1.125em] transition-colors duration-200 hover:bg-accent">
                    Join the Waitlist
                  </button>
                  <p className="font-sans text-xs text-ink-muted">
                    bg-ink · hover:bg-accent
                  </p>
                </div>

                {/* Secondary */}
                <div className="flex flex-col gap-4">
                  <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted">
                    Secondary · Text
                  </p>
                  <button className="w-full bg-transparent text-ink font-sans text-xs font-medium tracking-widest uppercase py-[0.875em] transition-colors duration-200 hover:text-accent">
                    I&apos;ll Add It Later
                  </button>
                  <p className="font-sans text-xs text-ink-muted">
                    bg-transparent · hover:text-accent
                  </p>
                </div>

                {/* Link */}
                <div className="flex flex-col gap-4">
                  <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted">
                    Link · Underline
                  </p>
                  <div>
                    <a
                      href="#"
                      className="inline-block font-sans text-xs font-medium tracking-widest uppercase text-ink border-b border-ink pb-1 transition-colors duration-200 hover:text-accent hover:border-accent"
                    >
                      Join the Waitlist
                    </a>
                  </div>
                  <p className="font-sans text-xs text-ink-muted">
                    border-b border-ink · hover:border-accent
                  </p>
                </div>

                {/* Back */}
                <div className="flex flex-col gap-4">
                  <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted">
                    Back
                  </p>
                  <div>
                    <button className="inline-flex items-center gap-[0.875em] font-sans text-xs font-medium tracking-widest uppercase text-ink py-2 transition-[gap] duration-200 hover:gap-[1.125em]">
                      <span>&#8592;</span> Back
                    </button>
                  </div>
                  <p className="font-sans text-xs text-ink-muted">
                    transition-[gap] · hover:gap expands
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ── 04 · Inputs ── */}
      <section className="bg-cream">
        <div className="px-6">
          <Container size="small">
            <div className="py-12">
              <SectionTitle>04 · Inputs</SectionTitle>

              <div className="grid grid-cols-2 gap-8">
                {/* Bottom-line */}
                <div className="flex flex-col gap-4">
                  <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted">
                    Bottom-line (default)
                  </p>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs tracking-widest uppercase font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full bg-transparent font-sans text-sm text-ink border-0 border-b border-ink-soft pb-2 px-0 focus:outline-none focus:border-ink transition-colors duration-200"
                    />
                  </div>
                  <p className="font-sans text-xs text-ink-muted">
                    border-0 border-b · focus:border-ink
                  </p>
                </div>

                {/* Boxed */}
                <div className="flex flex-col gap-4">
                  <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted">
                    Boxed
                  </p>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs tracking-widest uppercase font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(305) 555-0123"
                      className="w-full bg-transparent font-sans text-sm text-ink border border-ink-soft px-4 py-3 focus:outline-none focus:border-ink transition-colors duration-200"
                    />
                  </div>
                  <p className="font-sans text-xs text-ink-muted">
                    border border-ink-soft · focus:border-ink
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ── 05 · Spacing ── */}
      <section className="bg-cream">
        <div className="px-6">
          <Container size="small">
            <div className="py-12">
              <SectionTitle>05 · Spacing</SectionTitle>

              <div className="grid grid-cols-2 gap-12">
                {/* Scale */}
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted mb-4">
                    Scale
                  </p>
                  <table className="w-full font-sans text-sm">
                    <thead>
                      <tr className="border-b border-ink-soft">
                        <th className="text-left font-medium text-xs tracking-widest uppercase py-3 pr-4">
                          Utility
                        </th>
                        <th className="text-left font-medium text-xs tracking-widest uppercase py-3 pr-4">
                          em
                        </th>
                        <th className="text-left font-medium text-xs tracking-widest uppercase py-3">
                          ≈ px
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["*-1", "0.25", "4"],
                        ["*-2", "0.5", "8"],
                        ["*-3", "0.75", "12"],
                        ["*-4", "1", "16"],
                        ["*-6", "1.5", "24"],
                        ["*-8", "2", "32"],
                        ["*-10", "2.5", "40"],
                        ["*-12", "3", "48"],
                        ["*-16", "4", "64"],
                      ].map(([util, em, px]) => (
                        <tr key={util} className="border-b border-ink-soft/30">
                          <td className="py-2 pr-4 font-sans text-xs">{util}</td>
                          <td className="py-2 pr-4 font-sans text-xs">{em}em</td>
                          <td className="py-2 font-sans text-xs">{px}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Use cases */}
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted mb-4">
                    Use cases
                  </p>
                  <table className="w-full font-sans text-sm">
                    <thead>
                      <tr className="border-b border-ink-soft">
                        <th className="text-left font-medium text-xs tracking-widest uppercase py-3 pr-4">
                          Context
                        </th>
                        <th className="text-left font-medium text-xs tracking-widest uppercase py-3">
                          Utility
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Label → input", "gap-2"],
                        ["Field → field", "gap-6"],
                        ["Section → section", "gap-8 – gap-12"],
                        ["Headline → body", "mb-4 – mb-6"],
                        ["Hero breathing", "pt-16"],
                      ].map(([context, util]) => (
                        <tr key={context} className="border-b border-ink-soft/30">
                          <td className="py-2 pr-4 font-sans text-xs text-ink-muted">
                            {context}
                          </td>
                          <td className="py-2 font-sans text-xs">{util}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Fluid root */}
              <div className="mt-10 p-6 border border-ink-soft/20 rounded">
                <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted mb-3">
                  Fluid Root
                </p>
                <p className="font-sans text-sm">
                  <code className="font-sans text-xs bg-ink/5 px-2 py-1 rounded">
                    html &#123; font-size: clamp(0.875rem, 0.7rem + 0.56vw, 1.125rem) &#125;
                  </code>
                </p>
                <p className="font-sans text-xs text-ink-muted mt-3">
                  14px @ 320vw → 16px @ 768vw → 18px @ 1440vw. Tudo em em escala junto.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ── 06 · Micro-rule ── */}
      <section className="bg-cream">
        <div className="px-6">
          <Container size="small">
            <div className="py-12">
              <SectionTitle>06 · Micro-rule</SectionTitle>
              <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted mb-4">
                Ember divider
              </p>
              <div className="w-12 h-0.5 bg-accent" />
              <p className="font-sans text-xs text-ink-muted mt-3">
                w-10 · h-px · bg-accent
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* ── 07 · Wrapper Strategy ── */}
      <section className="bg-cream">
        <div className="px-6">
          <Container size="small">
            <div className="py-12">
              <SectionTitle>07 · Wrapper Strategy</SectionTitle>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  {[
                    ["section", "full-bleed background", "bg-*, sem max-w"],
                    ["padding-global", "horizontal gutters", "px-6"],
                    ["container-large", "max-width + center", "max-w-[88em] mx-auto"],
                    ["padding-section", "vertical rhythm", "py-12 / py-16 / py-8"],
                  ].map(([name, role, classes], i) => (
                    <div
                      key={name}
                      className="flex items-baseline gap-4 py-2 border-b border-ink-soft/30"
                      style={{ paddingLeft: `${i * 1.5}em` }}
                    >
                      <span className="font-sans text-xs font-medium text-ink">
                        {name}
                      </span>
                      <span className="font-sans text-xs text-ink-muted">
                        {role}
                      </span>
                      <span className="font-sans text-xs text-ink-muted ml-auto">
                        {classes}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 border border-ink-soft/20 rounded">
                    <p className="font-sans text-xs tracking-widest uppercase font-medium mb-2">
                      container-large
                    </p>
                    <p className="font-sans text-xs text-ink-muted">
                      max-w-[88em] · Grids, multi-column, default
                    </p>
                  </div>
                  <div className="p-4 border border-ink-soft/20 rounded">
                    <p className="font-sans text-xs tracking-widest uppercase font-medium mb-2">
                      container-small
                    </p>
                    <p className="font-sans text-xs text-ink-muted">
                      max-w-[48em] · Forms, articles, styleguide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ── 08 · Hero Block ── */}
      <section className="bg-cream">
        <div className="px-6">
          <Container size="small">
            <div className="py-12">
              <SectionTitle>08 · Hero Block</SectionTitle>
            </div>
          </Container>
        </div>
      </section>

      {/* Live hero example — full wrapper strategy */}
      <section className="bg-cream border-y border-ink-soft/20">
        <div className="px-6">
          <Container>
            <div className="py-16">
              <div className="flex flex-col items-center text-center">
                <p className="font-sans text-xs tracking-widest uppercase font-medium mb-6">
                  Opening Summer 2026
                </p>
                <h2 className="font-display text-3xl tracking-wider uppercase mb-4">
                  Be First to Know
                </h2>
                <div className="w-12 h-0.5 bg-accent mb-6" />
                <p className="font-sans text-sm max-w-[20em]">
                  Join the waitlist to be notified when we open.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ── 09 · Form Stack ── */}
      <section className="bg-cream">
        <div className="px-6">
          <Container size="small">
            <div className="py-12">
              <SectionTitle>09 · Form Stack</SectionTitle>
            </div>
          </Container>
        </div>
      </section>

      {/* Live form example — container-small */}
      <section className="bg-cream border-y border-ink-soft/20">
        <div className="px-6">
          <Container size="small">
            <div className="py-16">
              <div className="max-w-[24em] mx-auto">
                <form className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs tracking-widest uppercase font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent font-sans text-sm border-0 border-b border-ink-soft pb-2 focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs tracking-widest uppercase font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent font-sans text-sm border-0 border-b border-ink-soft pb-2 focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs tracking-widest uppercase font-medium">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-transparent font-sans text-sm border-0 border-b border-ink-soft pb-2 focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full bg-ink text-white font-sans text-xs font-medium tracking-widest uppercase py-[1.125em] mt-2 transition-colors hover:bg-accent"
                  >
                    Join the Waitlist
                  </button>

                  <p className="font-sans text-xs text-center text-ink-muted">
                    By joining, you agree to receive updates from Smilery. We
                    respect your privacy.
                  </p>
                </form>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ── 10 · Dark Section ── */}
      <section className="bg-ink text-white">
        <div className="px-6">
          <Container size="small">
            <div className="py-12">
              <SectionTitle dark>10 · Dark Section</SectionTitle>
              <div className="flex flex-col gap-6">
                <p className="font-sans text-sm text-white/80">
                  Sections with bg-ink invert text to white. Links and captions
                  use white/60 for hierarchy.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="w-full aspect-video rounded bg-white/10" />
                    <p className="font-sans text-xs text-white/60">white/10</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-full aspect-video rounded bg-white/15" />
                    <p className="font-sans text-xs text-white/60">white/15 · borders</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-full aspect-video rounded bg-white/60" />
                    <p className="font-sans text-xs text-white/60">white/60 · muted text</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ── Footer note ── */}
      <section className="bg-cream">
        <div className="px-6">
          <Container size="small">
            <div className="py-8">
              <p className="font-sans text-xs text-ink-muted">
                Smilery · Tailwind v4 · em edition · Fluid root
              </p>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

function SectionTitle({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <h2
      className={`font-display text-xl tracking-wider uppercase mb-8 pb-3 border-b ${
        dark ? "border-white/15" : "border-ink-soft/30"
      }`}
    >
      {children}
    </h2>
  );
}

function TypeSample({
  label,
  classes,
  sample,
  specs,
}: {
  label: string;
  classes: string;
  sample: string;
  specs: string;
}) {
  return (
    <div>
      <p className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted mb-2">
        {label}
      </p>
      <p className={classes}>{sample}</p>
      <p className="font-sans text-xs text-ink-muted mt-1">{specs}</p>
    </div>
  );
}

function ColorSwatch({
  name,
  value,
  className,
  textLight,
}: {
  name: string;
  value: string;
  className: string;
  textLight?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`w-full aspect-square rounded ${className}`} />
      <p className={`font-sans text-xs font-medium ${textLight ? "" : "text-ink"}`}>
        {name}
      </p>
      <p className="font-sans text-xs text-ink-muted">{value}</p>
    </div>
  );
}

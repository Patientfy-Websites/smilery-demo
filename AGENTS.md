<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Wrapper Strategy

Every section/page MUST follow the wrapper structure below. Never apply `max-w`, `mx-auto`, or `px` diretamente em content elements — use wrappers.

```
section.section_{name}          → full-bleed background (bg-*, py-*)
  div.padding-global            → horizontal padding (px-6)
    div.container-large         → max-width + center (max-w-[88em] mx-auto)
      div.padding-section-*     → vertical rhythm (py-12, py-16, etc.)
        {content}
```

## Rules

1. **`section`** — full-width, carries background color and vertical padding only when there is no inner `padding-section`. Never constrain width here.
2. **`padding-global`** — horizontal gutters only (`px-6`). Consistent across every section. Never changes.
3. **`container-large`** — `max-w-[88em] mx-auto`. The single source of max-width. Use `container-small` (`max-w-[48em]`) for narrow layouts (forms, articles).
4. **`padding-section-*`** — vertical spacing per section context (`py-12` default, `py-16` hero, `py-8` compact).
5. All values in **em** — they scale with the fluid root `font-size`.
6. Content elements (`h1`, `p`, `form`, grids) go **inside** the wrappers. They should never carry `mx-auto`, `max-w-[88em]`, or `px-6` themselves.

## Example

```html
<section className="bg-cream">
  <div className="px-6">
    <div className="max-w-[88em] mx-auto">
      <div className="py-16">
        <h1 className="font-display text-headline tracking-headline uppercase">
          Title
        </h1>
      </div>
    </div>
  </div>
</section>
```

## When to use `container-small`

- Forms, waitlist, single-column text: `max-w-[48em]`
- Styleguide documentation: `max-w-[48em]`
- Default pages and sections with grids: `max-w-[88em]`

const SITE_URL = "https://smilery.com";

// Coming-soon phase: only facts the site itself shows belong here (name,
// tagline, Miami Shores, opening season, waitlist). Address, phone, hours,
// team, insurance and reviews get added once the clinic confirms them —
// search engines and LLMs index JSON-LD as fact, so a placeholder here is a
// false claim about a real practice, and fake reviews/ratings also violate
// Google's structured data policy.

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Smilery",
    alternateName: "Smilery Orthodontics",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/opengraph-image.png`,
      width: 1200,
      height: 630,
      caption: "Smilery Orthodontics Logo",
    },
    image: `${SITE_URL}/opengraph-image.png`,
    description:
      "Smilery is a modern orthodontics practice opening Winter 2026 in Miami Shores, FL. Braces and clear aligners — orthodontics, reimagined.",
    slogan: "Orthodontics, Reimagined",
    areaServed: {
      "@type": "City",
      name: "Miami Shores",
      containedInPlace: { "@type": "State", name: "Florida" },
    },
    knowsAbout: ["Orthodontics", "Braces", "Clear Aligners"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Smilery",
    alternateName: "Smilery Orthodontics",
    url: SITE_URL,
    description:
      "Smilery is a modern orthodontics practice opening Winter 2026 in Miami Shores, FL. Braces, Invisalign, and clear aligners — orthodontics, reimagined.",
    inLanguage: "en-US",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "When is Smilery opening?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Smilery is opening Winter 2026 in Miami Shores, FL. Join the waitlist to be the first to know when we open.",
        },
      },
      {
        "@type": "Question",
        name: "How do I join the Smilery waitlist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit smilery.com/book-appointment and fill out the form. You'll receive opening updates from Smilery.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

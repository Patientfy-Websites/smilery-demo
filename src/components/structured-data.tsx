const SITE_URL = "https://smilery.com";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#dentist`,
    name: "Smilery",
    alternateName: "Smilery Orthodontics",
    description:
      "Smilery is a modern orthodontics practice opening Summer 2026 in Miami Shores, FL. We offer braces, Invisalign, clear aligners, and comprehensive orthodontic care in a reimagined patient experience.",
    url: SITE_URL,
    telephone: "+1-305-555-0100",
    email: "hello@smilery.com",
    foundingDate: "2026",
    slogan: "Orthodontics, Reimagined",
    legalName: "Smilery Orthodontics LLC",
    taxID: "lorem-tax-id",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 NE 2nd Ave",
      addressLocality: "Miami Shores",
      addressRegion: "FL",
      postalCode: "33138",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.8662,
      longitude: -80.1826,
    },
    hasMap: "https://maps.google.com/?q=Smilery+Orthodontics+123+NE+2nd+Ave+Miami+Shores+FL+33138",
    image: [
      `${SITE_URL}/opengraph-image.png`,
      `${SITE_URL}/images/office/lobby.avif`,
      `${SITE_URL}/images/office/reception.avif`,
    ],
    logo: `${SITE_URL}/opengraph-image.png`,
    photo: `${SITE_URL}/images/office/lobby.avif`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Insurance, Financing",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/smileryortho",
      "https://www.instagram.com/smileryortho",
      "https://www.tiktok.com/@smileryortho",
      "https://www.youtube.com/@smileryortho",
      "https://www.linkedin.com/company/smilery",
      "https://www.yelp.com/biz/smilery-orthodontics-miami-shores",
    ],
    areaServed: [
      { "@type": "City", name: "Miami Shores" },
      { "@type": "City", name: "Miami" },
      { "@type": "City", name: "North Miami" },
      { "@type": "City", name: "Biscayne Park" },
      { "@type": "City", name: "El Portal" },
      { "@type": "City", name: "Miami Beach" },
      { "@type": "City", name: "Aventura" },
      { "@type": "State", name: "Florida" },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 25.8662,
        longitude: -80.1826,
      },
      geoRadius: "30 mi",
    },
    medicalSpecialty: "Orthodontics",
    isAcceptingNewPatients: true,
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Traditional Metal Braces",
        description:
          "High-quality traditional metal braces for effective teeth alignment. Suitable for children, teens, and adults with moderate to complex orthodontic needs.",
        bodyLocation: "Mouth",
        procedureType: "NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Ceramic Braces",
        description:
          "Tooth-colored ceramic braces that blend with your smile for a more discreet orthodontic treatment experience.",
        bodyLocation: "Mouth",
        procedureType: "NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Invisalign Clear Aligners",
        description:
          "Invisalign clear aligners for virtually invisible orthodontic treatment. Custom-made removable trays to straighten teeth without brackets or wires.",
        bodyLocation: "Mouth",
        procedureType: "NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Clear Aligners",
        description:
          "Premium clear aligner therapy for adults and teens seeking a discreet alternative to traditional braces.",
        bodyLocation: "Mouth",
        procedureType: "NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Orthodontic Consultation",
        description:
          "Comprehensive orthodontic evaluation including digital X-rays, 3D scanning, and a personalized treatment plan discussion.",
        bodyLocation: "Mouth",
        procedureType: "DiagnosticProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Retainers",
        description:
          "Custom retainers for maintaining your new smile after orthodontic treatment. Available in clear and traditional options.",
        bodyLocation: "Mouth",
        procedureType: "NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Early Orthodontic Treatment (Phase I)",
        description:
          "Early intervention orthodontic treatment for children ages 7-10 to guide jaw growth and correct developing bite issues.",
        bodyLocation: "Mouth",
        procedureType: "NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Surgical Orthodontics",
        description:
          "Orthodontic treatment coordinated with oral surgery for complex jaw alignment and bite correction cases.",
        bodyLocation: "Mouth",
        procedureType: "SurgicalProcedure",
      },
    ],
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: { "@type": "Person", name: "Lorem Patient A." },
        reviewBody:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The office is beautiful and the staff is incredibly welcoming. Best orthodontic experience I've ever had!",
        datePublished: "2026-07-15",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: { "@type": "Person", name: "Lorem Patient B." },
        reviewBody:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Truly a reimagined orthodontic experience. Highly recommend Smilery!",
        datePublished: "2026-08-02",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Orthodontic Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Free Orthodontic Consultation",
            description: "Complimentary initial orthodontic evaluation and treatment plan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Braces Treatment",
            description: "Comprehensive braces treatment starting at competitive pricing.",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Invisalign Treatment",
            description: "Full Invisalign clear aligner treatment with all follow-up visits included.",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
          },
        },
      ],
    },
    potentialAction: [
      {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/book-appointment`,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        result: {
          "@type": "Reservation",
          name: "Orthodontic Appointment",
        },
      },
      {
        "@type": "CommunicateAction",
        target: {
          "@type": "EntryPoint",
          telephone: "+1-305-555-0100",
        },
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-305-555-0100",
        contactType: "customer service",
        email: "hello@smilery.com",
        areaServed: "US",
        availableLanguage: ["English", "Spanish", "Portuguese"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-305-555-0100",
        contactType: "reservations",
        email: "appointments@smilery.com",
        areaServed: "US",
        availableLanguage: ["English", "Spanish"],
      },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Complimentary Beverages", value: true },
      { "@type": "LocationFeatureSpecification", name: "TV in Treatment Rooms", value: true },
    ],
    publicAccess: true,
    smokingAllowed: false,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

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
      "Smilery is a modern orthodontics practice in Miami Shores, FL offering braces, Invisalign, and clear aligners with a reimagined patient experience.",
    foundingDate: "2026",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Miami Shores",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    founder: {
      "@type": "Person",
      name: "Dr. Lorem Ipsum",
      jobTitle: "Orthodontist",
      description:
        "Board-certified orthodontist with over 10 years of experience in modern orthodontic techniques. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: `${SITE_URL}/images/team/doctor-portrait.avif`,
      sameAs: ["https://www.linkedin.com/in/lorem-ipsum-dmd"],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Lorem University School of Dental Medicine",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Lorem Institute of Orthodontics",
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Doctor of Dental Medicine (DMD)",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Master of Science in Orthodontics (MS)",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "American Board of Orthodontics Certification",
        },
      ],
      memberOf: [
        { "@type": "Organization", name: "American Association of Orthodontists" },
        { "@type": "Organization", name: "American Dental Association" },
        { "@type": "Organization", name: "Florida Dental Association" },
      ],
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 5,
      maxValue: 15,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 NE 2nd Ave",
      addressLocality: "Miami Shores",
      addressRegion: "FL",
      postalCode: "33138",
      addressCountry: "US",
    },
    telephone: "+1-305-555-0100",
    email: "hello@smilery.com",
    sameAs: [
      "https://www.facebook.com/smileryortho",
      "https://www.instagram.com/smileryortho",
      "https://www.tiktok.com/@smileryortho",
      "https://www.youtube.com/@smileryortho",
      "https://www.linkedin.com/company/smilery",
    ],
    knowsAbout: [
      "Orthodontics",
      "Braces",
      "Invisalign",
      "Clear Aligners",
      "Teeth Straightening",
      "Bite Correction",
      "Jaw Alignment",
      "Pediatric Orthodontics",
      "Adult Orthodontics",
    ],
    slogan: "Orthodontics, Reimagined",
    brand: {
      "@type": "Brand",
      name: "Smilery",
      slogan: "Orthodontics, Reimagined",
      logo: `${SITE_URL}/opengraph-image.png`,
    },
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
      "Smilery is a modern orthodontics practice opening Summer 2026 in Miami Shores, FL. Braces, Invisalign, and clear aligners — orthodontics, reimagined.",
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Smilery",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    copyrightHolder: {
      "@type": "Organization",
      name: "Smilery",
    },
    copyrightYear: 2026,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: `${SITE_URL}/about-us`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Book Appointment",
        item: `${SITE_URL}/book-appointment`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Contact",
        item: `${SITE_URL}/contact`,
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
          text: "Smilery is opening Summer 2026 in Miami Shores, FL. Join our waitlist to be the first to know when we open and receive exclusive opening offers.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Smilery located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Smilery is located at 123 NE 2nd Ave, Miami Shores, FL 33138. We are conveniently located near downtown Miami Shores with easy access from North Miami, Biscayne Park, and El Portal.",
        },
      },
      {
        "@type": "Question",
        name: "What orthodontic services does Smilery offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Smilery offers a full range of orthodontic services including traditional metal braces, ceramic braces, Invisalign clear aligners, clear aligner therapy, retainers, early orthodontic treatment for children (Phase I), and surgical orthodontics. We provide personalized treatment plans for children, teens, and adults.",
        },
      },
      {
        "@type": "Question",
        name: "Does Smilery accept insurance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Smilery accepts most major dental insurance plans. We also offer flexible financing options and payment plans to make orthodontic treatment accessible. Contact us at (305) 555-0100 for insurance verification.",
        },
      },
      {
        "@type": "Question",
        name: "How much do braces cost at Smilery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost of braces at Smilery varies depending on the type of treatment and complexity of each case. We offer complimentary initial consultations to provide an accurate estimate. Financing options and payment plans are available.",
        },
      },
      {
        "@type": "Question",
        name: "Does Smilery offer Invisalign?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Smilery is a certified Invisalign provider. We offer Invisalign clear aligners for teens and adults seeking a virtually invisible alternative to traditional braces. Schedule a free consultation to find out if Invisalign is right for you.",
        },
      },
      {
        "@type": "Question",
        name: "What age should my child first see an orthodontist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The American Association of Orthodontists recommends that children have their first orthodontic evaluation by age 7. At Smilery, we offer early orthodontic assessments to identify potential issues and determine the best time to start treatment.",
        },
      },
      {
        "@type": "Question",
        name: "How do I join the Smilery waitlist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can join the Smilery waitlist by visiting smilery.com/book-appointment and filling out the form. You'll receive exclusive updates about our opening date, special offers, and the opportunity to be among our first patients.",
        },
      },
      {
        "@type": "Question",
        name: "Is Smilery accepting new patients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Smilery is currently accepting waitlist signups ahead of our Summer 2026 opening. Join the waitlist to secure your spot and receive priority scheduling when we open.",
        },
      },
      {
        "@type": "Question",
        name: "What languages does Smilery support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Smilery offers services in English, Spanish, and Portuguese to serve the diverse community of Miami Shores and surrounding areas.",
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

export function MedicalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#medicalbusiness`,
    name: "Smilery",
    alternateName: "Smilery Orthodontics",
    medicalSpecialty: "Orthodontics",
    url: SITE_URL,
    telephone: "+1-305-555-0100",
    email: "hello@smilery.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 NE 2nd Ave",
      addressLocality: "Miami Shores",
      addressRegion: "FL",
      postalCode: "33138",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.8662,
      longitude: -80.1826,
    },
    isAcceptingNewPatients: true,
    availableService: [
      { "@type": "MedicalTherapy", name: "Orthodontic Braces" },
      { "@type": "MedicalTherapy", name: "Invisalign" },
      { "@type": "MedicalTherapy", name: "Clear Aligners" },
      { "@type": "MedicalTherapy", name: "Retainers" },
      { "@type": "MedicalTherapy", name: "Early Orthodontic Treatment" },
    ],
    medicalAudience: [
      { "@type": "MedicalAudience", audienceType: "Patient" },
      { "@type": "PeopleAudience", suggestedMinAge: 7 },
    ],
    healthPlanNetworkId: "lorem-network-id",
    insurance: [
      "Delta Dental",
      "Cigna",
      "Aetna",
      "MetLife",
      "United Healthcare",
      "Guardian",
      "Humana",
      "BlueCross BlueShield",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

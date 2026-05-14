import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import SmoothScroll from "@/components/smooth-scroll";
import {
  LocalBusinessJsonLd,
  WebSiteJsonLd,
  OrganizationJsonLd,
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  MedicalBusinessJsonLd,
} from "@/components/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-accent",
  style: ["italic"],
});

const SITE_URL = "https://smilery.com";
const SITE_NAME = "Smilery";
const SITE_TITLE = "Smilery — Orthodontics, Reimagined | Miami Shores, FL";
const SITE_DESCRIPTION =
  "Smilery is a modern orthodontics practice opening Summer 2026 in Miami Shores, FL. Offering braces, Invisalign, and clear aligners with a reimagined patient experience. Join the waitlist today.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4EFEA" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0E0E" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Smilery — Orthodontics, Reimagined",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "orthodontist Miami Shores",
    "orthodontics Miami",
    "braces Miami Shores FL",
    "Invisalign Miami Shores",
    "clear aligners Miami",
    "orthodontist near me",
    "Smilery orthodontics",
    "modern orthodontics Miami",
    "orthodontist Miami Shores FL 33138",
    "best orthodontist Miami",
    "affordable braces Miami Shores",
    "ceramic braces Miami",
    "invisible braces Miami Shores",
    "teeth straightening Miami",
    "orthodontic treatment Miami Shores",
    "adult braces Miami",
    "teen braces Miami Shores",
    "orthodontic consultation Miami",
    "Smilery Miami Shores",
    "new orthodontist Miami Shores 2026",
  ],
  authors: [
    { name: "Smilery", url: SITE_URL },
    { name: "Dr. Lorem Ipsum, DMD, MS", url: `${SITE_URL}/about-us#team` },
  ],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  generator: "Next.js",
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
    date: true,
    url: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Smilery — Orthodontics, Reimagined | Modern orthodontic practice in Miami Shores, FL",
        type: "image/png",
      },
    ],
    countryName: "United States",
    emails: ["hello@smilery.com"],
    phoneNumbers: ["+1-305-555-0100"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@smileryortho",
    creator: "@smileryortho",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: {
      url: "/opengraph-image.png",
      alt: "Smilery — Orthodontics, Reimagined | Miami Shores, FL",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "es-US": `${SITE_URL}/es`,
    },
  },
  category: "health",
  classification: "Orthodontics, Dental Care, Healthcare",
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Miami Shores",
    "geo.position": "25.8662;-80.1826",
    ICBM: "25.8662, -80.1826",
    "revisit-after": "7 days",
    rating: "general",
    "DC.title": SITE_TITLE,
    "DC.creator": SITE_NAME,
    "DC.subject": "Orthodontics",
    "DC.description": SITE_DESCRIPTION,
    "DC.publisher": SITE_NAME,
    "DC.language": "en",
    "DC.coverage": "Miami Shores, FL, United States",
    "apple-mobile-web-app-title": SITE_NAME,
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#F4EFEA",
    "msapplication-config": "/browserconfig.xml",
    "format-detection": "telephone=yes",
    "business:contact_data:street_address": "123 NE 2nd Ave",
    "business:contact_data:locality": "Miami Shores",
    "business:contact_data:region": "FL",
    "business:contact_data:postal_code": "33138",
    "business:contact_data:country_name": "United States",
    "business:contact_data:phone_number": "+1-305-555-0100",
    "business:contact_data:website": SITE_URL,
    "business:contact_data:email": "hello@smilery.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/opengraph-image.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "lorem-google-site-verification-code",
    yandex: "lorem-yandex-verification-code",
    other: {
      "msvalidate.01": "lorem-bing-verification-code",
      "p:domain_verify": "lorem-pinterest-verification-code",
      "facebook-domain-verification": "lorem-facebook-verification-code",
    },
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  archives: [`${SITE_URL}/blog`],
  bookmarks: [`${SITE_URL}/book-appointment`],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <OrganizationJsonLd />
        <BreadcrumbJsonLd />
        <FAQPageJsonLd />
        <MedicalBusinessJsonLd />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import SmoothScroll from "@/components/smooth-scroll";
import {
  WebSiteJsonLd,
  OrganizationJsonLd,
  FAQPageJsonLd,
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
  "Smilery is a modern orthodontics practice opening Winter in Miami Shores, FL. Offering braces, Invisalign, and clear aligners with a reimagined patient experience. Join the waitlist today.";

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
  authors: [{ name: "Smilery", url: SITE_URL }],
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
  },
  twitter: {
    card: "summary_large_image",
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
  },
  category: "health",
  classification: "Orthodontics, Dental Care, Healthcare",
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Miami Shores",
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
    "format-detection": "telephone=yes",
    // Street address, phone and email stay out until the clinic confirms
    // them — see structured-data.tsx.
    "business:contact_data:locality": "Miami Shores",
    "business:contact_data:region": "FL",
    "business:contact_data:country_name": "United States",
    "business:contact_data:website": SITE_URL,
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
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
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
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <FAQPageJsonLd />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

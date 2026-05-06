import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FontSwitcher from "@/components/font-switcher";
import SmoothScroll from "@/components/smooth-scroll";
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

export const metadata: Metadata = {
  title: "Smilery",
  description: "Orthodontics, reimagined · Miami Shores, FL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <SmoothScroll />
        <Navbar />
        <div className="flex-1 pt-16">{children}</div>
        <Footer />
        <FontSwitcher />
      </body>
    </html>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./logo";

const NAV_LINKS = [
  { label: "About", href: "/about-us" },
  { label: "Services", href: "#" },
  { label: "Resources", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cream">
      <div className="px-8 md:px-6">
        <div className="max-w-[96em] mx-auto">
          <div className="flex items-center justify-between py-6">
            <Link href="/" aria-label="Smilery — Home">
              <Logo className="h-5 sm:h-6 w-auto text-ink" />
            </Link>

            <div className="flex items-center gap-6">
              <Link
                href="/book-appointment"
                className="font-sans text-xs tracking-[0.3em] uppercase font-medium text-ink hover:text-accent transition-colors duration-200"
              >
                Book Now
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className="text-ink hover:text-accent transition-colors duration-200"
              >
                {open ? (
                  <X className="w-6 h-6" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-[5em] bg-cream transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-8 md:px-6 h-full">
          <div className="max-w-[96em] mx-auto h-full">
            <ul className="flex flex-col gap-6 py-12">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display font-bold text-2xl tracking-[0.2em] uppercase text-ink hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

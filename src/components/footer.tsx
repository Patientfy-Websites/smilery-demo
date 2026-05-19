import Link from "next/link";
import { Phone, Mail, Calendar, ShieldCheck, Plus } from "lucide-react";

type FooterLinkItem = { label: string; href: string };

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12Z" />
    </svg>
  );
}

const CONTACT_ITEMS = [
  { icon: Phone, label: "+1 (305) 555-0100", href: "tel:+13055550100" },
  { icon: Mail, label: "Client Service", href: "mailto:hello@smilery.com" },
  { icon: ShieldCheck, label: "Insurance & Financing", href: "#" },
  { icon: Calendar, label: "Book Appointment", href: "/book-appointment" },
];

const ACCORDION_SECTIONS: { title: string; items: FooterLinkItem[] }[] = [
  {
    title: "About Smilery",
    items: [
      { label: "Our Values", href: "/about-us#values" },
      { label: "Our Office", href: "/about-us#office" },
      { label: "Our Team", href: "/about-us#team" },
      { label: "Reviews", href: "/about-us#reviews" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Service 01", href: "#" },
      { label: "Service 02", href: "#" },
      { label: "Service 03", href: "#" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Insurance", href: "#" },
      { label: "Financing", href: "#" },
      { label: "Blog", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="px-8 md:px-6">
        <div className="max-w-[96em] mx-auto">
          <div className="py-20 md:py-28">
            <div className="flex flex-col items-center text-center">
              <p className="font-sans text-xs tracking-[0.3em] uppercase font-medium text-white/60">
                Can we help?
              </p>
              <h2 className="mt-6 font-display font-bold text-[1.5em] md:text-[1.75em] uppercase text-white leading-[1.4] tracking-[0.2em] max-w-[20em]">
                Please get in touch by phone or email
              </h2>

              <ul className="mt-12 flex flex-col gap-6 md:gap-7">
                {CONTACT_ITEMS.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-4 font-sans text-xs tracking-[0.3em] uppercase font-medium text-white hover:text-accent transition-colors duration-200"
                    >
                      <Icon
                        className="w-5 h-5 text-white/80 group-hover:text-accent transition-colors duration-200"
                        strokeWidth={1.5}
                      />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <ul className="flex flex-col border-t border-white/15 md:hidden">
              {ACCORDION_SECTIONS.map((section) => (
                <li key={section.title}>
                  <details className="group border-b border-white/15 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between py-6 cursor-pointer font-sans text-xs tracking-[0.3em] uppercase font-medium text-white hover:text-accent transition-colors duration-200 list-none">
                      <span>{section.title}</span>
                      <Plus
                        className="w-5 h-5 transition-transform duration-300 group-open:rotate-45"
                        strokeWidth={1.5}
                      />
                    </summary>
                    <ul className="flex flex-col gap-3 pb-6">
                      {section.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>

            <div className="hidden md:grid grid-cols-4 gap-8 py-12 border-t border-b border-white/15">
              {ACCORDION_SECTIONS.map((section) => (
                <div key={section.title} className="flex flex-col gap-5">
                  <h3 className="font-display text-xs tracking-[0.3em] uppercase font-bold text-white">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="py-10 md:py-14">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="pb-8">
            <p className="font-sans text-xs text-white/40 text-center">
              © 2026 Smilery Orthodontics. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

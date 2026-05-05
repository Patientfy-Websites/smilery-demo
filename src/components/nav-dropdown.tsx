"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type DropdownItem = {
  label: string;
  href: string;
};

export default function NavDropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: DropdownItem[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={href}
        className="font-sans text-xs tracking-wide uppercase font-medium text-ink/80 hover:text-ink transition-colors inline-flex items-center justify-center gap-1"
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={1.5}
        />
      </Link>

      <div
        className={`absolute top-full left-0 pt-4 transition-all duration-200 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
      >
        <div className="bg-cream border border-ink/10 p-4 min-w-[12em] flex flex-col gap-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-xs tracking-wide uppercase font-medium text-ink/60 hover:text-ink transition-colors py-1.5"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

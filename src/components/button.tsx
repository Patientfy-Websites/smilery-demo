import { tv, type VariantProps } from "tailwind-variants";
import Link from "next/link";
import { type ComponentProps } from "react";

const button = tv({
  base: "inline-flex items-center justify-center font-display font-bold tracking-wide uppercase leading-none transition-colors duration-200",
  variants: {
    theme: {
      primary: "bg-ink text-cream hover:bg-accent",
      secondary: "bg-transparent text-ink hover:text-accent",
      outline: "bg-transparent border border-ink-soft text-ink hover:border-ink",
      "outline-light":
        "bg-transparent border border-white/20 text-white/80 hover:text-white hover:border-white/40",
      white: "bg-white text-ink hover:bg-accent hover:text-white",
      link: "border-b border-ink text-ink pb-1 hover:text-accent hover:border-accent",
    },
    size: {
      sm: "text-xs px-5 py-[0.75em]",
      md: "text-xs px-7 py-[1.125em]",
      lg: "text-sm px-8 py-[1.25em]",
    },
  },
  defaultVariants: {
    theme: "primary",
    size: "md",
  },
});

type ButtonVariants = VariantProps<typeof button>;

type ButtonProps = ButtonVariants & {
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<"button">, "className" | "children">;

export default function Button({
  href,
  theme,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = button({ theme, size, className });

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export { button, type ButtonVariants };

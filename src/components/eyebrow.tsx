import { tv, type VariantProps } from "tailwind-variants";
import type { LucideIcon } from "lucide-react";

const eyebrow = tv({
  base: "font-sans text-[0.625rem] tracking-wide uppercase font-semibold inline-flex items-center gap-2",
  variants: {
    tone: {
      default: "text-ink",
      soft: "text-ink-soft",
      muted: "text-ink-muted",
      light: "text-white/50",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});

type EyebrowVariants = VariantProps<typeof eyebrow>;

type EyebrowProps = EyebrowVariants & {
  as?: React.ElementType;
  icon?: LucideIcon;
  className?: string;
  children: React.ReactNode;
};

export default function Eyebrow({
  as: Tag = "p",
  tone,
  icon: Icon,
  className,
  children,
}: EyebrowProps) {
  return (
    <Tag className={eyebrow({ tone, className })}>
      {Icon && <Icon className="w-4.5 h-4.5 text-accent" strokeWidth={1.25} />}
      {children}
    </Tag>
  );
}

export { eyebrow, type EyebrowVariants };

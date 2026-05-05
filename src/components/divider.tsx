import { tv, type VariantProps } from "tailwind-variants";

const divider = tv({
  base: "flex items-center",
  variants: {
    variant: {
      single: "",
      double: "flex-col gap-1",
      dot: "gap-3",
    },
    tone: {
      accent: "text-accent",
      ink: "text-ink/10",
    },
  },
  defaultVariants: {
    variant: "single",
    tone: "accent",
  },
});

type DividerVariants = VariantProps<typeof divider>;

type DividerProps = DividerVariants & {
  className?: string;
};

export default function Divider({ variant, tone, className }: DividerProps) {
  if (variant === "double") {
    return (
      <div className={divider({ variant, tone, className })}>
        <div className="w-12 h-px bg-current" />
        <div className="w-8 h-px bg-current opacity-50" />
      </div>
    );
  }

  if (variant === "dot") {
    return (
      <div className={divider({ variant, tone, className })}>
        <div className="w-5 h-px bg-current" />
        <div className="w-1 h-1 rounded-full bg-current" />
        <div className="w-5 h-px bg-current" />
      </div>
    );
  }

  return (
    <div className={divider({ variant, tone, className })}>
      <div className="w-12 h-0.5 bg-current" />
    </div>
  );
}

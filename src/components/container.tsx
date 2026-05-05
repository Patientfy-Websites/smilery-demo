import { tv, type VariantProps } from "tailwind-variants";

const container = tv({
  base: "mx-auto",
  variants: {
    size: {
      large: "max-w-[96em]",
      small: "max-w-[48em]",
    },
  },
  defaultVariants: {
    size: "large",
  },
});

type ContainerVariants = VariantProps<typeof container>;

type ContainerProps = ContainerVariants & {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Container({
  as: Tag = "div",
  size,
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={container({ size, className })}>
      {children}
    </Tag>
  );
}

export { container, type ContainerVariants };

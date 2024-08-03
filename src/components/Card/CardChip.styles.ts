import { VariantProps, cva } from "class-variance-authority";

export const cardChipStyles = cva(["rounded-full", "py-0.5", "px-2", "text-sm", "font-sans", "font-semibold"],{
    variants: {
      intent: {
        main: [
          "bg-surface",
          "text-onSurface"
        ],
      },
    },
    defaultVariants: {
      intent: "main",
    },
})

export type CardChipStylesProps = VariantProps<typeof cardChipStyles>
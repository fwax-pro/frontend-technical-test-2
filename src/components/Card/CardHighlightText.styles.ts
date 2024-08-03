import { VariantProps, cva } from "class-variance-authority";

export const cardHighlightTextStyles = cva(["font-semibold", "text-base", "leading-6", "mb-3"],{
    variants: {
      intent: {
        main: [
          "text-accent",
        ],
      },
    },
    defaultVariants: {
      intent: "main",
    },
})

export type CardHighlightTextStylesProps = VariantProps<typeof cardHighlightTextStyles>
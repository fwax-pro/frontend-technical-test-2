import { VariantProps, cva } from "class-variance-authority";

export const cardDescriptionStyles = cva(["font-sans","font-semibold", "lg:text-xl", "text-base", "leading-7", "h-26"],{
    variants: {
      intent: {
        main: [
          "text-secondary",
        ],
      },
    },
    defaultVariants: {
      intent: "main",
    },
})

export type CardDescriptionStylesProps = VariantProps<typeof cardDescriptionStyles>
import { ReactElement, ReactNode } from "react"
import { cardDescriptionStyles, type CardDescriptionStylesProps } from "./CardDescription.styles"

export interface DescriptionProps extends CardDescriptionStylesProps {
    children: ReactNode
    className?: string
}

export const Description = ({
    className,
    intent,
    children}:DescriptionProps):ReactElement => <div tabIndex={1} className={cardDescriptionStyles({intent, className})}>{children}</div>

Description.displayName = 'Card.HighlightText'
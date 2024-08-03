import { ReactElement, ReactNode } from "react"
import { cardHighlightTextStyles, type CardHighlightTextStylesProps } from "./CardHighlightText.styles"

export interface HighlightTextProps extends CardHighlightTextStylesProps {
    children: ReactNode
    className?: string
}

export const HighlightText = ({
    className,
    intent,
    children
}:HighlightTextProps):ReactElement => <h3 tabIndex={1} className={cardHighlightTextStyles({ intent, className })}>{children}</h3>

HighlightText.displayName = 'Card.HighlightText'
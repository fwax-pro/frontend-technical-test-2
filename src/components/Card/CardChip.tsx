import { ReactElement, ReactNode } from "react"
import { type CardChipStylesProps, cardChipStyles } from "./CardChip.styles"

export interface ChipProps extends CardChipStylesProps {
    children: ReactNode
    className?: string
}

export const Chip = ({ 
    className,
    intent, 
    children}:ChipProps):ReactElement => <div className={cardChipStyles({intent, className})}>{children} </div>

Chip.displayName = 'Card.Chip'
import { ReactElement, ReactNode } from "react"
import { type CardChipStylesProps, cardChipStyles } from "./CardChip.styles"

export interface ChipProps extends CardChipStylesProps {
    children: ReactNode
    className?: string
}

export const Chip = ({ 
    className,
    intent, 
    children}:ChipProps):ReactElement => <div tabIndex={1} className={cardChipStyles({intent, className})}>{children} </div>

Chip.displayName = 'Card.Chip'
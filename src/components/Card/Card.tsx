import { ReactElement, ReactNode } from "react"

export interface CardProps {
    children: ReactNode;
}

export const Card: React.FC<CardProps> = ({children}):ReactElement => {
    return (
        <a className="bg-primary" href="#">
            {children}
        </a>
    )
}

Card.displayName = 'Card.Root'
import { ReactElement, ReactNode } from "react"

export interface FooterProps {
    children: ReactNode
}

export const Footer = ({children}:FooterProps):ReactElement => <div className="flex justify-between items-center">{children}</div>

Footer.displayName = 'Card.Footer'
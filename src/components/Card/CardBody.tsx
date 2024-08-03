import { ReactElement, ReactNode } from "react"

export interface BodyProps {
    children: ReactNode
}

export const Body = ({children}:BodyProps):ReactElement => <div>{children}</div>

Body.displayName = 'Card.Body'
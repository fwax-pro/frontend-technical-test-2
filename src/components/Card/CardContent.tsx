import { ReactElement, ReactNode } from "react"

export interface ContentProps {
    children: ReactNode
}

export const Content = ({children}:ContentProps):ReactElement => <div className="p-6 w-88 h-52">{children}</div>

Content.displayName = 'Card.Content'
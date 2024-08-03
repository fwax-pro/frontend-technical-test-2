import { ReactElement, ReactNode } from "react"

import icon from "../../assets/icon.svg"

export interface ReadingTimeProps {
    children: ReactNode
}

export const ReadingTime = ({children}:ReadingTimeProps):ReactElement => <div className="flex gap-2"><img className="w-6 h-6" src={icon} alt="icone d'une image d'une horloge"/> {children} </div>

ReadingTime.displayName = 'Card.ReadingTime'
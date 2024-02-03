import React from 'react'
import FadeUp from "./FadeUp.tsx"

type Props = {
    title: string
    variant: "open" | "close",
    color?: "purple" | "pink"
}

export const TagTitle = ({ title, variant, color = "purple" }: Props) => {
    return (
        <FadeUp width="100%">
            <div className={`Title-Tag flex items-center ${variant} ${color}`}>
                <span className='px-1 text-[1.5em]'>{variant === "open" ? "<" : "</"}</span>
                <p className='px-1 text-[1.6em]'>{title}</p>
                <span className='px-1 text-[1.5em]'>{">"}</span>
            </div>
        </FadeUp>
    )
}

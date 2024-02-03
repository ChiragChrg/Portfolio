import React from 'react'
import FadeUp from "./FadeUp.tsx"

type Props = {
    title: string
    variant?: "open" | "close",
    color?: "purple" | "pink"
}

export const SectionTitle = ({ title, variant, color = "purple" }: Props) => {
    return (
        <FadeUp width="100%">
            <div className={`Title-Tag Title_Line flex items-center ${variant} ${color}`}>
                <span className='text-[1.5em]'>{variant === "open" ? "<" : "</"}</span>
                <p className='text-[1.6em]'>{title}</p>
                <span className='text-[1.5em]'>{">"}</span>
            </div>
        </FadeUp>
    )
}

export const CenterTitle = ({ title, color = "purple" }: Props) => {
    return (
        <FadeUp width="100%">
            <div className={`Title-Tag Title_Line flex_center text-[2em] ${color}`}>
                <span>{"<"}</span>
                <p>{title}</p>
                <span>{"/>"}</span>
            </div>
        </FadeUp>
    )
}

export const SkillTitle = ({ title, color = "purple" }: Props) => {
    return (
        <FadeUp width="100%">
            <div className={`Title-Tag flex_center ${color}`}>
                <p className='text-[1.6em]'>{title}</p>
                <span className='text-[1.5em]'>{"()"}</span>
            </div>
        </FadeUp>
    )
}

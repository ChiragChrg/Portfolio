import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { FadeUpVariant } from '../../utils/Variants'

type Props = {
    children: React.ReactNode,
    isHover?: boolean,
    width?: string,
    height?: string,
    className?: string
}

const FadeUp = ({
    children, isHover = false, width = "fit-content", height = "100%",
    className = ""
}: Props) => {
    const FadeUpRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(FadeUpRef, { once: true })
    const FadeControl = useAnimation()

    useEffect(() => {
        if (isInView) {
            FadeControl.start("fadeup")
        }
        console.log(isHover)
    }, [isInView])

    return (
        <motion.div
            variants={FadeUpVariant}
            initial="init"
            animate={FadeControl}
            style={{ width, height }}
            className={`relative ${className}`}
            ref={FadeUpRef}>
            {children}
        </motion.div>
    )
}

export default FadeUp
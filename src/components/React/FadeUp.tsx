import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, type MouseEventHandler } from 'preact/hooks'

// Lazy loading variants
const variants = import('../../utils/Variants');
const { FadeUpVariant } = await variants;

type Props = {
    children: React.ReactNode,
    width?: string,
    height?: string,
    className?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}

const FadeUp = ({
    children, width = "fit-content", height = "100%",
    className = "", onClick
}: Props) => {
    const FadeUpRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(FadeUpRef, { once: true })
    const FadeControl = useAnimation()

    useEffect(() => {
        if (isInView) {
            FadeControl.start("fadeup")
        }
    }, [isInView])

    return (
        <motion.div
            variants={FadeUpVariant}
            initial="init"
            animate={FadeControl}
            style={{ width, height }}
            className={`relative ${className}`}
            onClick={onClick}
            ref={FadeUpRef}>
            {children}
        </motion.div>
    )
}

export default FadeUp
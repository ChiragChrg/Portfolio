import { motion } from "framer-motion"

export const FadeModal = ({ children, className = "" }) => {
    const FadeInVar = {
        hidden: {
            y: 50,
            opacity: 0,
            visibility: "hidden",
        },
        visible: {
            y: 0,
            opacity: 1,
            visibility: "visible",
            transition: {
                delay: 0.25,
                type: "tween",
                duration: 0.5,
                delayChildren: 0.5,
                staggerChildren: 0.1
            }
        }
    }

    return (
        <motion.div
            variants={FadeInVar}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            className={className} >
            {children}
        </motion.div>
    )
}

export default FadeModal
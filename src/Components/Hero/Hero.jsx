import "./Hero.css"
import { motion } from "framer-motion"

// import AOTImg from "../../../public/AOT.jpg"
import AOTImg from "../../AOT.jpg"

const Hero = () => {
    const orbitVariant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.6,
                delayChildren: 0.6,
                staggerChildren: 0.1
            }
        }
    }

    const circleVariant = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: [0, 0.71, 0.2, 1.01],
                duration: 0.5,
                scale: {
                    type: "spring",
                    damping: 8,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }
        }
    }

    return (
        <div className="Hero-Main flex">
            <div className="Hero-Text">
                <h1>Hi! My name is
                    <span className="gradientText">Chirag.</span>
                </h1>
            </div>

            <motion.div
                variants={orbitVariant}
                initial="hidden"
                animate="visible"
                className="Hero-AvatarContainer flex">
                <motion.div
                    variants={circleVariant}
                    className="Hero-Avatar flex">
                    <img src={AOTImg} alt="AOTImg" />
                </motion.div>
                <motion.div
                    variants={circleVariant}
                    className="Hero-AvatarTrail Trail1">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
                <motion.div
                    variants={circleVariant}
                    className="Hero-AvatarTrail Trail2">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
                <motion.div
                    variants={circleVariant}
                    className="Hero-AvatarTrail Trail3">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
                <motion.div
                    variants={circleVariant}
                    className="Hero-AvatarTrail Trail4">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero
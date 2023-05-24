import "./Hero.css"
import { motion } from "framer-motion"
import { BsGithub, BsLinkedin, BsTwitter, BsGoogle, BsInstagram } from "react-icons/bs"

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
        <section id="hero" className="Hero-Main flex">
            <div className="Hero-Intro flex col">
                <div className="Hero-Text">
                    <p>Hi! my name is,</p>
                    <h1 className="gradientText">Chirag.</h1>
                    <p>I'm a Fullstack Web Developer.</p>
                    <p>I create Exciting Stuff on the Internet.</p>
                </div>

                <div className="Hero-Links flex">
                    <a href="https://github.com/ChiragChrg" title="GitHub" target="_blank" rel="noreferrer">
                        <BsGithub size={30} color="var(--text)" />
                    </a>
                    <a href="https://www.linkedin.com/in/chiragchrg/" title="LinkedIn" target="_blank" rel="noreferrer">
                        <BsLinkedin size={30} color="var(--text)" />
                    </a>
                    <a href="https://twitter.com/ChiragChrg1" title="Twitter" target="_blank" rel="noreferrer">
                        <BsTwitter size={30} color="var(--text)" />
                    </a>
                    <a href="https://www.instagram.com/chiragchrg/" title="Instagram" target="_blank" rel="noreferrer">
                        <BsInstagram size={30} color="var(--text)" />
                    </a>
                    <a href="https://www.google.com/search?q=%22chiragchrg%22" title="Google Search" target="_blank" rel="noreferrer">
                        <BsGoogle size={30} color="var(--text)" />
                    </a>
                </div>
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
        </section>
    )
}

export default Hero
import "./Hero.css"
import { motion } from "framer-motion"
import { BsGithub, BsLinkedin, BsTwitter, BsGoogle, BsInstagram } from "react-icons/bs"

// import AvatarImg from "../../AOT.webp"
import { AvatarImg } from "../../assets/index"

const Hero = () => {
    const orbitContainer = {
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

    const orbitItems = {
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
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }
        }
    }

    const TextContainer = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.1
            }
        }
    }

    const TextItems = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                ease: "easeOut",
                duration: 0.4,
                scale: {
                    type: "spring",
                    damping: 10,
                    stiffness: 200,
                    restDelta: 0.001
                }
            }
        }
    }


    return (
        <section id="hero" className="Hero-Main flex">
            <div className="Hero-Intro flex col">
                <motion.div
                    variants={TextContainer}
                    initial="hidden"
                    animate="visible"
                    className="Hero-Text">
                    <motion.p
                        variants={TextItems}>Hi! my name is,</motion.p>
                    <motion.h1
                        variants={TextItems}
                        className="gradientText">Chirag.</motion.h1>
                    <motion.p
                        variants={TextItems}>I'm a Fullstack Web Developer.</motion.p>
                    <motion.p
                        variants={TextItems}>I create <span className="gradientText">Exciting Stuff</span> on the Internet.</motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.4,
                        delay: 1
                    }}
                    className="Hero-Links flex">
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
                </motion.div>
            </div>

            <motion.div
                variants={orbitContainer}
                initial="hidden"
                animate="visible"
                className="Hero-AvatarContainer flex">
                <motion.div
                    variants={orbitItems}
                    className="Hero-Avatar flex">
                    <img src={AvatarImg} alt="AvatarImg" />
                </motion.div>
                <motion.div
                    variants={orbitItems}
                    className="Hero-AvatarTrail Trail1">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
                <motion.div
                    variants={orbitItems}
                    className="Hero-AvatarTrail Trail2">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
                <motion.div
                    variants={orbitItems}
                    className="Hero-AvatarTrail Trail3">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
                <motion.div
                    variants={orbitItems}
                    className="Hero-AvatarTrail Trail4">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
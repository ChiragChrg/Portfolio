import "./Hero.css"
import { motion } from "framer-motion"

import { AvatarImg, GithubIcon, GoogleIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "../../assets/index"
import { OrbitContainer, OrbitItems, TextContainer, TextItems } from "../../utils/Variants"

const Hero = () => {
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
                        <img src={GithubIcon} alt="GithubIcon" width={30} height={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/chiragchrg/" title="LinkedIn" target="_blank" rel="noreferrer">
                        <img src={LinkedinIcon} alt="LinkedinIcon" width={30} height={30} />
                    </a>
                    <a href="https://twitter.com/ChrgChirag" title="Twitter" target="_blank" rel="noreferrer">
                        <img src={TwitterIcon} alt="TwitterIcon" width={30} height={30} />
                    </a>
                    <a href="https://www.instagram.com/chiragchrg/" title="Instagram" target="_blank" rel="noreferrer">
                        <img src={InstagramIcon} alt="InstagramIcon" width={30} height={30} />
                    </a>
                    <a href="https://www.google.com/search?q=%22chiragchrg%22" title="Google Search" target="_blank" rel="noreferrer">
                        <img src={GoogleIcon} alt="GoogleIcon" width={30} height={30} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                variants={OrbitContainer}
                initial="hidden"
                animate="visible"
                className="Hero-AvatarContainer flex">
                <motion.div
                    variants={OrbitItems}
                    className="Hero-Avatar flex">
                    <img src={AvatarImg} alt="ChiragChrg" width="100%" height="100%" />
                </motion.div>
                <motion.div
                    variants={OrbitItems}
                    className="Hero-AvatarTrail Trail1">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
                <motion.div
                    variants={OrbitItems}
                    className="Hero-AvatarTrail Trail2">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
                <motion.div
                    variants={OrbitItems}
                    className="Hero-AvatarTrail Trail3">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
                <motion.div
                    variants={OrbitItems}
                    className="Hero-AvatarTrail Trail4">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
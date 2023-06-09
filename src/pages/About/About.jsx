import "./About.css"
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion"
import { StaggerParent, StaggerChild } from "../../utils/Variants";
import FadeUp from "../../utils/FadeUp";
import { AvatarImg } from "../../assets";

const About = () => {
    const [isFadeDone, setIsFadeDone] = useState(false)
    const StaggerControl = useAnimation()

    useEffect(() => {
        if (isFadeDone) {
            StaggerControl.start("animate")
        }
    }, [isFadeDone])

    return (
        <section id="about" className="About-Main">
            <FadeUp width="100%">
                <h1 className="Title-Tag Opening flex">
                    <span>{"<"}</span>
                    <p>About Me</p>
                    <span>{">"}</span>
                </h1>
            </FadeUp>

            <FadeUp className="About-Content flex" setIsFadeDone={setIsFadeDone}>
                <img src={AvatarImg} alt="AvatarImg" className="About-Image" width="300px" />

                <motion.div
                    variants={StaggerParent}
                    initial="init"
                    animate={StaggerControl}
                    className="About-Info flex col gap">
                    <motion.p variants={StaggerChild} className="fsMid">Hey there! 👋🏻</motion.p>
                    <motion.p variants={StaggerChild}>I'm Chirag, a full stack web developer with a strong passion for crafting digital realms that captivate and inspire.</motion.p>
                    <motion.p variants={StaggerChild}>I specialize in creating dynamic and interactive UI/UX experience. I stay up-to-date with the latest tools and techniques. I've worked on a wide range of projects, from personal websites to large-scale applications, sharpening my problem-solving skills and fostering creativity.</motion.p>
                    <motion.p variants={StaggerChild}>If you're seeking a dedicated and passionate web developer, I'm eager to collaborate with you. Let's bring your ideas to life!</motion.p>
                </motion.div>
            </FadeUp>

            <FadeUp width="100%">
                <h4 className="Title-Tag Closing flex">
                    <span>{"</"}</span>
                    <p>About Me</p>
                    <span>{">"}</span>
                </h4>
            </FadeUp>
        </section>
    )
}

export default About
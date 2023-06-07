import "./About.css"
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"
import { AboutVariant, AboutTitle, StaggerParent, StaggerChild } from "../../utils/Variants";
import { AboutDev, AvatarImg } from "../../assets";

const About = () => {
    const AboutRef = useRef(null);
    const isInView = useInView(AboutRef, { once: true })
    const AnimControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            AnimControls.start("animate")
        }
    }, [isInView])

    return (
        <section id="about" className="About-Main" ref={AboutRef}>
            {/* <div className="About-Container" ref={AboutRef}> */}
            <motion.h1
                variants={AboutTitle}
                initial="init"
                animate={AnimControls}
                className="About-Title flex"><span>About Me.</span></motion.h1>

            <motion.div
                variants={AboutVariant}
                initial="init"
                animate={AnimControls}
                className="About-Content flex">

                <motion.img src={AvatarImg} alt="AvatarImg" className="About-Image" width="300px" />

                <motion.div variants={StaggerParent} className="About-Info flex col gap">
                    <motion.p variants={StaggerChild} className="fsMid">Hey there! 👋🏻</motion.p>
                    <motion.p variants={StaggerChild}>I'm Chirag, a full stack web developer with a strong passion for building exciting projects. Ever since my 11th grade, I've been captivated by web development and have honed my skills in HTML, CSS, JavaScript, React.js, Node.js, Vite.js, MongoDB, and more.</motion.p>
                    <motion.p variants={StaggerChild}>I specialize in creating dynamic and interactive user interfaces. I stay up-to-date with the latest tools and techniques. I've worked on a wide range of projects, from personal websites to large-scale applications, sharpening my problem-solving skills and fostering creativity.</motion.p>
                    <motion.p variants={StaggerChild}>If you're seeking a dedicated and passionate web developer, I'm eager to collaborate with you. Let's bring your ideas to life!</motion.p>
                </motion.div>
            </motion.div>
            {/* </div> */}
        </section>
    )
}

export default About
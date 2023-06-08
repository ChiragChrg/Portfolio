import "./About.css"
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"
import { AboutVariant, TitleTagOpen, TitleTagClose, StaggerParent, StaggerChild, SkillParent } from "../../utils/Variants";
import FadeUp from "../../utils/FadeUp";
import { AvatarImg } from "../../assets";

const About = () => {
    const NestEleControl = useAnimation()

    return (
        <section id="about" className="About-Main">
            <FadeUp width="100%">
                <h1 className="Title-Tag Opening flex">
                    <span>{"<"}</span>
                    <p>About Me</p>
                    <span>{">"}</span>
                </h1>
            </FadeUp>

            <FadeUp className="About-Content flex">
                <img src={AvatarImg} alt="AvatarImg" className="About-Image" width="300px" />

                <div className="About-Info flex col gap">
                    <p className="fsMid">Hey there! 👋🏻</p>
                    <p>I'm Chirag, a full stack web developer with a strong passion for crafting digital realms that captivate and inspire.</p>
                    <p>I specialize in creating dynamic and interactive UI/UX experience. I stay up-to-date with the latest tools and techniques. I've worked on a wide range of projects, from personal websites to large-scale applications, sharpening my problem-solving skills and fostering creativity.</p>
                    <p>If you're seeking a dedicated and passionate web developer, I'm eager to collaborate with you. Let's bring your ideas to life!</p>
                </div>
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
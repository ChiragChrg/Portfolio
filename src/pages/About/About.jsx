import "./About.css"
import FadeUp from "../../utils/FadeUp";
import { AvatarImg } from "../../assets";

const About = () => {
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
                <img src={AvatarImg} alt="ChiragChrg" className="About-Image" width="300px" height="100%" />

                <div className="About-Info flex col gap">
                    <FadeUp className="fsH2">Hey there! 👋🏻</FadeUp>
                    <FadeUp >I'm Chirag, a full stack web developer with a strong passion for crafting digital realms that captivate and inspire.</FadeUp>
                    <FadeUp >I specialize in creating dynamic and interactive UI/UX experience. I stay up-to-date with the latest tools and techniques. I've worked on a wide range of projects, from personal websites to large-scale applications, sharpening my problem-solving skills and fostering creativity.</FadeUp>
                    <FadeUp >If you're seeking a dedicated and passionate web developer, I'm eager to collaborate with you. Let's bring your ideas to life!</FadeUp>
                </div>
            </FadeUp>

            <FadeUp width="100%">
                <span className="Title-Tag Closing flex">
                    <span>{"</"}</span>
                    <p>About Me</p>
                    <span>{">"}</span>
                </span>
            </FadeUp>
        </section>
    )
}

export default About
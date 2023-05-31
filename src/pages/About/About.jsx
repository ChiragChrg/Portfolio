import "./About.css"
import { motion } from "framer-motion"

const About = () => {
    return (
        <section id="about" className="About-Main">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="About-Content flex">
                <h1>ABOUT</h1>
            </motion.div>
        </section>
    )
}

export default About
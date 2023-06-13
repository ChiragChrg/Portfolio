import "./Home.css"
import { useState, useEffect } from "react"

import Header from "../../Components/Header/Header"
import MobileNav from "../../Components/MobileNav/MobileNav"
import Hero from '../../Components/Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from "../Footer/Footer"
import { useContextData } from "../../Hooks/useContextData"
import ProjectDetails from "../Projects/ProjectDetails/ProjectDetails"

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { selectedProject } = useContextData()

    useEffect(() => {
        // Hide Header Comp if Mobile view
        window.innerWidth <= 750 ? setIsMobile(true) : setIsMobile(false)
    }, [])

    return (
        <main className="Home-Main">
            {isMobile ?
                <MobileNav />
                :
                <Header />
            }

            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />

            {selectedProject && <ProjectDetails />}
        </main>
    )
}

export default Home
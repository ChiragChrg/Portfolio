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

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Hide Header if Mobile view
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
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}

export default Home
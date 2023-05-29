import React from 'react'
import "./Home.css"
import Header from "../../Components/Header/Header"
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Hero from '../../Components/Hero/Hero'
import Footer from "../Footer/Footer"
import Skills from '../Skills/Skills'

const Home = () => {
    return (
        <main className="Home-Main">
            <Header />

            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />

            {/* Mobile Background Blur when Nav is Open */}
            {/* <div className="Nav-blur"></div> */}
        </main>
    )
}

export default Home
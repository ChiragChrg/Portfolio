import React from 'react'
import "./Home.css"
import Header from "../../Components/Header/Header"
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Hero from '../../Components/Hero/Hero'

const Home = () => {
    return (
        <div className="Home-Main">
            <Header />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
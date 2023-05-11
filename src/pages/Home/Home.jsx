import React from 'react'
import "./Home.css"
import Header from "../../Components/Header/Header"
import About from '../About/About'
import Intro from '../../Components/Intro/Intro'

const Home = () => {
    return (
        <div className="Home-Main">
            <Header />
            <Intro />
            <About />
        </div>
    )
}

export default Home
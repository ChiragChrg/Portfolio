import "./Header.css"
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
    const [openNav, setOpenNav] = useState(false)

    return (
        <header className="Header-Main">
            <div className="Header-Container flex">
                <div className="Header-Logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <h1 className="gradientText">Portfolio.</h1>
                    {/* <h1 className="gradientText">ChiragChrg.</h1> */}
                </div>

                {/* <div className={openNav ? "Header-Ham isOpen" : "Header-Ham isClosed"} onClick={() => setOpenNav(prev => !prev)}>
                    <span className="HamLine line1"></span>
                    <span className="HamLine line2"></span>
                    <span className="HamLine line3"></span>
                </div> */}
                <svg viewBox="0 0 100 100" width="80" className={openNav ? "Header-Ham isOpen" : "Header-Ham"} onClick={() => setOpenNav(prev => !prev)}>
                    <path
                        className="line top"
                        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                    <path
                        className="line middle"
                        d="m 30,50 h 40" />
                    <path
                        className="line bottom"
                        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                </svg>

                <nav className="Header-Nav flex">
                    <Link
                        href="#about"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-64}
                        duration={500}
                        to="about">About</Link>

                    <Link
                        href="#skills"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-64}
                        duration={500}
                        to="skills">Skills</Link>

                    <Link
                        href="#projects"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-64}
                        duration={500}
                        to="projects">Projects</Link>

                    <Link
                        href="#contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-64}
                        duration={500}
                        to="contact">Contact</Link>
                </nav>

                <div className="Header-ActionBtn flex">
                    <div>Resume</div>
                </div>
            </div>
        </header>
    )
}

export default Header
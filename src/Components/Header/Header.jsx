import "./Header.css"
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion, useCycle } from "framer-motion";

const Header = () => {
    const [openNav, setOpenNav] = useCycle(false, true);
    const [isMobile, setIsMobile] = useState(false);
    const NavRef = useRef();

    useEffect(() => {
        window.innerWidth <= 750 ? setIsMobile(true) : setIsMobile(false)
    })

    const Sidebar = {
        open: {
            width: "100%"
        },
        closed: {
            width: "0",
        }
    };

    return (
        <header className="Header-Main">
            <div className="Header-Container flex">
                <div
                    className="Header-Logo"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <h1 className="gradientText">Portfolio.</h1>
                    {/* <h1 className="gradientText">ChiragChrg.</h1> */}
                </div>

                <svg viewBox="20 20 60 60" width="45"
                    className={openNav ? "Header-Ham isOpen" : "Header-Ham"}
                    onClick={() => setOpenNav(prev => !prev)}>
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

                <motion.nav
                    variants={isMobile && Sidebar}
                    initial={"closed"}
                    animate={openNav ? "open" : "closed"}
                    ref={NavRef}
                    className="Header-Nav flex">

                    {/* <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a> */}

                    {/* <div
                        className="Mobile-HomeNav"
                        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setOpenNav(false) }}>
                        Home
                    </div> */}

                    <Link
                        href="#about"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        onClick={() => setOpenNav(false)}
                        to="about">About</Link>

                    <Link
                        href="#skills"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        onClick={() => setOpenNav(false)}
                        to="skills">Skills</Link>

                    <Link
                        href="#projects"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        onClick={() => setOpenNav(false)}
                        to="projects">Projects</Link>

                    <Link
                        href="#contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        onClick={() => setOpenNav(false)}
                        to="contact">Contact</Link>

                    <div className="MobileAction-Container flex">
                        <div className="Header-ActionBtn flex"
                            onClick={() => setOpenNav(false)}>
                            <div>Resume</div>
                        </div>
                    </div>
                </motion.nav>

                <div className="Header-ActionBtn hideOnMobile flex"
                    onClick={() => setOpenNav(false)}>
                    <div>Resume</div>
                </div>
            </div>
        </header>
    )
}

export default Header
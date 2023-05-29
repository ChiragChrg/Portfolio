import "./Header.css"
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion, useCycle } from "framer-motion";

const Header = () => {
    const [openNav, setOpenNav] = useCycle(false, true);
    const [isMobile, setIsMobile] = useState(false);
    const [navHeight, setNavHeight] = useState();
    const NavRef = useRef();

    useEffect(() => {
        window.innerWidth <= 750 ? setIsMobile(true) : setIsMobile(false)
        setNavHeight(NavRef?.current?.offsetHeight)
        // console.log(NavRef?.current?.offsetHeight)
    })

    const Sidebar = {
        open: (navHeight = 1000) => ({
            clipPath: `circle(${navHeight * 2 + 200}px at 40px 90%)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            clipPath: "circle(30px at 40px 90%)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    return (
        <header className="Header-Main">
            <div className="Header-Container flex">
                <div className="Header-Logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <h1 className="gradientText">Portfolio.</h1>
                    {/* <h1 className="gradientText">ChiragChrg.</h1> */}
                </div>

                <svg viewBox="20 20 60 60" width="45" className={openNav ? "Header-Ham isOpen" : "Header-Ham"} onClick={() => setOpenNav(prev => !prev)}>
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
                    initial={false}
                    animate={openNav ? "open" : "close"}
                    custom={navHeight}
                    ref={NavRef}
                    className="Header-Nav flex">

                    <motion.div variants={Sidebar} className="NavBg flex"></motion.div>

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

                    <div className="Action-Container flex">
                        <div className="Header-ActionBtn flex">
                            <div>Resume</div>
                        </div>
                    </div>
                </motion.nav>

                <div className="Header-ActionBtn hideOnMobile flex">
                    <div>Resume</div>
                </div>
            </div>
        </header>
    )
}

export default Header
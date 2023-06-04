import "./Header.css"
import { useState, useEffect, } from "react";
import { Link } from "react-scroll";
// import { motion } from "framer-motion";

const Header = () => {
    // const [showHeader, setShowHeader] = useState(true);
    // const [prevScrollY, setPrevScrollY] = useState(false);

    useEffect(() => {
        // const controlNavbar = () => {
        //     if (window.scrollY > prevScrollY) {
        //         setShowHeader(false);
        //     } else {
        //         setShowHeader(true);
        //     }

        //     setPrevScrollY(window.scrollY);
        // };

        if (typeof window !== 'undefined') {
            // window.addEventListener('scroll', controlNavbar);

            // return () => {
            //     window.removeEventListener('scroll', controlNavbar);
            // };
        }
    }, [])

    return (
        // <header className={showHeader ? "Header-Main" : "Header-Main HideHeader"}>
        <header className="Header-Main">
            <div className="Header-Container flex">
                <div
                    className="Header-Logo"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <h1 className="gradientText">Portfolio.</h1>
                    {/* <h1 className="gradientText">ChiragChrg.</h1> */}
                </div>

                <nav className="Header-Nav flex">
                    <Link
                        href="#about"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        // offset={isMobile ? -55 : -64}
                        duration={500}
                        to="about">About</Link>

                    <Link
                        href="#skills"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        // offset={isMobile ? -55 : -64}
                        duration={500}
                        to="skills">Skills</Link>

                    <Link
                        href="#projects"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        // offset={isMobile ? -55 : -64}
                        duration={500}
                        to="projects">Projects</Link>

                    <Link
                        href="#contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        // offset={isMobile ? -55 : -64}
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
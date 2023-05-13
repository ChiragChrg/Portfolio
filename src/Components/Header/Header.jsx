import "./Header.css"
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    return (
        <div className="Header-Main">
            <div className="Header-Container flex">
                <div className="Header-Logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <h1 className="gradientText">Portfolio.</h1>
                </div>

                <nav>
                    <ul>
                        <li><Link
                            href="#about"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            to="about">About</Link>
                        </li>
                        <li><Link
                            href="#projects"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            to="projects">Projects</Link>
                        </li>
                        <li><Link
                            href="#contact"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            to="contact">Contact</Link>
                        </li>
                        <li><Link
                            href="#resume"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            to="resume">Resume</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
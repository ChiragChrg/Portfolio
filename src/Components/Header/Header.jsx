import "./Header.css"
import { Link } from "react-scroll";

const Header = () => {

    return (
        <header className="Header-Main">
            <div className="Header-Container flex">
                <div
                    className="Header-Logo"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <h1 className="gradientText">Portfolio.</h1>
                </div>

                <nav className="Header-Nav flex">
                    <Link
                        href="#about"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        to="about">About</Link>

                    {/* <Link
                        href="#skills"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        to="skills">Skills</Link> */}

                    <Link
                        href="#projects"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}
                        to="projects">Projects</Link>

                    <Link
                        href="#contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-40}
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
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

                    <Link
                        href="#skills"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        to="skills">Skills</Link>

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
                        offset={-20}
                        duration={500}
                        to="contact">Contact</Link>
                </nav>

                <a className="Header-ActionBtn flex" href="https://raw.githubusercontent.com/ChiragChrg/ChiragChrg.github.io/main/Chirag%20Resume%20Dummy.pdf" download>
                    <div className="flex gap05">
                        <p>Resume</p>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default Header
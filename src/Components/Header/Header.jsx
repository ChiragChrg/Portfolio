import { useState } from "react"
import "./Header.css"

const Header = () => {
    const [isActive, setIsActive] = useState(null)

    const HandleLinkClick = (linkID) => {
        setIsActive(linkID)
    }

    return (
        <header className="Header-Main">
            <div className="Header-Container flex">
                <div
                    className="Header-Logo"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <h1 className="gradientText">Portfolio.</h1>
                </div>

                <nav className="Header-Nav flex">
                    <a href="#about"
                        onClick={() => HandleLinkClick("about")}
                        className={isActive === "about" ? "active" : ""}>About</a>
                    <a href="#skills"
                        onClick={() => HandleLinkClick("skills")}
                        className={isActive === "skills" ? "active" : ""}>Skills</a>
                    <a href="#projects"
                        onClick={() => HandleLinkClick("projects")}
                        className={isActive === "projects" ? "active" : ""}>Projects</a>
                    <a href="#contact"
                        onClick={() => HandleLinkClick("contact")}
                        className={isActive === "contact" ? "active" : ""}>Contact</a>
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
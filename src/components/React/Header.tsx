import React, { useEffect, useState, useRef } from "react"
import "../../styles/header.css"
import { Download } from "lucide-react"

const Header = () => {
    const [isActive, setIsActive] = useState<string>("");
    const headerRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const sectionsList = {
                '#home': document.getElementById('home'),
                '#about': document.getElementById('about'),
                '#skills': document.getElementById('skills'),
                '#projects': document.getElementById('projects'),
                '#contact': document.getElementById('contact'),
            };

            for (const [section, element] of Object.entries(sectionsList)) {
                if (!element) return;

                const rect = element.getBoundingClientRect();
                if (headerRef.current && rect.top <= headerRef.current.offsetHeight && rect.top >= 0) {
                    setIsActive(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); //initial call

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="header" className="hidden lg:block sticky top-0 z-50" ref={headerRef}>
            <div className="flex justify-between items-center w-full px-6 py-2 bg-headerGradient backdrop-blur-[2px]">
                <a
                    href="#home"
                    className="font-satisfy font-bold text-[2em]">
                    <h1 className="gradientText w-fit">Portfolio.</h1>
                </a>

                <nav className="Header_Nav flex gap-6">
                    <a href="#about" className={isActive === "#about" ? "active" : ""}>ABOUT</a>
                    <a href="#skills" className={isActive === "#skills" ? "active" : ""}>SKILLS</a>
                    <a href="#projects" className={isActive === "#projects" ? "active" : ""}>PROJECTS</a>
                    <a href="#contact" className={isActive === "#contact" ? "active" : ""}>CONTACT</a>
                </nav>

                <a className="Header_ActionBtn" href="https://raw.githubusercontent.com/ChiragChrg/ChiragChrg.github.io/main/Chirag%20Resume%20Dummy.pdf" download>
                    <div className="flex_center gap-2">
                        <p>Resume</p>
                        <Download size={18} />
                    </div>
                </a>
            </div>
        </header>
    )
}

export default Header
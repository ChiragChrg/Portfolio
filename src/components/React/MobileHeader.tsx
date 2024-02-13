import { useEffect, useRef, useState, useMemo } from 'preact/hooks'
import { motion } from 'framer-motion'
import { Download } from "lucide-react"

type DimensionType = {
    width: number,
    height: number
}
const MobileHeader = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<string>("")
    const [dimensions, setDimensions] = useState<DimensionType>({ width: 0, height: 0 })
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

    useEffect(() => {
        if (!window.innerWidth || !window.innerHeight) return

        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }, [])


    const MenuVariant = useMemo(() => ({
        showMenu: {
            clipPath: `circle(${(dimensions.height * 2) + 200}px at 40px 40px)`,
            backgroundColor: "var(--purpleLite)",
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2,
                staggerChildren: 0.07,
                delayChildren: 0.5
            }
        },
        hideMenu: {
            clipPath: `circle(30px at ${dimensions.width + 30}px -30px)`,
            backgroundColor: "var(--base)",
            transition: {
                delay: 0.6,
                type: "spring",
                stiffness: 250,
                damping: 40,
                staggerChildren: 0.07,
                staggerDirection: -1
            },
        }
    }), [dimensions])

    const LinkVariant = {
        showMenu: {
            y: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 0.3,
            }
        },
        hideMenu: {
            y: 100,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 0.3,
            }
        }
    }

    return (
        <header className="lg:hidden w-full sticky top-0 z-50 bg-headerGradient backdrop-blur-[2px]" ref={headerRef}>
            <div className="flex justify-between items-center py-2 px-4">
                <a
                    href="#home"
                    className="font-satisfy font-bold text-[2em]">
                    <h1 className="gradientText w-fit">Portfolio.</h1>
                </a>

                <svg viewBox="20 20 60 60" width="45"
                    className={`${openNav && "isOpen"} MobileNav_Ham flex justify-center items-end flex-col gap-2 z-[70] cursor-pointer`}
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
            </div>

            <motion.nav
                variants={MenuVariant}
                initial="hideMenu"
                animate={openNav ? "showMenu" : "hideMenu"}
                className="w-full h-dvh flex_center flex-col fixed top-0 right-0 gap-8 z-[60]">
                <motion.div
                    variants={LinkVariant}
                    className="MobileHeader_Nav flex_center">
                    <a
                        href="#about"
                        className={isActive === "#about" ? "active" : ""}
                        onClick={() => setOpenNav(false)}>About</a>
                </motion.div>

                <motion.div
                    variants={LinkVariant}
                    className="MobileHeader_Nav flex_center">
                    <a
                        href="#skills"
                        className={isActive === "#skills" ? "active" : ""}
                        onClick={() => setOpenNav(false)}>Skills</a>
                </motion.div>

                <motion.div
                    variants={LinkVariant}
                    className="MobileHeader_Nav flex_center">
                    <a
                        href="#projects"
                        className={isActive === "#projects" ? "active" : ""}
                        onClick={() => setOpenNav(false)}>Projects</a>
                </motion.div>

                <motion.div
                    variants={LinkVariant}
                    className="MobileHeader_Nav flex_center">
                    <a
                        href="#contact"
                        className={isActive === "#contact" ? "active" : ""}
                        onClick={() => setOpenNav(false)}>Contact</a>
                </motion.div>

                <motion.div
                    variants={LinkVariant}
                    className="MobileHeader_Nav flex_center">
                    <a className="MobileHeader_ActionBtn flex_center"
                        onClick={() => setOpenNav(false)} href="https://raw.githubusercontent.com/ChiragChrg/ChiragChrg.github.io/main/Chirag%20Resume%20Dummy.pdf" download>
                        <div className="flex_center gap-4">
                            <p>Resume</p>
                            <Download />
                        </div>
                    </a>
                </motion.div>
            </motion.nav>
        </header>
    )
}

export default MobileHeader
import "./MobileNav.css"
import { motion, useCycle } from 'framer-motion'

const MobileNav = () => {
    const [openNav, setOpenNav] = useCycle(false, true);
    const devWidth = window.innerWidth;
    const devHeight = window.innerHeight;

    const MenuVariant = {
        showMenu: {
            clipPath: `circle(${devHeight * 2 + 200}px at 40px 40px)`,
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
            clipPath: `circle(30px at ${devWidth + 30}px -30px)`,
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
    }

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
        <header className="MobileNav-Main">
            <div className="MobileNav-Header flex">
                <div
                    className="MobileNav-Logo"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <h1 className="gradientText">Portfolio.</h1>
                    {/* <h1 className="gradientText">ChiragChrg.</h1> */}
                </div>

                <svg viewBox="20 20 60 60" width="45"
                    className={openNav ? "MobileNav-Ham isOpen" : "MobileNav-Ham"}
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
                className="MobileNav-Nav flex col">

                <motion.div
                    variants={LinkVariant}
                    className="MobileNav-LinkHolder flex">
                    <a href="#about" onClick={() => setOpenNav(false)}>About</a>
                </motion.div>

                <motion.div
                    variants={LinkVariant}
                    className="MobileNav-LinkHolder flex">
                    <a href="#skills" onClick={() => setOpenNav(false)}>Skills</a>
                </motion.div>

                <motion.div
                    variants={LinkVariant}
                    className="MobileNav-LinkHolder flex">
                    <a href="#projects" onClick={() => setOpenNav(false)}>Projects</a>
                </motion.div>

                <motion.div
                    variants={LinkVariant}
                    className="MobileNav-LinkHolder flex">
                    <a href="#contact" onClick={() => setOpenNav(false)}>Contact</a>
                </motion.div>

                <motion.div
                    variants={LinkVariant}
                    className="MobileNav-LinkHolder flex">
                    <a className="MobileNav-ActionBtn flex"
                        onClick={() => setOpenNav(false)} href="https://raw.githubusercontent.com/ChiragChrg/ChiragChrg.github.io/main/Chirag%20Resume%20Dummy.pdf" download>
                        <div className="flex gap">
                            <p>Resume</p>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        </div>
                    </a>
                </motion.div>
            </motion.nav>
        </header>
    )
}

export default MobileNav
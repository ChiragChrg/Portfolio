import "./Skills.css"
import { FadeUpVariant, } from "../../utils/Variants"
import FadeUp from "../../utils/FadeUp"
import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, ViteIcon, TsIcon, NextIcon,
    PhpIcon, MysqlIcon, MongoIcon, JavaIcon, GdriveIcon, SocketIoIcon, DatabaseIcon,
    CppIcon, FigmaIcon, GitIcon, NpmIcon, VsCodeIcon, ExpressIcon, PythonIcon,
    NetlifyIcon, VercelIcon, TailwindIcon, ReduxIcon, NextAuthIcon, ZustandIcon, AstroIcon, NanostoresIcon
} from "../../assets/Icons"
import { Chevron, GithubIcon } from "../../assets"
import { useState } from "react"

const Skills = ({ isMobile }) => {
    const [showFrontend, setShowFrontend] = useState(false)
    const [showBackend, setShowBackend] = useState(false)
    const [showProgramming, setShowProgramming] = useState(false)
    const [showTools, setShowTools] = useState(false)
    const maxIconLength = isMobile ? 9 : 10

    const FrontendStack = [
        { name: "HTML", icon: HtmlIcon, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", icon: CssIcon, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", icon: JsIcon, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "TypeScript", icon: TsIcon, link: "https://www.typescriptlang.org/" },
        { name: "React.js", icon: ReactIcon, link: "https://react.dev/" },
        { name: "Next.js", icon: NextIcon, link: "https://nextjs.org/" },
        { name: "Astro", icon: AstroIcon, link: "https://astro.build/" },
        { name: "Tailwind", icon: TailwindIcon, link: "https://tailwindcss.com/" },
        { name: "Redux", icon: ReduxIcon, link: "https://redux.js.org/" },
        { name: "Zustand", icon: ZustandIcon, link: "https://zustand-demo.pmnd.rs/" },
        { name: "Nanostores", icon: NanostoresIcon, link: "https://github.com/nanostores/nanostores" },
    ]
    const BackendStack = [
        { name: "Node.js", icon: NodeIcon, link: "https://nodejs.org/" },
        { name: "Express.js", icon: ExpressIcon, link: "https://expressjs.com/" },
        { name: "MongoDB", icon: MongoIcon, link: "https://www.mongodb.com/" },
        { name: "MySQL", icon: MysqlIcon, link: "https://www.mysql.com/" },
        { name: "PHP", icon: PhpIcon, link: "https://www.php.net/" },
        { name: "REST API", icon: DatabaseIcon, link: "https://developer.mozilla.org/en-US/docs/Glossary/REST" },
        { name: "Drive API", icon: GdriveIcon, link: "https://developers.google.com/drive" },
        { name: "NextAuth.js", icon: NextAuthIcon, link: "https://next-auth.js.org/" },
    ]

    const ProgrammingStack = [
        { name: "JavaScript", icon: JsIcon, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "Python", icon: PythonIcon, link: "https://www.python.org/" },
        { name: "C++", icon: CppIcon, link: "https://isocpp.org/" },
        { name: "Java", icon: JavaIcon, link: "https://www.oracle.com/java/" },
    ]

    const ToolsStack = [
        { name: "Vite.js", icon: ViteIcon, link: "https://vitejs.dev/" },
        { name: "Socket.io", icon: SocketIoIcon, link: "https://socket.io/" },
        { name: "NPM", icon: NpmIcon, link: "https://www.npmjs.com/" },
        { name: "Git", icon: GitIcon, link: "https://git-scm.com/" },
        { name: "GitHub", icon: GithubIcon, link: "https://github.com/" },
        { name: "Netlify", icon: NetlifyIcon, link: "https://www.netlify.com/" },
        { name: "Vercel", icon: VercelIcon, link: "https://vercel.com/" },
        { name: "VS Code", icon: VsCodeIcon, link: "https://code.visualstudio.com/" },
        { name: "Figma", icon: FigmaIcon, link: "https://www.figma.com/" },
    ]

    return (
        <section id="skills" className="Skills-Main flex col">
            <FadeUp width="100%">
                <h1 className="Title-Tag Opening flex">
                    <span>{"<"}</span>
                    <p>Tech Stack</p>
                    <span>{"/>"}</span>
                </h1>
            </FadeUp>

            <div className="Skills-Container flex gap">
                <FadeUp width="100%" height="100%" className="Skills-Holder flex col gap">
                    <h2 className="Title-Tag Closing flex">
                        <p>Front-End</p>
                        <span>{"()"}</span>
                    </h2>
                    <div className="Skills-IconSet">
                        {FrontendStack.length <= maxIconLength ?
                            FrontendStack.map((obj, i) => {
                                // While stack.length <= maxIconLength, show all icons
                                return <FadeUp key={i} >
                                    <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                                        <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                                        <span>{obj.name}</span>
                                    </a>
                                </FadeUp>
                            })
                            :
                            <>
                                {!showFrontend ?
                                    FrontendStack.map((obj, i) => {
                                        // when stack.length > maxIconLength, 
                                        // show only limited icons and at end add "Show More" button
                                        if (i < maxIconLength - 1)
                                            return <FadeUp key={i} >
                                                <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                                                    <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                                                    <span>{obj.name}</span>
                                                </a>
                                            </FadeUp>
                                    })
                                    : FrontendStack.map((obj, i) => {
                                        // show all icons when "Show More" button is clicked
                                        return <FadeUp key={i} >
                                            <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                                                <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                                                <span>{obj.name}</span>
                                            </a>
                                        </FadeUp>
                                    })
                                }

                                <FadeUp className="Skills-MoreBtn" width="100%">
                                    <button className="Skills-Icon flex col gap05" onClick={() => setShowFrontend(prev => !prev)}>
                                        <img style={{ rotate: showFrontend ? "180deg" : "0deg" }} variants={FadeUpVariant} src={Chevron} alt="Chevron" width={35} height={35} />
                                        <span>{showFrontend ? "Show Less" : "Show More"}</span>
                                    </button>
                                </FadeUp>
                            </>
                        }
                    </div>
                </FadeUp>

                <FadeUp width="100%" height="100%" className="Skills-Holder flex col gap">
                    <h2 className="Title-Tag Closing flex">
                        <p>Back-End</p>
                        <span>{"()"}</span>
                    </h2>
                    <div className="Skills-IconSet">
                        {BackendStack.length <= maxIconLength ?
                            BackendStack.map((obj, i) => {
                                // While stack.length <= maxIconLength, show all icons
                                return <FadeUp key={i} >
                                    <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                                        <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                                        <span>{obj.name}</span>
                                    </a>
                                </FadeUp>
                            })
                            :
                            <>
                                {!showBackend ?
                                    BackendStack.map((obj, i) => {
                                        // when stack.length > maxIconLength, 
                                        // show only limited icons and at end add "Show More" button
                                        if (i < maxIconLength - 1)
                                            return <FadeUp key={i} >
                                                <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                                                    <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                                                    <span>{obj.name}</span>
                                                </a>
                                            </FadeUp>
                                    })
                                    : BackendStack.map((obj, i) => {
                                        // show all icons when "Show More" button is clicked
                                        return <FadeUp key={i} >
                                            <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                                                <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                                                <span>{obj.name}</span>
                                            </a>
                                        </FadeUp>
                                    })
                                }

                                <FadeUp className="Skills-MoreBtn" width="100%">
                                    <button className="Skills-Icon flex col gap05" onClick={() => setShowBackend(prev => !prev)}>
                                        <img style={{ rotate: showBackend ? "180deg" : "0deg" }} variants={FadeUpVariant} src={Chevron} alt="Chevron" width={35} height={35} />
                                        <span>{showBackend ? "Show Less" : "Show More"}</span>
                                    </button>
                                </FadeUp>
                            </>
                        }
                    </div>
                </FadeUp>
            </div>

            <div className="Skills-Container flex gap">
                <FadeUp width="100%" height="100%" className="Skills-Holder flex col gap">
                    <h2 className="Title-Tag Closing flex">
                        <p>Programming</p>
                        <span>{"()"}</span>
                    </h2>
                    <div className="Skills-IconSet">
                        {ProgrammingStack.length <= maxIconLength ?
                            ProgrammingStack.map((obj, i) => {
                                // While stack.length <= maxIconLength, show all icons
                                return <FadeUp key={i} >
                                    <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                                        <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                                        <span>{obj.name}</span>
                                    </a>
                                </FadeUp>
                            })
                            :
                            <>
                                {!showProgramming ?
                                    ProgrammingStack.map((obj, i) => {
                                        // when stack.length > maxIconLength, 
                                        // show only limited icons and at end add "Show More" button
                                        if (i < maxIconLength - 1)
                                            return <FadeUp key={i} >
                                                <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                                                    <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                                                    <span>{obj.name}</span>
                                                </a>
                                            </FadeUp>
                                    })
                                    : ProgrammingStack.map((obj, i) => {
                                        // show all icons when "Show More" button is clicked
                                        return <FadeUp key={i} >
                                            <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                                                <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                                                <span>{obj.name}</span>
                                            </a>
                                        </FadeUp>
                                    })
                                }

                                <FadeUp className="Skills-MoreBtn" width="100%">
                                    <button className="Skills-Icon flex col gap05" onClick={() => setShowProgramming(prev => !prev)}>
                                        <img style={{ rotate: showProgramming ? "180deg" : "0deg" }} variants={FadeUpVariant} src={Chevron} alt="Chevron" width={35} height={35} />
                                        <span>{showProgramming ? "Show Less" : "Show More"}</span>
                                    </button>
                                </FadeUp>
                            </>
                        }
                    </div>
                </FadeUp>

                <FadeUp width="100%" height="100%" className="Skills-Holder flex col gap">
                    <h2 className="Title-Tag Closing flex">
                        <p>Tech & Tools</p>
                        <span>{"()"}</span>
                    </h2>
                    <div className="Skills-IconSet">
                        {ToolsStack.length <= maxIconLength ?
                            ToolsStack.map((obj, i) => {
                                // While stack.length <= maxIconLength, show all icons
                                return <FadeUp key={i} >
                                    <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                                        <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                                        <span>{obj.name}</span>
                                    </a>
                                </FadeUp>
                            })
                            :
                            <>
                                {!showTools ?
                                    ToolsStack.map((obj, i) => {
                                        // when stack.length > maxIconLength, 
                                        // show only limited icons and at end add "Show More" button
                                        if (i < maxIconLength - 1)
                                            return <FadeUp key={i} >
                                                <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                                                    <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                                                    <span>{obj.name}</span>
                                                </a>
                                            </FadeUp>
                                    })
                                    : ToolsStack.map((obj, i) => {
                                        // show all icons when "Show More" button is clicked
                                        return <FadeUp key={i} >
                                            <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                                                <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                                                <span>{obj.name}</span>
                                            </a>
                                        </FadeUp>
                                    })
                                }

                                <FadeUp className="Skills-MoreBtn" width="100%">
                                    <button className="Skills-Icon flex col gap05" onClick={() => setShowTools(prev => !prev)}>
                                        <img style={{ rotate: showTools ? "180deg" : "0deg" }} variants={FadeUpVariant} src={Chevron} alt="Chevron" width={35} height={35} />
                                        <span>{showTools ? "Show Less" : "Show More"}</span>
                                    </button>
                                </FadeUp>
                            </>
                        }
                    </div>
                </FadeUp>
            </div>

        </section>
    )
}

export default Skills
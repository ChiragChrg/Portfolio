import "./Skills.css"
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import { FadeUpVariant, BucketIcons } from "../../utils/Variants"
import FadeUp from "../../utils/FadeUp"
import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, ViteIcon, TsIcon, NextIcon,
    PhpIcon, MysqlIcon, MongoIcon, JavaIcon, GdriveIcon, SocketIoIcon, DatabaseIcon,
    CppIcon, FigmaIcon, GitIcon, NpmIcon, VsCodeIcon, ExpressIcon, PythonIcon, GithubIcon,
    NetlifyIcon
} from "../../assets"

const Skills = () => {
    const BucketRef = useRef()
    const isInView = useInView(BucketRef, { once: true })
    const BucketControl = useAnimation()

    useEffect(() => {
        if (isInView) {
            BucketControl.start("spill")
        }
    }, [isInView])

    const FrontendStack = [
        { name: "HTML", icon: HtmlIcon },
        { name: "CSS", icon: CssIcon },
        { name: "JavaScript", icon: JsIcon },
        { name: "React.js", icon: ReactIcon },
        { name: "TypeScript", icon: TsIcon },
        { name: "Next.js", icon: NextIcon },
    ]
    const BackendStack = [
        { name: "Node.js", icon: NodeIcon },
        { name: "Express.js", icon: ExpressIcon },
        { name: "MongoDB", icon: MongoIcon },
        { name: "MySQL", icon: MysqlIcon },
        { name: "PHP", icon: PhpIcon },
        { name: "REST API", icon: DatabaseIcon },
        { name: "Drive API", icon: GdriveIcon },
        { name: "Socket.IO", icon: SocketIoIcon },
    ]

    const ProgrammingStack = [
        { name: "JavaScript", icon: JsIcon },
        { name: "Python", icon: PythonIcon },
        { name: "C++", icon: CppIcon },
        { name: "Java", icon: JavaIcon },
    ]

    const ToolsStack = [
        { name: "Vite.js", icon: ViteIcon },
        { name: "NPM", icon: NpmIcon },
        { name: "Git", icon: GitIcon },
        { name: "GitHub", icon: GithubIcon },
        { name: "Netlify", icon: NetlifyIcon },
        { name: "VS Code", icon: VsCodeIcon },
        { name: "Figma", icon: FigmaIcon },
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
                    <h3 className="Title-Tag Closing flex">
                        <p>Front-End</p>
                        <span>{"()"}</span>
                    </h3>
                    <div className="Skills-IconSet">
                        {FrontendStack.map((obj, i) => {
                            return <FadeUp key={i} className="Skills-Icon flex col gap05">
                                <motion.img variants={FadeUpVariant} src={obj.icon} alt={obj.name} width={40} height={40} />
                                <span>{obj.name}</span>
                            </FadeUp>
                        })}
                    </div>
                </FadeUp>

                <FadeUp width="100%" height="100%" className="Skills-Holder flex col gap">
                    <h3 className="Title-Tag Closing flex">
                        <p>Back-End</p>
                        <span>{"()"}</span>
                    </h3>
                    <div className="Skills-IconSet">
                        {BackendStack.map((obj, i) => {
                            return <FadeUp key={i} className="Skills-Icon flex col gap05">
                                <motion.img variants={FadeUpVariant} src={obj.icon} alt={obj.name} width={40} height={40} />
                                <span>{obj.name}</span>
                            </FadeUp>
                        })}
                    </div>
                </FadeUp>
            </div>

            <div className="Skills-Container flex gap">
                <FadeUp width="100%" height="100%" className="Skills-Holder flex col gap">
                    <h3 className="Title-Tag Closing flex">
                        <p>Programming</p>
                        <span>{"()"}</span>
                    </h3>
                    <div className="Skills-IconSet">
                        {ProgrammingStack.map((obj, i) => {
                            return <FadeUp key={i} className="Skills-Icon flex col gap05">
                                <motion.img variants={FadeUpVariant} src={obj.icon} alt={obj.name} width={40} height={40} />
                                <span>{obj.name}</span>
                            </FadeUp>
                        })}
                    </div>
                </FadeUp>

                <FadeUp width="100%" height="100%" className="Skills-Holder flex col gap">
                    <h3 className="Title-Tag Closing flex">
                        <p>Tech & Tools</p>
                        <span>{"()"}</span>
                    </h3>
                    <div className="Skills-IconSet">
                        {ToolsStack.map((obj, i) => {
                            return <FadeUp key={i} className="Skills-Icon flex col gap05">
                                <motion.img variants={FadeUpVariant} src={obj.icon} alt={obj.name} width={40} height={40} />
                                <span>{obj.name}</span>
                            </FadeUp>
                        })}
                    </div>
                </FadeUp>
            </div>

        </section>
    )
}

export default Skills
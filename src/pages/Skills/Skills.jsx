import "./Skills.css"
import FadeUp from "../../utils/FadeUp"
import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, ViteIcon, TsIcon, NextIcon,
    PhpIcon, MysqlIcon, MongoIcon, JavaIcon, GdriveIcon, SocketIoIcon, DatabaseIcon,
    CppIcon, FigmaIcon, GitIcon, NpmIcon, VsCodeIcon, ExpressIcon, PythonIcon,
    NetlifyIcon, VercelIcon, TailwindIcon, ReduxIcon, NextAuthIcon, ZustandIcon, AstroIcon, NanostoresIcon, FirebaseIcon
} from "../../assets/Icons"
import { GithubIcon } from "../../assets"
import SkillGrid from "../../utils/SkillGrid"

const Skills = () => {

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
        { name: "Firebase", icon: FirebaseIcon, link: "https://firebase.google.com/" },
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
                    <SkillGrid stack={FrontendStack} />
                </FadeUp>

                <FadeUp width="100%" height="100%" className="Skills-Holder flex col gap">
                    <h2 className="Title-Tag Closing flex">
                        <p>Back-End</p>
                        <span>{"()"}</span>
                    </h2>
                    <SkillGrid stack={BackendStack} />
                </FadeUp>
            </div>

            <div className="Skills-Container flex gap">
                <FadeUp width="100%" height="100%" className="Skills-Holder flex col gap">
                    <h2 className="Title-Tag Closing flex">
                        <p>Programming</p>
                        <span>{"()"}</span>
                    </h2>
                    <SkillGrid stack={ProgrammingStack} />
                </FadeUp>

                <FadeUp width="100%" height="100%" className="Skills-Holder flex col gap">
                    <h2 className="Title-Tag Closing flex">
                        <p>Tech & Tools</p>
                        <span>{"()"}</span>
                    </h2>
                    <SkillGrid stack={ToolsStack} />
                </FadeUp>
            </div>

        </section>
    )
}

export default Skills
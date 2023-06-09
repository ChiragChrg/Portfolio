import "./Projects.css"
import { ProjectsList } from "./ProjectsList"
import FadeUp from "../../utils/FadeUp"
import { HtmlIcon, ReactIcon } from "../../assets"

const Projects = () => {
    return (
        <section id="projects" className="Projects-Main">
            <FadeUp width="100%">
                <h1 className="Title-Tag Opening pink flex">
                    <span>{"<"}</span>
                    <p>My Projects</p>
                    <span>{">"}</span>
                </h1>
            </FadeUp>

            <FadeUp className="Projects-Container">
                {
                    ProjectsList.map((obj, index) => {
                        return (
                            <FadeUp href={obj.Link} className="Projects-Item" key={index}>
                                <div className="Projects-Preview">
                                    <img className="Projects-Shot" src={obj.Shot} alt="Project_ScreenShot" width="100%" />
                                    <img className="Projects-Logo" src={obj.Logo} alt="Project_Logo" width={55} />
                                </div>
                                <div className="Projects-Details">
                                    <h2>{obj.Name}</h2>
                                    <p>{obj.Desc}</p>

                                    <div className="Projects-Tech flex gap">
                                        {obj.Tech.map((icon, indx) => {
                                            return (
                                                <img src={icon} key={indx} alt="HtmlIcon" width={26} />
                                            )
                                        })}
                                    </div>
                                </div>
                            </FadeUp>)
                    })
                }
            </FadeUp>
        </section>
    )
}

export default Projects
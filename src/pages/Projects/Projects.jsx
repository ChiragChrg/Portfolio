import "./Projects.css"
import { useState } from "react"
import { ProjectsList } from "./ProjectsList"

import FadeUp from "../../utils/FadeUp"
import { LinkArrow } from "../../assets"
import ProjectDetails from "./ProjectDetails/ProjectDetails"

const Projects = () => {
    const [selectProject, setSelectProject] = useState([])

    return (
        <section id="projects" className="Projects-Main">
            <FadeUp width="100%">
                <h1 className="Title-Tag Opening pink flex">
                    <span>{"<"}</span>
                    <p>My Projects</p>
                    <span>{">"}</span>
                </h1>
            </FadeUp>

            {/* <FadeUp href={obj.Link} className="Projects-Item flex col" key={index}> */}
            <FadeUp className="Projects-Container">
                {
                    ProjectsList.map((obj, index) => {
                        return (
                            <FadeUp isHover
                                className="Projects-Item flex col"
                                onClick={() => setSelectProject(obj)}
                                key={index}>
                                <div className="Projects-Preview">
                                    <img className="Projects-Shot" src={obj.Shot} alt="Project_ScreenShot" width="100%" height="auto" />
                                    <img className="Projects-Logo" src={obj.Logo} alt="Project_Logo" width={55} height={55} />
                                </div>
                                <div className="Projects-Details">
                                    <div className="Projects-Title flex">
                                        <h2>{obj.Name}</h2>
                                        <a href={obj.Link} target='_blank' rel='noreferrer' className="Projects-Link flex">
                                            <img src={LinkArrow} alt="LinkArrow" width={24} height={24} />
                                        </a>
                                    </div>
                                    {/* <p>{obj.Desc}</p> */}

                                    <div className="Projects-Tech flex col">
                                        {/* <p>Tech used:</p> */}
                                        <div className="Projects-TechIcons flex gap">
                                            {obj.Tech.map((icon, indx) => {
                                                return (
                                                    <img src={icon} key={indx} alt="HtmlIcon" width={26} height={26} />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>)
                    })
                }
            </FadeUp>

            {selectProject && <ProjectDetails data={selectProject} />}
        </section>
    )
}

export default Projects
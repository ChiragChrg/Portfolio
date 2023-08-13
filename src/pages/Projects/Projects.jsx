import "./Projects.css"
import { ProjectsList } from "./ProjectsList"
import { useContextData } from "../../Hooks/useContextData"

import FadeUp from "../../utils/FadeUp"
import { LinkArrow } from "../../assets"

const Projects = () => {
    const { setSelectedProject } = useContextData()

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
                        if (obj.hideProject) {
                            return false
                        }

                        return (
                            <FadeUp isHover
                                className="Projects-Item flex col"
                                key={index}>
                                <div className="Projects-Preview" onClick={() => setSelectedProject(obj)}>
                                    <img className="Projects-Shot" src={obj.Shot} alt="Project_ScreenShot" width="100%" height="100%" />
                                    <img className="Projects-Logo" src={obj.Logo} alt="Project_Logo" width={55} height={55} />
                                </div>
                                <div className="Projects-Details">
                                    <div className="Projects-Title flex">
                                        <h2>{obj.Name}</h2>
                                        <div className="flex">
                                            {obj.Status === "development" && <div className="flex gap05 ProjectsDev-Warning">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFA500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                                </svg>
                                                <span style={{ fontSize: "0.8em" }}>Dev Progress</span>
                                            </div>}

                                            <a href={obj.Link} target='_blank' rel='noreferrer' className="Projects-Link flex">
                                                <img src={LinkArrow} alt="LinkArrow" width="25px" height="25px" />
                                            </a>
                                        </div>
                                    </div>
                                    <p>{obj.ShortDesc}</p>

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

            <FadeUp width="100%">
                <span className="Title-Tag Closing pink flex">
                    <span>{"</"}</span>
                    <p>My Projects</p>
                    <span>{">"}</span>
                </span>
            </FadeUp>
        </section>
    )
}

export default Projects
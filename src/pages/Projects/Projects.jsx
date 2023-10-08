import "./Projects.css"
import { ProjectsList } from "./ProjectsList"
import { useContextData } from "../../Hooks/useContextData"

import FadeUp from "../../utils/FadeUp"
import { LinkArrow } from "../../assets"
import { useEffect, useState } from "react"

const Projects = () => {
    const { setSelectedProject } = useContextData()
    const [showMiscProjects, setShowMiscProjects] = useState(false)

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
                    ProjectsList?.map((obj, index) => {
                        if (obj?.hideProject) {
                            return false
                        }

                        return (
                            <FadeUp isHover
                                className="Projects-Item flex col"
                                key={index}>
                                <div className="Projects-Preview" onClick={() => setSelectedProject(obj)}>
                                    <img className="Projects-Shot" src={obj.Shot} alt="Project_ScreenShot" width="100%" height="100%" />
                                    <img className="Projects-Logo" src={obj.Logo} alt="Project_Logo" width={obj.LogoSize} height={obj.LogoSize} />
                                </div>
                                <div className="Projects-Details">
                                    <div className="Projects-Title flex">
                                        <h2>{obj.Name}</h2>
                                        <div className="flex">
                                            {obj.Status === "development" && <div className="flex gap05 ProjectsDev-Warning">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
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
                                                    <img src={icon} key={indx} alt="HtmlIcon" width={22} height={22} />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>)
                    })
                }
            </FadeUp>

            {/* Show Other Misc Projects */}
            <div style={showMiscProjects ? { padding: "2em 0" } : { paddingTop: "2em" }} className="Projects-Misc flex">
                <button className="flex gap" onClick={() => setShowMiscProjects(prev => !prev)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        style={showMiscProjects ? { rotate: "180deg" } : { rotate: "0deg" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    <span>{showMiscProjects ? "Less" : "More"} Projects</span>
                </button>
            </div>

            <FadeUp width="100%" className="Projects-Container">
                {
                    ProjectsList?.map((obj, index) => {
                        if (!obj?.hideProject) {
                            return false
                        }

                        if (showMiscProjects)
                            return <FadeUp width="100%" className="Projects-MiscCardMain flex col" key={index}>
                                <div className="Projects-MiscCard flex">
                                    <div className="Projects-MiscInfo flex" onClick={() => setSelectedProject(obj)}>
                                        <img src={obj.Logo} alt="Project_Logo" width={obj.LogoSize} height={obj.LogoSize} />
                                        <h2>{obj.Name}</h2>
                                    </div>
                                    <a href={obj.Link} target='_blank' rel='noreferrer' className="Projects-Link Misc-Link flex">
                                        <img src={LinkArrow} alt="LinkArrow" width={50} height={50} />
                                    </a>
                                </div>
                            </FadeUp>
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
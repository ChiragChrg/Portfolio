import "./ProjectDetails.css"
import { useEffect, useState, useRef } from "react"
import { useContextData } from "../../../Hooks/useContextData"
import { Close, GithubIcon, LinkArrow } from "../../../assets"

const ProjectDetails = () => {
    const [showModal, setShowModal] = useState(false)
    const { selectedProject, setSelectedProject } = useContextData()

    const ScreenshotRef = useRef()


    useEffect(() => {
        if (selectedProject.length !== 0) {
            setShowModal(true)
            document.querySelector(":root").style.setProperty("--LogoBgColor", selectedProject.Theme)
        }
        else
            setShowModal(false)

        // console.log(colorThief)
    }, [selectedProject])

    return (
        <div className={!showModal ? "ProjectDetails-Main Hidden" : "ProjectDetails-Main ShowModal"}>
            <div className="ProjectDetails-Container flex">
                <button className="ProjectDetails-CloseBtn flex" onClick={() => { setShowModal(false), setSelectedProject([]) }}>
                    <img src={Close} alt="CloseModal" width="35px" height="35px" />
                </button>

                <div className="ProjectDetails-Left">
                    <div className="ProjectDetails-Screenshot flex col" ref={ScreenshotRef}>
                        <img src={selectedProject.Shot} alt="Project_ScreenShot" width="100%" height="100%" />

                        <div className="ProjectDetails-Logo flex">
                            <img src={selectedProject.Logo} alt="Project_Logo" width={100} height={100} />
                        </div>
                    </div>
                    <div className="ProjectDetails-Overlay"></div>

                    <div className="ProjectDetails-Info flex col">
                        <h1 className="flex">{selectedProject.Name}</h1>

                        <div className="ProjectDetails-TechIcons flex gap">
                            {selectedProject?.Tech?.map((icon, indx) => {
                                return (
                                    <img src={icon} key={indx} alt="HtmlIcon" width={28} height={28} />
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="ProjectDetails-Right flex col">
                    <div className="ProjectDetails-Links flex">
                        <a href={selectedProject.Source} className="flex gap05" target="_blank" rel="noreferrer">
                            <img src={GithubIcon} alt="GithubIcon" width={28} height={28} />
                            <span>Source Code</span>
                        </a>

                        <a href={selectedProject.Link} className="flex gap05" target="_blank" rel="noreferrer">
                            <img src={LinkArrow} alt="LinkArrow" width={28} height={28} />
                            <span>Live Site</span>
                        </a>
                    </div>

                    <div className="flexStart col gap05">
                        <h2>About the project.</h2>
                        <p>{selectedProject.Desc}</p>
                    </div>

                    <div className="flexStart col gap05">
                        <h3>Developed by.</h3>
                        <p>ChiragChrg</p>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default ProjectDetails
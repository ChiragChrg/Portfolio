import "./ProjectDetails.css"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import FadeModal from "../../../utils/FadeModal"
import { useContextData } from "../../../Hooks/useContextData"
import { Close, GithubIcon, LinkArrow } from "../../../assets"

const ProjectDetails = () => {
    const [showModal, setShowModal] = useState(false)
    const { selectedProject, setSelectedProject } = useContextData()

    useEffect(() => {
        if (selectedProject.length !== 0) {
            setShowModal(true)
            document.querySelector(":root").style.setProperty("--LogoBgColor", selectedProject.Theme)
        }
        else
            setShowModal(false)
    }, [selectedProject])

    return (
        <div className={!showModal ? "ProjectDetails-Main Hidden" : "ProjectDetails-Main ShowModal"}>
            <div className="ProjectDetails-Container flex">
                <button className="ProjectDetails-CloseBtn flex" onClick={() => { setShowModal(false), setSelectedProject([]) }}>
                    <img src={Close} alt="CloseModal" width="35px" height="35px" />
                </button>

                <div className="ProjectDetails-Left">
                    <div className="ProjectDetails-Screenshot flex col">
                        <img src={selectedProject.Shot} alt="Project_ScreenShot" width="100%" height="100%" />

                        <FadeModal className="ProjectDetails-Logo flex">
                            <img src={selectedProject.Logo} alt="Project_Logo" width={100} height={100} />
                        </FadeModal>
                    </div>
                    <div className="ProjectDetails-Overlay"></div>

                    <FadeModal className="ProjectDetails-Info flex col">
                        <h1 className="flex">{selectedProject.Name}</h1>

                        <FadeModal className="ProjectDetails-TechIcons flex gap">
                            {selectedProject?.Tech?.map((icon, indx) => {
                                return (
                                    <motion.img transition={{ delay: 5 }} src={icon} key={indx} alt="HtmlIcon" width={28} height={28} />
                                )
                            })}
                        </FadeModal>
                    </FadeModal>
                </div>

                <FadeModal className="ProjectDetails-Right flex col">
                    <FadeModal className="ProjectDetails-Links flex">
                        <a href={selectedProject.Source ? selectedProject.Source : "https://github.com/ChiragChrg"} className="flex gap05" target="_blank" rel="noreferrer">
                            <motion.img src={GithubIcon} alt="GithubIcon" width={28} height={28} />
                            <span>Source Code</span>
                        </a>

                        <a href={selectedProject.Link ? selectedProject.Link : "https://chiragchrg.netlify.app/"} className="flex gap05" target="_blank" rel="noreferrer">
                            <motion.img src={LinkArrow} alt="LinkArrow" width={28} height={28} />
                            <span>Live Site</span>
                        </a>
                    </FadeModal>

                    <FadeModal className="flexStart col gap05">
                        <h2>About the project.</h2>
                        <p>{selectedProject.Desc}</p>
                    </FadeModal>

                    <FadeModal width="100%" className="flexStart col gap05 selectable">
                        {selectedProject?.Demo && <div className="flexStart col gap05">
                            <h3>Demo Credentials:</h3>
                            <p>Email: {selectedProject.Demo.email}</p>
                            <p>Password: {selectedProject.Demo.password}</p>
                        </div>}
                    </FadeModal>

                    <FadeModal width="100%" className="flexStart col gap05">
                        <h3>Developed by.</h3>
                        <p>ChiragChrg</p>
                    </FadeModal>

                </FadeModal>
            </div>
        </div >
    )
}

export default ProjectDetails
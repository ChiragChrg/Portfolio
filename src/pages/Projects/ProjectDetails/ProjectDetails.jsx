import "./ProjectDetails.css"
import { useContextData } from "../../../Hooks/useContextData"
import { Close } from "../../../assets"
import { useEffect, useState } from "react"

const ProjectDetails = () => {
    const [showModal, setShowModal] = useState(false)
    const { selectedProject, setSelectedProject } = useContextData()

    useEffect(() => {
        if (selectedProject.length !== 0)
            setShowModal(true)
        else
            setShowModal(false)
    }, [selectedProject])

    return (
        <div className={!showModal ? "ProjectDetails-Main Hidden" : "ProjectDetails-Main ShowModal"}>
            <div className="ProjectDetails-Container flex">
                {selectedProject.Name}
                <button className="ProjectDetails-CloseBtn flex" onClick={() => { setShowModal(false), setSelectedProject([]) }}>
                    <img src={Close} alt="LinkArrow" width="30px" height="30px" />
                </button>
            </div>
        </div>
    )
}

export default ProjectDetails
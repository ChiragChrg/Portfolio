import "./ProjectDetails.css"
import { useState, useEffect } from "react"
import { useContextData } from "../../../Hooks/useContextData"
import { Close } from "../../../assets"

const ProjectDetails = () => {
    const { selectedProject, setSelectedProject } = useContextData()

    // console.log(project)

    return (
        <div className={(selectedProject.length === 0) ? "ProjectDetails-Main Hidden" : "ProjectDetails-Main ShowModal"}>
            <div className="ProjectDetails-Container flex">
                {selectedProject.Name}
                <button className="ProjectDetails-CloseBtn flex" onClick={() => setSelectedProject([])}>
                    <img src={Close} alt="LinkArrow" width="30px" height="30px" />
                </button>
            </div>
        </div>
    )
}

export default ProjectDetails
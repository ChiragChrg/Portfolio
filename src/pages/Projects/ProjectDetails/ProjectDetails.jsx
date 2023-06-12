import { useState, useEffect } from "react"

const ProjectDetails = ({ data }) => {
    const [project, setProject] = useState([])

    useEffect(() => {
        setProject(data)
        // console.log(data)
    }, [location.state])

    return (
        <div className="ProjectDetails-Main">
            {project.Name}
        </div>
    )
}

export default ProjectDetails
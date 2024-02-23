import type React from "preact/compat"
import { project, type ProjectsListType } from "../../store/useProjectData"

type Props = {
    children: React.ReactNode,
    projectData: ProjectsListType
}

const ProjectCard = ({ children, projectData }: Props) => {
    const showProjectModal = () => {
        project.set(projectData)
        window.history.pushState({}, '', `#projects/${projectData?.Name?.toLowerCase()}`);
    }

    return (
        <div
            className="Projects_Preview w-full relative rounded-[0.4em]"
            onClick={showProjectModal}>
            {children}
        </div>
    )
}

export default ProjectCard
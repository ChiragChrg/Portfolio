import { useEffect, useState } from "preact/hooks"
import { useStore } from "@nanostores/preact"
import { project } from "../../store/useProjectData"
import { ExternalLinkIcon, XIcon } from "lucide-preact"
import { GithubIcon } from "../../assets/SVGs"

// Lazy loading ProjectInfo
const ProjectInfo = import("../../utils/ProjectsList");
const { ProjectsList } = await ProjectInfo;

const ProjectDetails = () => {
    const [showModal, setShowModal] = useState(false)
    const $project = useStore(project)

    useEffect(() => {
        if ($project) {
            setShowModal(true)
            // document.querySelector(":root").style.setProperty("--LogoBgColor", selectedProject.Theme)
        }
        else
            setShowModal(false)
    }, [$project])

    // Overriding back button to CLOSE the Modal instead of Navigating back
    if (typeof window != undefined) {
        window.onpopstate = () => {
            setShowModal(false)
            setTimeout(() => {
                // small delay before clearing state
                project.set(null)
            }, 100)
        };
    }

    const handleModalClose = () => {
        setShowModal(false)
        project.set(null)
        window.history.pushState({}, "", "#projects");
    }

    const handleProjectChange = (projectName: string) => {
        setShowModal(false)
        project.set(null)

        const [newProject] = ProjectsList.filter((obj) => obj?.Name === projectName)

        // Small delay before resettig state with new project & showing modal
        setTimeout(() => {
            project.set(newProject)
            window.history.pushState({}, '', `#projects/${newProject?.Name?.toLowerCase()}`);
        }, 300)
    }

    if ($project)
        return (
            <div className={!showModal ? "ProjectDetails-Main Hidden" : "ProjectDetails-Main ShowModal"}>
                <div className="ProjectDetails-Container flex">
                    <button className="ProjectDetails-CloseBtn flex" onClick={handleModalClose}>
                        <XIcon size={35} />
                    </button>

                    <div className="ProjectDetails-Left">
                        <div className="ProjectDetails-Screenshot flex col">
                            <img src={$project.Shot.src} alt="Project_ScreenShot" width="100%" height="100%" />

                            <div className="ProjectDetails-Logo flex">
                                <img src={$project.Logo.src} alt="Project_Logo" width={($project?.LogoSize || 55) * 1.8} height={($project?.LogoSize || 55) * 1.8} />
                            </div>
                        </div>
                        <div className="ProjectDetails-Overlay"></div>

                        <div className="ProjectDetails-Info flex col gap">
                            <h1 className="flex">{$project.Name}</h1>

                            <div className="ProjectDetails-TechIcons flex gap">
                                {$project?.Tech?.map((icon, indx) => {
                                    return (
                                        <img src={icon.src} key={indx} alt="Tech" width={28} height={28} />
                                    )
                                })}
                            </div>

                            <div className="ProjectDetails-Links flex">
                                <a href={$project.Source ? $project.Source : "https://github.com/ChiragChrg"} className="flex gap05" target="_blank" rel="noreferrer">
                                    <img src={GithubIcon.src} alt="GithubIcon" width={24} height={24} />
                                    <span>Source Code</span>
                                </a>

                                <a href={$project.Link ? $project.Link : "https://chiragchrg.netlify.app/"} className="flex gap05" target="_blank" rel="noreferrer">
                                    <ExternalLinkIcon />
                                    <span>Live Site</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="ProjectDetails-Right">
                        <div className="ProjectDetails-About flexStart col gap05">
                            <h2>About the project.</h2>
                            <p>{$project.Desc}</p>
                        </div>

                        <div className="w-full h-fit">
                            {$project?.Demo &&
                                <div className="ProjectDetails-Demo flexStart col gap05 selectable">
                                    <h3>Demo Credentials:</h3>
                                    <p>Email: {$project.Demo.email}</p>
                                    <p>Password: {$project.Demo.password}</p>
                                </div>
                            }
                        </div>

                        {$project?.versions?.length !== 0 &&
                            <div className="ProjectDetails-Versions flexStart col gap05">
                                <h3>Project versions:</h3>
                                {$project?.versions?.map((obj, index) => (
                                    <li key={index} className="version-links">
                                        <span>{obj?.title.replace(/\s*v[1-3]\s*/i, '').trim()}</span>
                                        <span style={{ marginLeft: "1em" }}>v{obj?.version}</span>

                                        {obj?.title === $project?.Name ?
                                            <span className="currentProject">Current project</span>
                                            :
                                            <button onClick={() => handleProjectChange(obj?.title)}>View project</button>
                                        }
                                    </li>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div >
        )
}

export default ProjectDetails
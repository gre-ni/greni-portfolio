import { ProjectCard } from '../ui/ProjectCard'
import { projects } from '../data/projects.js'

export const Projects = () => {
    return <>
    <h2 className="pt-14 pb-8">Projects</h2>
    <div className="grid grid-cols-3 gap-8">
        {projects.map(project => <ProjectCard data={project}/>)}
    </div>
    </>
}
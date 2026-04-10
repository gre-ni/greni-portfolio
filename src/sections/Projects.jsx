import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "../data/projects.js";

export const Projects = () => {
  return (
    <div id="Projects" className="pt-18">
      <h2 className="pb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard data={project} />
        ))}
      </div>
    </div>
  );
};

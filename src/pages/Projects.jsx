import ProjectCard from "../components/Projects/ProjectCard";
import { projectsToShow } from "../utilities/projectsList";

function Projects() {
  return (
    <div className="flex flex-col gap-16 px-7 py-16">
      {projectsToShow.map((project, index) => (
        <ProjectCard project={project} index={index} key={project.title} />
      ))}
    </div>
  );
}

export default Projects;

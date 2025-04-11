import { Link } from "react-router";
import choreSitePhoto from "../assets/choreSite.png";
import portfolioPhoto from "../assets/portfolioWebsite.png";
import ProjectCard from "../components/Projects/ProjectCard";

const projectsToShow = [
  {
    photo: choreSitePhoto,
    title: "choreTracker",
    description: `I created choreTracker to help track chores and control impulse
              purchases by rewarding myself with points. Completing tasks earns points, and I can redeem them for
              rewards I set. It also provides an intuitive interface to easily
              manage and monitor progress on tasks, helping me stay on track
              with my goals.`,
    tags: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Postman",
      "Tailwindcss",
    ],
    visitPageLink: "https://choresite-n71r.onrender.com/",
    viewCodeLink: "https://github.com/aduong3/choreSite",
    isCompleted: false,
  },
  {
    photo: portfolioPhoto,
    title: "Portfolio Website",
    description:
      "This is my personal portfolio website, showcasing my web development skills and projects. It features a responsive layout with interactive elements and links to my live projects and GitHub. The site demonstrates my front-end and back-end development abilities.",
    tags: ["JavaScript", "React", "Tailwindcss"],
    viewCodeLink: "https://github.com/aduong3/portfolio",
    isCompleted: false,
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-24">
      {projectsToShow.map((project, index) => (
        <ProjectCard project={project} index={index} key={project.title} />
      ))}
    </div>
  );
}

export default Projects;

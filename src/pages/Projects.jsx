import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { projectsToShow } from "../utilities/projectsList";
import { useState } from "react";
import ProjectSkillTags from "../components/ProjectSkillTags";

/*
Need to work on:
Showing the previous and next project
Circle indicator to show amount of projects and which project it is on.
map all the projects and display each description, photo, skill tags, etc
*/

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projectsToShow.length;

  const prevIndex = (currentIndex - 1 + totalProjects) % totalProjects;
  const nextIndex = (currentIndex + 1) % totalProjects;

  const handlePrev = () => setCurrentIndex(prevIndex);
  const handleNext = () => setCurrentIndex(nextIndex);

  const currentProj = projectsToShow[currentIndex];
  const prevProj = projectsToShow[prevIndex];
  const nextProj = projectsToShow[nextIndex];

  return (
    <div className="grid h-full grid-cols-3 grid-rows-5">
      <h1 className="place-self-center text-5xl font-semibold">Projects</h1>
      <section className="col-span-full row-span-full row-start-2 grid place-items-center">
        <div className="flex w-[942px] flex-col items-center gap-3">
          <div className="flex items-center gap-5">
            <span
              className="text-3xl hover:cursor-pointer"
              onClick={handlePrev}
            >
              <GrFormPrevious />
            </span>
            <div className="w-[60px] bg-gray-300">
              <p className="px-3 py-1">
                {currentIndex + 1} / {totalProjects}
              </p>
            </div>
            <span
              className="text-3xl hover:cursor-pointer"
              onClick={handleNext}
            >
              <GrFormNext />
            </span>
          </div>

          <section className="relative flex w-full">
            <div className="absolute -top-[37px] -left-42 flex h-[245px] w-[472px] translate-z-6 rotate-x-12 rotate-y-45 items-center justify-center border-2 bg-gray-300/40 transform-3d">
              {prevProj.photo ? (
                <img
                  alt="photo of previous project here"
                  src={prevProj.photo}
                  className="h-full w-full object-cover"
                />
              ) : (
                <h3 className="text-2xl">No Project Photo Available</h3>
              )}
            </div>
            <div className="z-300 mx-auto flex h-[240px] w-[472px] items-center justify-center border-2 bg-gray-300">
              {currentProj.photo ? (
                <img
                  alt="photo of project here"
                  src={currentProj.photo}
                  className="h-full w-full object-cover"
                />
              ) : (
                <h3 className="text-2xl">No Project Photo Available</h3>
              )}
            </div>
            <div className="absolute -top-[37px] -right-42 flex h-[245px] w-[472px] translate-z-6 -rotate-x-12 rotate-y-45 items-center justify-center border-2 bg-gray-300/40 transform-3d">
              {nextProj.photo ? (
                <img
                  alt="photo of next project here"
                  src={nextProj.photo}
                  className="h-full w-full object-cover"
                />
              ) : (
                <h3 className="text-2xl">No Project Photo Available</h3>
              )}
            </div>
          </section>
          <h2 className="text-3xl font-semibold">{currentProj.title}</h2>
          <div className="flex gap-3">
            {currentProj.tags.map((tag) => (
              <ProjectSkillTags key={tag} skill={tag} />
            ))}
          </div>
          <div className="flex gap-16 text-xl">
            {currentProj.visitPageLink && (
              <a href={currentProj.visitPageLink}>Visit Site</a>
            )}
            {currentProj.viewCodeLink && (
              <a href={currentProj.viewCodeLink}>View Code</a>
            )}
            {!currentProj.visitPageLink && !currentProj.viewCodeLink && (
              <p>No Links Available</p>
            )}
          </div>
          <div className="h-32">
            <p className="text-lg">{currentProj.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;

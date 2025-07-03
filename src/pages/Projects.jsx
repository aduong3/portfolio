import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { projectsToShow } from "../utilities/projectsList";
import { useState } from "react";
import ProjectSkillTags from "../components/ProjectSkillTags";

/*
Need to work on:
Showing the previous and next project - DONE
Circle indicator to show amount of projects and which project it is on. - DONE (changed from circles to a number)
map all the projects and display each description, photo, skill tags, etc - DONE
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
    <div className="flex h-full flex-col items-center justify-center py-6 md:grid md:grid-cols-3 md:grid-rows-5">
      <h1 className="place-self-center text-3xl font-semibold md:text-5xl">
        Projects
      </h1>
      <section className="grid place-items-center md:col-span-full md:row-span-full md:row-start-2">
        <div className="flex w-[300px] flex-col items-center gap-3 md:w-[942px]">
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
          {/* Previous Project */}
          <section className="relative flex w-full">
            <div className="absolute -top-[37px] -left-42 hidden h-[245px] w-[472px] translate-z-6 rotate-x-12 rotate-y-45 items-center justify-center border-2 bg-gray-300/40 opacity-45 transform-3d md:flex">
              {prevProj.photo ? (
                <img
                  alt={`Photo of project: ${prevProj.title}`}
                  src={prevProj.photo}
                  className="h-full w-full object-cover"
                />
              ) : (
                <h3 className="text-2xl">No Project Photo Available</h3>
              )}
            </div>
            {/* Current Project */}
            <div className="z-300 mx-auto flex h-[200px] w-[350px] items-center justify-center border-2 bg-gray-300 md:h-[240px] md:w-[472px]">
              {currentProj.photo ? (
                <img
                  alt={`Photo of project: ${currentProj.title}`}
                  src={currentProj.photo}
                  className="h-full w-full object-cover"
                />
              ) : (
                <h3 className="text-center text-2xl">
                  No Project Photo Available
                </h3>
              )}
            </div>
            {/* Next Project */}
            <div className="absolute -top-[37px] -right-42 hidden h-[245px] w-[472px] translate-z-6 -rotate-x-12 rotate-y-45 items-center justify-center border-2 bg-gray-300/40 opacity-45 transform-3d md:flex">
              {nextProj.photo ? (
                <img
                  alt={`Photo of project: ${nextProj.title}`}
                  src={nextProj.photo}
                  className="h-full w-full object-cover"
                />
              ) : (
                <h3 className="text-2xl">No Project Photo Available</h3>
              )}
            </div>
          </section>
          <h2 className="text-2xl font-semibold md:text-3xl">
            {currentProj.title}
          </h2>
          <div className="flex flex-wrap gap-3">
            {currentProj.tags.map((tag) => (
              <ProjectSkillTags key={tag} skill={tag} />
            ))}
          </div>
          <div className="text-md flex gap-16 md:text-xl">
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
          <div className="md:h-32">
            <p className="text-md md:text-lg">{currentProj.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;

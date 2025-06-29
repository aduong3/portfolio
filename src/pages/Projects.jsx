import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { projectsToShow } from "../utilities/projectsList";

/*
Need to work on:
Showing the previous and next project
Circle indicator to show amount of projects and which project it is on.
map all the projects and display each description, photo, skill tags, etc
*/

function Projects() {
  return (
    <div className="grid h-full grid-cols-3 grid-rows-5">
      <h1 className="place-self-center text-5xl font-semibold">Projects</h1>
      <section className="col-span-full row-span-full row-start-2 grid place-items-center">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-5">
            <span className="text-3xl hover:cursor-pointer">
              <GrFormPrevious />
            </span>
            <div className="bg-gray-300 px-3 py-1">o</div>
            <span className="text-3xl hover:cursor-pointer">
              <GrFormNext />
            </span>
          </div>

          <div className="relative flex w-full">
            <div className="absolute -left-42 h-60 w-[50%] -translate-y-9 translate-z-6 rotate-x-12 rotate-y-45 rounded-xl bg-gray-300/40 transform-3d">
              <img alt="photo of previous project here" className="absolute" />
            </div>
            <div className="z-300 mx-auto h-60 w-[50%] rounded-xl bg-gray-300">
              <img alt="photo of project here" />
            </div>
            <div className="absolute -right-42 h-60 w-[50%] -translate-y-9 translate-z-6 -rotate-x-12 rotate-y-45 rounded-xl bg-gray-300/40 transform-3d">
              <img alt="photo of next project here" />
            </div>
          </div>
          <h2 className="text-2xl">Project Title</h2>
          <p>Skill tags Here</p>
          <div className="w-[50%]">
            <p className="text-lg">
              This is where the text will be at. This will describe what the
              project is, what problem it solves, and why I created it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;

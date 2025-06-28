import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { projectsToShow } from "../utilities/projectsList";

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

          <div className="h-60 w-[50%] rounded-lg bg-gray-300">
            <img alt="photo of project here" />
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

import BackendSkills from "../components/Skills/BackendSkills";
import FrontendSkills from "../components/Skills/FrontendSkills";
import ToolSkills from "../components/Skills/ToolSkills";

function Skills() {
  return (
    <div className="grid h-full grid-cols-3 grid-rows-5">
      <h1 className="place-self-center text-5xl font-semibold">Skills</h1>
      <section className="col-span-full row-start-2 flex flex-col place-items-center-safe gap-4">
        <h2 className="text-3xl">Frontend</h2>
        <FrontendSkills />
      </section>
      <section className="col-span-full row-start-3 flex flex-col place-items-center-safe gap-4">
        <h2 className="text-3xl">Backend</h2>
        <BackendSkills />
      </section>
      <section className="col-span-full row-start-4 flex flex-col place-items-center-safe gap-4">
        <h2 className="text-3xl">Tools</h2>
        <ToolSkills />
      </section>
    </div>
  );
}

export default Skills;

import BackendSkills from "../components/Skills/BackendSkills";
import FrontendSkills from "../components/Skills/FrontendSkills";
import ToolSkills from "../components/Skills/ToolSkills";

const skillPositionStyles =
  "flex flex-col items-center gap-4 lg:col-span-full lg:place-items-center-safe ";

function Skills() {
  return (
    <div className="flex h-svh flex-col items-center justify-center gap-0 lg:grid lg:grid-cols-3 lg:grid-rows-5 lg:gap-5">
      <h1 className="text-3xl font-semibold lg:place-self-center lg:text-5xl">
        Skills
      </h1>
      <section className={`lg:row-start-2 ${skillPositionStyles}`}>
        <h2 className="text-2xl lg:text-3xl">Frontend</h2>
        <FrontendSkills />
      </section>
      <section className={`lg:row-start-3 ${skillPositionStyles}`}>
        <h2 className="text-2xl lg:text-3xl">Backend</h2>
        <BackendSkills />
      </section>
      <section className={`lg:row-start-4 ${skillPositionStyles}`}>
        <h2 className="text-2xl lg:text-3xl">Tools</h2>
        <ToolSkills />
      </section>
    </div>
  );
}

export default Skills;

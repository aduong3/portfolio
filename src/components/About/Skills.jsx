import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiPostgresql,
  SiGit,
  SiPostman,
  SiTypescript,
} from "react-icons/si";

import SkillItems from "./SkillItems";

function Skills() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-300 sm:text-4xl">Skills</h1>
      <div className="flex flex-col gap-3 py-2">
        <h2 className="text-lg font-semibold sm:text-2xl">Frontend</h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
          <SkillItems Icon={SiReact} label="React" />
          <SkillItems Icon={SiTailwindcss} label="Tailwindcss" />
          <SkillItems Icon={SiJavascript} label="JavaScript" />
          <SkillItems Icon={SiTypescript} label="TypeScript" />
          <SkillItems Icon={SiHtml5} label="HTML5" />
          <SkillItems Icon={SiCss3} label="CSS3" />
        </div>
      </div>
      <div className="flex flex-col gap-3 py-2">
        <h2 className="text-lg font-semibold sm:text-2xl">Backend</h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
          <SkillItems Icon={SiNodedotjs} label="Node.js" />
          <SkillItems Icon={SiExpress} label="Express.js" />
          <SkillItems Icon={SiPostgresql} label="PostgreSQL" />
          <SkillItems Icon={SiMongodb} label="MongoDB" />
        </div>
      </div>
      <div className="flex flex-col gap-3 py-2">
        <h2 className="text-lg font-semibold sm:text-2xl">Others</h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
          <SkillItems Icon={SiGit} label="Git" />
          <SkillItems Icon={SiPostman} label="Postman" />
        </div>
      </div>
    </div>
  );
}

export default Skills;

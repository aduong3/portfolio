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
      <h1 className="text-4xl font-bold text-green-300">Skills</h1>
      <div className="flex flex-col gap-3 py-2">
        <h2 className="text-2xl font-semibold">Frontend</h2>
        <div className="grid grid-flow-col">
          <SkillItems Icon={SiReact} label="React" />
          <SkillItems Icon={SiTailwindcss} label="Tailwindcss" />
          <SkillItems Icon={SiJavascript} label="JavaScript" />
          <SkillItems Icon={SiTypescript} label="TypeScript" />
          <SkillItems Icon={SiHtml5} label="HTML5" />
          <SkillItems Icon={SiCss3} label="CSS3" />
        </div>
      </div>
      <div className="flex flex-col gap-3 py-2">
        <h2 className="text-2xl font-semibold">Backend</h2>
        <div className="grid grid-flow-col">
          <SkillItems Icon={SiNodedotjs} label="Node.js" />
          <SkillItems Icon={SiExpress} label="Express.js" />
          <SkillItems Icon={SiPostgresql} label="PostgreSQL" />
          <SkillItems Icon={SiMongodb} label="MongoDB" />
        </div>
      </div>
      <div className="flex flex-col gap-3 py-2">
        <h2 className="text-2xl font-semibold">Others</h2>
        <div className="grid grid-flow-col">
          <SkillItems Icon={SiGit} label="Git" />
          <SkillItems Icon={SiPostman} label="Postman" />
        </div>
      </div>
    </div>
  );
}

export default Skills;

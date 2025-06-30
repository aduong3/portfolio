import { BiLogoVisualStudio } from "react-icons/bi";
import { FaWindows } from "react-icons/fa";
import {
  SiFigma,
  SiGit,
  SiGithub,
  SiJest,
  SiNetlify,
  SiNpm,
  SiPostman,
  SiRender,
} from "react-icons/si";

const skills = [
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Netlify", icon: <SiNetlify /> },
  { name: "Render", icon: <SiRender /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "npm", icon: <SiNpm /> },
  { name: "Windows", icon: <FaWindows /> },
  { name: "VSCode", icon: <BiLogoVisualStudio /> },
  { name: "Figma", icon: <SiFigma /> },
];

function ToolSkills() {
  return (
    <div className="flex gap-10">
      {skills.map((skill) => (
        <div
          className="flex flex-col items-center px-2 py-1 transition-all duration-300 hover:scale-125"
          key={skill.name}
        >
          <span className="text-4xl">{skill.icon}</span>
          <p className="text-lg">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ToolSkills;

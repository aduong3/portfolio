import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVitess,
} from "react-icons/si";
import { SiTypescript } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "React", icon: <SiReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Vite", icon: <SiVitess /> },
];

function FrontendSkills() {
  return (
    <div className="flex flex-wrap justify-center lg:gap-6">
      {skills.map((skill) => (
        <div
          className="flex flex-col items-center px-2 py-1 transition-all duration-300 hover:scale-125"
          key={skill.name}
        >
          <span className="text-2xl lg:text-4xl">{skill.icon}</span>
          <p className="text-sm lg:text-lg">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

export default FrontendSkills;

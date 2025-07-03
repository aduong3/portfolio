import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiSocketdotio,
  SiSupabase,
} from "react-icons/si";

const skills = [
  { name: "Node", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Socket.io", icon: <SiSocketdotio /> },
  { name: "Supabase", icon: <SiSupabase /> },
];

function BackendSkills() {
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

export default BackendSkills;

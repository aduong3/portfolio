import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import SideBarLinks from "./SideBarLinks";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <span
        className="relative top-2 left-2 z-999 text-5xl md:hidden"
        onClick={handleOpen}
      >
        {open ? <IoClose /> : <IoMenu />}
      </span>

      <nav
        className={`fixed z-600 flex h-full w-full flex-col items-center justify-center gap-8 bg-white transition-all duration-300 ease-in-out md:hidden ${open ? "top-0" : "-top-full"} `}
      >
        {navItems.map(({ name, path }, index) => (
          <SideBarLinks
            key={name}
            index={index}
            name={name}
            path={path}
            handleOpen={handleOpen}
          />
        ))}
      </nav>

      <nav className="hidden flex-col gap-15 bg-white pl-2 md:flex">
        {navItems.map(({ name, path }, index) => (
          <SideBarLinks index={index} name={name} path={path} key={name} />
        ))}
      </nav>
    </>
  );
}

export default Sidebar;

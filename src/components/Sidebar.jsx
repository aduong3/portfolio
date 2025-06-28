import { VscTriangleRight } from "react-icons/vsc";
import { Link, useLocation } from "react-router";

const navButtonStyle = "text-2xl hover:cursor-pointer";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Sidebar() {
  const location = useLocation();
  return (
    <nav className="flex flex-col gap-15">
      {navItems.map(({ name, path }, index) => {
        const isActive = location.pathname === path;
        return (
          <Link key={index} to={path} className={navButtonStyle}>
            {isActive && (
              <span className="animate-slide-in flex items-center gap-4">
                <VscTriangleRight />
                <span>{name}</span>
              </span>
            )}
            {!isActive && <span>{name}</span>}
          </Link>
        );
      })}
    </nav>
  );
}

export default Sidebar;

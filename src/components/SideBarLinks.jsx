import { VscTriangleRight } from "react-icons/vsc";
import { Link, useLocation } from "react-router";

const navButtonStyle = "text-2xl hover:cursor-pointer";

function SideBarLinks({ path, index, name, handleOpen }) {
  const location = useLocation();
  const isActive = location.pathname === path;
  return (
    <Link key={index} to={path} className={navButtonStyle} onClick={handleOpen}>
      {isActive && (
        <div className="md:animate-slide-in flex items-center gap-4">
          <span className="text-3xl">
            <VscTriangleRight />
          </span>

          <span>{name}</span>
        </div>
      )}
      {!isActive && <span>{name}</span>}
    </Link>
  );
}

export default SideBarLinks;

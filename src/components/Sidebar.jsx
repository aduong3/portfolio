import { Link } from "react-router";

function Sidebar() {
  return (
    <nav className="flex w-full justify-between py-4 text-xl font-bold">
      <Link to="/">Andrew Duong</Link>

      <div className="flex gap-12">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Sidebar;

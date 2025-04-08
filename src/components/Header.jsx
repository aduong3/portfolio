import { Link } from "react-router";

function Header() {
  return (
    <nav className="flex w-full justify-between px-3 py-4 text-xl font-bold">
      <Link to="/">Home</Link>

      <div className="flex gap-12">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-3 py-4 text-xl font-bold">
      <div className="sm:hidden" onClick={() => setIsOpen((open) => !open)}>
        <RxHamburgerMenu />
      </div>

      <div
        className={`fixed left-0 z-100 flex h-full w-full transform flex-col items-center justify-center gap-8 bg-zinc-900 text-3xl transition-all duration-500 ease-in-out sm:hidden ${isOpen ? "top-0" : "-top-full"} `}
      >
        <p onClick={() => setIsOpen(false)}>Close Menu</p>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>

      {/*Tablet/desktop */}
      <div className="hidden w-full justify-between sm:flex">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { navLinks } from "../constants/index.js";
import { Tooltip } from "@mui/material";

const NavItems = () => {
  return (
    <ul className="nav-ul ">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <Tooltip title="Download Resume" arrow>
            <span>
              <a
                href="/assets/resume.pdf"
                className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
                download="Pravesh_Subba_resume"
              >
                Pravesh
              </a>
            </span>
          </Tooltip>
          <button
            className="w-8 h-8 text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="toggle menu"
            onClick={toggleMenu}
          >
            {isopen ? (
              <MenuIcon sx={{ color: "white" }} />
            ) : (
              <CloseIcon sx={{ color: "white" }} />
            )}
          </button>

          <nav className="sm:flex hidden ">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isopen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

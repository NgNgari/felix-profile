import { NavLink } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";
import socials from "../data/socials";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand">
          Felix Ngari
        </NavLink>

        <nav className="navbar__links" aria-label="Main navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link--active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link--active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="navbar__actions">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>

          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

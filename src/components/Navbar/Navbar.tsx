import { useContext, useState } from "react";
import { MdBrightness2 } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

// Context
import { ThemeContext } from "../../contexts/theme";

// Data
import { skills, contact } from "data/portfolio";
import { experiences } from "data/experiences";
import { projects } from "data/projects";

// SCSS
import "./Navbar.scss";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center">
      <ul style={{ display: showNavList ? "flex" : "" }} className="nav-list">
        {experiences.length ? (
          <li className="nav-item">
            <a
              href="#experience"
              onClick={toggleNavList}
              className="link link-nav"
            >
              Experiences
            </a>
          </li>
        ) : null}

        {projects.length ? (
          <li className="nav-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link-nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className="nav-item">
            <a href="#skills" onClick={toggleNavList} className="link link-nav">
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="nav-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link-nav"
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn-icon nav-theme"
        aria-label="toggle theme"
      >
        {theme === "dark" ? <MdWbSunny /> : <MdBrightness2 />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn-icon nav-hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <MdClose /> : <MdMenu />}
      </button>
    </nav>
  );
};

export default Navbar;

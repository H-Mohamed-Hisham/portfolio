import { Link, withRouter, useLocation } from "react-router-dom";
import {
  MdPersonOutline,
  MdLaptop,
  MdOutlineWorkOutline,
  MdOutlineSchool,
} from "react-icons/md";

// Data
import { educations } from "data/portfolio";
import { experiences } from "data/experiences";
import { projects } from "data/projects";

// SCSS
import "./Navbar.scss";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="nav-container">
      <nav className="nav-list">
        <div className="nav-item ">
          <Link to="/">
            <div
              className={pathname === "/" ? "nav-link nav-active" : "nav-link"}
            >
              <MdPersonOutline />
              <span>About Me</span>
            </div>
          </Link>
        </div>

        {experiences.length ? (
          <div className="nav-item">
            <Link to="/experiences">
              <div
                className={
                  pathname === "/experiences"
                    ? "nav-link nav-active"
                    : "nav-link"
                }
              >
                <MdOutlineWorkOutline />
                <span>Experiences</span>
              </div>
            </Link>
          </div>
        ) : null}

        {projects.length ? (
          <div className="nav-item">
            <Link to="/projects">
              <div
                className={
                  pathname === "/projects" ? "nav-link nav-active" : "nav-link"
                }
              >
                <MdLaptop />
                <span>Projects</span>
              </div>
            </Link>
          </div>
        ) : null}

        {educations.length ? (
          <div className="nav-item">
            <Link to="/qualifications">
              <div
                className={
                  pathname === "/qualifications"
                    ? "nav-link nav-active"
                    : "nav-link"
                }
              >
                <MdOutlineSchool />
                <span>Qualifications</span>
              </div>
            </Link>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default withRouter(Navbar);

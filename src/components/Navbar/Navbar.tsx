import { Link, withRouter } from "react-router-dom";
import {
  MdPersonOutline,
  MdLaptop,
  MdOutlineWorkOutline,
  MdOutlineGrade,
  MdOutlineContactPage,
} from "react-icons/md";

// Data
import { skills, contact } from "data/portfolio";
import { experiences } from "data/experiences";
import { projects } from "data/projects";

// SCSS
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="nav-list">
        <div className="nav-item ">
          <Link to="/">
            <div className="nav-link nav-active">
              <MdPersonOutline />
              <span>About Me</span>
            </div>
          </Link>
        </div>

        {experiences.length ? (
          <div className="nav-item">
            <Link to="/experiences">
              <div className="nav-link">
                <MdOutlineWorkOutline />
                <span>Experiences</span>
              </div>
            </Link>
          </div>
        ) : null}

        {projects.length ? (
          <div className="nav-item">
            <Link to="/projects">
              <div className="nav-link">
                <MdLaptop />
                <span>Projects</span>
              </div>
            </Link>
          </div>
        ) : null}

        {skills.length ? (
          <div className="nav-item">
            <Link to="/skills">
              <div className="nav-link">
                <MdOutlineGrade />
                <span>Skills</span>
              </div>
            </Link>
          </div>
        ) : null}

        {contact.email ? (
          <div className="nav-item">
            <Link to="/contact">
              <div className="nav-link">
                <MdOutlineContactPage />
                <span>Contact</span>
              </div>
            </Link>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default withRouter(Navbar);

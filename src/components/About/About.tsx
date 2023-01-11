import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

// Data
import { about } from "data/portfolio";

// CSS
import "./About.scss";

const About = () => {
  const { photo, name, role, description, resume, social } = about;

  return (
    <div className="about center">
      {photo && <img height="200px" alt="Avatar placeholder" src={photo} />}
      {name && (
        <h1>
          Hi, I am <span className="name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="role">A {role}.</h2>}
      <p className="desc">{description && description}</p>

      <div className="contact center">
        {resume && (
          <a href={resume}>
            <button type="button" className="btn btn-outline">
              Resume
            </button>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link-icon"
              >
                <AiFillGithub />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link-icon"
              >
                <AiFillLinkedin />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;

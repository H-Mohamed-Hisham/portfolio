import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

// Data
import { about } from "data/portfolio";

// CSS
import "./About.scss";

const About = () => {
  const { photo, name, role, description, resume, social } = about;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about center">
      {photo && <img alt="Hisham" src={photo} />}
      {name && <h1 className="name">{name}.</h1>}

      {role && <h2 className="role">A {role}.</h2>}
      <p className="desc">{description && description}</p>

      <div className="about-contact center">
        {resume && (
          <a href={resume} rel="noreferrer" target="_blank">
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

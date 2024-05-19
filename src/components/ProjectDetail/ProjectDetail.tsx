import React, { useEffect } from "react";
import Slider from "react-slick";
import { AiFillGithub } from "react-icons/ai";
import { MdLaunch } from "react-icons/md";
import { Link } from "react-router-dom";

// Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Data
import { projects } from "data/projects";

// SCSS
import "./ProjectDetail.scss";

type props = {
  match: any;
};

const ProjectDetail: React.FC<props> = ({ match }) => {
  const id = match.params.id;

  const project = projects?.filter((ele) => ele.id === id)[0];

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section">
      {project === undefined ? (
        <div className="project-not-found">
          <h5 className="title">No Data Found</h5>
          <Link to="/projects" className="btn btn-outline">
            Go Back to Projects
          </Link>
        </div>
      ) : (
        <>
          <h2 className="title">{project?.name}</h2>

          <div className="project-detail">
            <Slider {...sliderSettings}>
              {project?.screenshots.map((d, idx) => (
                <div key={idx}>
                  <img
                    src={d}
                    alt={`Screenshot - ${idx}`}
                    className="screenshot"
                  />
                </div>
              ))}
            </Slider>

            <div className="details-container">
              <p className="description">{project?.description}</p>

              <p className="associated">
                Associated With : {project?.associated}
              </p>

              <ul className="stack-list">
                {project?.stack.map((skill: any, index: number) => (
                  <li key={index} className="stack-list-item btn btn-plain">
                    {skill}
                  </li>
                ))}
              </ul>

              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  aria-label="source code"
                  className="link link-icon app-link"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiFillGithub />
                </a>
              )}

              {project.livePreview && (
                <a
                  href={project.livePreview}
                  aria-label="live preview"
                  className="link link-icon app-link"
                  rel="noreferrer"
                  target="_blank"
                >
                  <MdLaunch />
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectDetail;

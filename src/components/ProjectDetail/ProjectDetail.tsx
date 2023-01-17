import React from "react";
import Slider from "react-slick";
import { AiFillGithub } from "react-icons/ai";
import { MdLaunch } from "react-icons/md";

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
  };

  return (
    <section className="section">
      <h2 className="title">{project?.name}</h2>

      <div className="project-detail">
        <Slider {...sliderSettings}>
          {project?.screenshots.map((d, idx) => (
            <div key={idx}>
              <img src={d} alt={`Screenshot - ${idx}`} className="screenshot" />
            </div>
          ))}
        </Slider>

        <div className="details-container">
          <p className="description">{project?.description}</p>
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
            >
              <AiFillGithub />
            </a>
          )}

          {project.livePreview && (
            <a
              href={project.livePreview}
              aria-label="live preview"
              className="link link-icon app-link"
            >
              <MdLaunch />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;

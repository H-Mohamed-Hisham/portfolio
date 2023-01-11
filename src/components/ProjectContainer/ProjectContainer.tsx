import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdLaunch } from "react-icons/md";

// CSS
import "./ProjectContainer.scss";

type props = {
  project: any;
};

const ProjectContainer: React.FC<props> = ({ project }) => (
  <div className="project">
    <h3>{project.name}</h3>

    <p className="description">{project.description}</p>
    {project.stack && (
      <ul className="stack">
        {project.stack.map((item: any, index: number) => (
          <li key={index} className="stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label="source code"
        className="link link-icon"
      >
        <AiFillGithub />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="link link-icon"
      >
        <MdLaunch />
      </a>
    )}
  </div>
);

export default ProjectContainer;

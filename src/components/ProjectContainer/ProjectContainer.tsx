import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdLaunch } from "react-icons/md";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

// CSS
import "./ProjectContainer.scss";

type props = {
  project: any;
};

const ProjectContainer: React.FC<props> = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="project" onClick={() => setOpen(true)}>
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

      {/* Modal */}
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        center
      >
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </>
  );
};

export default ProjectContainer;

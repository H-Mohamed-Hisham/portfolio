import { useState, useEffect, useMemo } from "react";

// Components
import ProjectContainer from "components/ProjectContainer/ProjectContainer";

// Data
import { projects } from "data/projects";

// CSS
import "./Projects.scss";

const Projects = () => {
  // State
  const [option, setOption] = useState<string>("all");

  const projectDomainList = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "React",
      value: "react",
    },
    {
      label: "Next JS",
      value: "nextjs",
    },
    {
      label: "Mini Projects",
      value: "javascript",
    },
    {
      label: "PHP",
      value: "php",
    },
  ];

  const filteredProjects = useMemo(() => {
    return option === "all"
      ? projects
      : projects.filter((e) => e.projectDomainKey === option);
  }, [option]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!projects.length ? null : (
        <section className="section">
          <h2 className="title">Projects</h2>

          <div className="filter-container">
            <ul className="list">
              {projectDomainList.map((item, index) => (
                <li
                  key={index}
                  className="item"
                  onClick={() => {
                    setOption(item.value);
                  }}
                >
                  <button
                    type="button"
                    className={`btn btn-outline ${
                      option === item.value ? "active" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="projects-grid">
            {filteredProjects?.map((project: any, index: number) => (
              <ProjectContainer key={index} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;

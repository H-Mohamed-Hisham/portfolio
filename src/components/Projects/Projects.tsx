import { useState, useEffect } from "react";

// Components
import ProjectContainer from "components/ProjectContainer/ProjectContainer";

// Data
import { projects } from "data/projects";

// CSS
import "./Projects.scss";

const Projects = () => {
  const [filterOption, setFilterOption] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<any>([]);

  const list = [
    {
      key: "all",
      value: "All",
    },
    {
      key: "react",
      value: "React",
    },
    {
      key: "nextjs",
      value: "Next JS",
    },
    {
      key: "web",
      value: "Other Web App",
    },
  ];

  function changeCategory(selected: any) {
    switch (selected) {
      case "all":
        setFilteredProjects(projects);
        break;
      case "web":
        setFilteredProjects(projects.filter((e) => e.projectDomain === "PHP"));
        break;
      case "react":
        setFilteredProjects(
          projects.filter((e) => e.projectDomain === "React")
        );
        break;
      case "nextjs":
        setFilteredProjects(
          projects.filter((e) => e.projectDomain === "Next JS")
        );
        break;

      default:
        setFilteredProjects(projects);
    }
  }

  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  return (
    <>
      {!projects.length ? null : (
        <section className="section">
          <h2 className="title">Projects</h2>

          <div className="filter-container">
            <ul className="list">
              {list.map((item, index) => (
                <li
                  key={index}
                  className="item"
                  onClick={() => {
                    setFilterOption(item.key);
                    changeCategory(item.key);
                  }}
                >
                  <button
                    type="button"
                    className={`btn btn-outline ${
                      filterOption === item.key ? "active" : ""
                    }`}
                  >
                    {item.value}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project: any, index: number) => (
              <ProjectContainer key={index} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;

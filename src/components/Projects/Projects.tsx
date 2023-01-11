// Components
import ProjectContainer from "components/ProjectContainer/ProjectContainer";

// Data
import { projects } from "data/portfolio";

// CSS
import "./Projects.scss";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section">
      <h2 className="title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectContainer key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

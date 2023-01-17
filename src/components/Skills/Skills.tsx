// Data
import { skills } from "data/portfolio";

// SCSS
import "./Skills.scss";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="section">
      <h2 className="title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill: any, index: number) => (
          <li key={index} className="skills-list-item btn btn-plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

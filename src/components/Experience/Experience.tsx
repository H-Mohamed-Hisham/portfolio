// Data
import { experiences } from "data/experiences";

// CSS
import "./Experience.scss";

const Experience = () => {
  if (!experiences.length) return null;

  return (
    <section className="section">
      <h2 className="title">Experiences</h2>

      <div className="experience">
        <div className="timeline">
          <ul className="list">
            {experiences.map((experience, index) => (
              <li key={index} className="item">
                <div className="timeline-title-img">
                  <img src={experience?.icon} alt="IMG" />
                  <h4>{experience.organisation}</h4>
                </div>
                <p className="timeline-location">{experience.location}</p>
                <ul>
                  {experience.designation.map((d, idx) => (
                    <li key={idx}>
                      {d.role} - {d.period}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { useEffect } from "react";

// Data
import { educations, certifications } from "data/portfolio";

// SCSS
import "./Qualifications.scss";

const Qualifications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section">
      <h2 className="title">Educations</h2>

      <div className="qualifications">
        <div className="timeline">
          <ul className="list">
            {educations.map((education, index) => (
              <li key={index} className="item">
                <div className="title-img">
                  <img src={education?.logo} alt="IMG" />
                  <h4>{education?.institute}</h4>
                </div>
                <h5 className="text">{education?.degree}</h5>
                <p className="text">{education?.year}</p>
                <p className="text">{education.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="title">Certifications</h2>

      <div className="qualifications">
        <div className="timeline">
          <ul className="list">
            {certifications.map((certification, index) => (
              <li key={index} className="item">
                <div className="title-img">
                  <img src={certification?.logo} alt="IMG" />
                  <h4>{certification?.institute}</h4>
                </div>
                <h5 className="text">{certification?.degree}</h5>
                <p className="text">{certification?.year}</p>
                <p className="text">{certification.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;

// Data
import { educations, courses } from "data/portfolio";

// SCSS
import "./Qualifications.scss";

const Qualifications = () => {
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

      <h2 className="title">Courses</h2>

      <div className="qualifications">
        <div className="timeline">
          <ul className="list">
            {courses.map((course, index) => (
              <li key={index} className="item">
                <div className="title-img">
                  <img src={course?.logo} alt="IMG" />
                  <h4>{course?.institute}</h4>
                </div>
                <h5 className="text">{course?.degree}</h5>
                <p className="text">{course?.year}</p>
                <p className="text">{course.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;

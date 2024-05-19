import { useEffect } from "react";

// Data
import { contact } from "data/portfolio";

// SCSS
import "./Contact.scss";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="section">
      <h2 className="title">Contact</h2>

      <ul className="contact">
        <li>
          Address :
          <br />
          {contact?.address}
        </li>
        <li>
          Email :
          <br />
          {contact?.email}
        </li>
        <li>
          Mobile No. :
          <br />
          {contact?.mobile}
        </li>
        <li className="email-call-btn">
          <a href={`mailto:${contact.email}`}>
            <span className="btn btn-outline">Email me</span>
          </a>

          <a href={`tel:${contact?.mobile}`}>
            <span className="btn btn-outline">Call me</span>
          </a>
        </li>
        <li></li>
      </ul>
    </section>
  );
};

export default Contact;

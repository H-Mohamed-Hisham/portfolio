// Data
import { about } from "data/portfolio";

// SCSS
import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <a
      href={about?.social?.github}
      className="link footer-link"
      rel="noreferrer"
      target="_blank"
    >
      Created By Mohamed Hisham
    </a>
  </footer>
);

export default Footer;

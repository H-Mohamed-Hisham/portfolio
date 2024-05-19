import { useContext } from "react";
import { MdBrightness2 } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";

// Context
import { ThemeContext } from "contexts/theme";

// CSS
import "./Header.scss";

// Data
import { header } from "data/portfolio";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { homepage, title } = header;

  return (
    <header className="header center">
      <h3>
        {homepage ? (
          <a href={homepage} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <div className="button">
        <Link to="/contact" className="btn btn-outline">
          Contact
        </Link>

        <button
          type="button"
          onClick={toggleTheme}
          className="btn btn-icon nav-theme"
          aria-label="toggle theme"
        >
          {theme === "dark" ? <MdWbSunny /> : <MdBrightness2 />}
        </button>
      </div>
    </header>
  );
};

export default Header;

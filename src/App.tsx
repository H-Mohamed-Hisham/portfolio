import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from "components/Header/Header";
import Navbar from "components/Navbar/Navbar";
import About from "components/About/About";
import Experience from "components/Experience/Experience";
import Projects from "components/Projects/Projects";
import Skills from "components/Skills/Skills";
import Footer from "components/Footer/Footer";

// SCSS
import "./App.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} app`}>
      <Router>
        <Header />
        <Navbar />

        <main>
          <Route exact path="/" component={About} />
          <Route exact path="/experiences" component={Experience} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Experience} />
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

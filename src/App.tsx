import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from "components/Header/Header";
import Navbar from "components/Navbar/Navbar";
import About from "components/About/About";
import Experiences from "components/Experiences/Experiences";
import Projects from "components/Projects/Projects";
import Qualifications from "components/Qualifications/Qualifications";
import Footer from "components/Footer/Footer";
import ProjectDetail from "components/ProjectDetail/ProjectDetail";
import Contact from "components/Contact/Contact";

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
          <Route exact path="/portfolio" component={About} />
          <Route exact path="/experiences" component={Experiences} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/qualifications" component={Qualifications} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/project/:id" component={ProjectDetail} />
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

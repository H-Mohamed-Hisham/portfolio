import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";

// Components
import Header from "components/Header/Header";
import About from "components/About/About";
import Experience from "components/Experience/Experience";
import Projects from "components/Projects/Projects";
import Skills from "components/Skills/Skills";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import Footer from "components/Footer/Footer";

// SCSS
import "./App.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="top" className={`${theme} app`}>
      <Header />

      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;

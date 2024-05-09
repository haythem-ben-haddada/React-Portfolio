import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import Skills from "./components/7-skills/Skills";

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentmode") ?? "dark"
  );
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

  return (
    <div id="up" className="Container">
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Skills theme={theme} />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a
        style={{
          opacity: showScrollBtn ? 1 : 0,
          transition: "1s",
        }}
        href="#up"
      >
        <button className="icon-keyboard_arrow_up scrollup"></button>
      </a>
    </div>
  );
}

export default App;

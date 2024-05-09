import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animations/developer.json";

const Hero = () => {
  return (
    <section id="about" className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img className="avatar" src="./Beveky.png" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">
          Front-End Developer, Founder, and Aspiring Spacefarer.
        </h1>
        <p className="sub-title">
          I'm Haythem Ben Haddada, a dedicated Front-End developer with a
          passion for crafting seamless digital experiences. I've honed my
          skills in Front-End development,
          <br />
          navigating the ever-evolving landscape of web technologies.
        </p>
        <div className="all-icons flex">
          <a
            href="https://twitter.com/im_beveky"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-x"></div>
          </a>
          <a
            href="https://t.me/Beveky"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-telegram"></div>
          </a>
          <a
            href="https://www.instagram.com/haythembenhaddada"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-instagram"></div>
          </a>
          <a
            href="https://github.com/Beveky"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-github"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/haythem-ben-haddada"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-linkedin"></div>
          </a>
          <a href="Resume.pdf" download="Haythem Resume.pdf">
            <button className="btnd">Download CV</button>
          </a>
        </div>
      </div>
      <div className="right-section animations ">
        <Lottie className="contact-animation" animationData={devAnimation} />
      </div>
    </section>
  );
};

export default Hero;

import { useState, useEffect } from "react";
import "./header.css";
import PropTypes from "prop-types";

const Header = ({ theme, setTheme }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header id="head" className="flex">
      <button
        className="menu icon-menu flex"
        onClick={() => {
          setShowModal(true);
        }}
      ></button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#main">Projects</a>
          </li>

          <li>
            <a href="#skills">My Skills</a>
          </li>
          <li>
            <a href="#contact-us">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          //send value to local storage
          localStorage.setItem(
            "currentmode",
            theme === "dark" ? "light" : "dark"
          );

          //get value from local storage
          setTheme(localStorage.getItem("currentmode"));
        }}
        className="mode flex"
      >
        <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>

      {showModal && (
        <div className=" fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-cancel"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <li>
              <a
                onClick={() => {
                  setShowModal(false);
                }}
                href="about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowModal(false);
                }}
                href="#main"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowModal(false);
                }}
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowModal(false);
                }}
                href="#skills"
              >
                My Skills
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowModal(false);
                }}
                href="#contact-us"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
Header.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
export default Header;

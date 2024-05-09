import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#head">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#main">Projects</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>
      </ul>

      <p>© 2023 Haythem Ben Haddada. All rights reserved</p>
    </footer>
  );
};

export default Footer;

import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "./skills.css";
import "react-multi-carousel/lib/styles.css";
import Dmeter1 from "../../assets/img/meter1.svg";
import Dmeter2 from "../../assets/img/meter2.svg";
import Dmeter3 from "../../assets/img/meter3.svg";
import Lmeter1 from "../../assets/img/Lmeter1.svg";
import Lmeter2 from "../../assets/img/Lmeter2.svg";
import Lmeter3 from "../../assets/img/Lmeter3.svg";
import PropTypes from "prop-types";

const Skills = ({ theme }) => {
  const getMeterImage1 = (theme) => {
    // Choose the appropriate image based on the theme
    return theme === "dark" ? Dmeter1 : Lmeter1;
  };
  const getMeterImage2 = (theme) => {
    // Choose the appropriate image based on the theme
    return theme === "dark" ? Dmeter2 : Lmeter2;
  };
  const getMeterImage3 = (theme) => {
    // Choose the appropriate image based on the theme
    return theme === "dark" ? Dmeter3 : Lmeter3;
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
                Hey! Here's a quick overview of my skills. I specialize in both
                front-end and back-end development, merging design finesse with
                technical prowess. Check it out !
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider  flex "
              >
                <div className="item ">
                  <img
                    style={{ width: "150px" }}
                    src={getMeterImage1(theme)}
                    alt="image"
                  />
                  <h1>Front-End</h1>
                </div>
                <div className="item ">
                  <img
                    style={{ width: "150px" }}
                    src={getMeterImage2(theme)}
                    alt="image"
                  />
                  <h1>Back-End</h1>
                </div>
                <div className="item ">
                  <img
                    style={{ width: "150px" }}
                    src={getMeterImage3(theme)}
                    alt="image"
                  />
                  <h1>Figma</h1>
                </div>
                <div className="item ">
                  <img
                    style={{ width: "150px" }}
                    src={getMeterImage1(theme)}
                    alt="image"
                  />
                  <h1>UI/UX Design</h1>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
Skills.propTypes = {
  theme: PropTypes.string.isRequired,
};
export default Skills;

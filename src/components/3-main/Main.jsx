import { useEffect, useState } from "react";
import "./main.css";
import { myProjects } from "../6-data/myProjects";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const [animateCards, setAnimateCards] = useState(true);

  const TypeCategory = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) =>
      item.category.includes(buttonCategory)
    );
    setArr(newArr);
    setAnimateCards(true);
  };

  // Reset animation state after 500ms (matching the CSS transition duration)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateCards(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [arr]);

  return (
    <main id="main" className="flex">
      <section className="flex left-section ">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            TypeCategory("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            TypeCategory("javascript");
          }}
          className={currentActive === "javascript" ? "active" : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            TypeCategory("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>

        <button
          onClick={() => {
            TypeCategory("bootstrap");
          }}
          className={currentActive === "bootstrap" ? "active" : null}
        >
          bootstrap
        </button>

        <button
          onClick={() => {
            TypeCategory("tailwind");
          }}
          className={currentActive === "tailwind" ? "active" : null}
        >
          Tailwind CSS
        </button>

        <button
          onClick={() => {
            TypeCategory("nodeExpress");
          }}
          className={currentActive === "NodeExpress" ? "active" : null}
        >
          Node & Express
        </button>
        <button
          onClick={() => {
            TypeCategory("nextjs");
          }}
          className={currentActive === "Nextjs" ? "active" : null}
        >
          Next.js
        </button>
      </section>

      <section className="right-section flex  ">
        {arr.length > 0 ? (
          arr.map((item, index) => (
            <a href={item.deployedPath}>
              <article
                key={item.imgPath}
                className={`card ${animateCards ? "fade-in" : "fade-in"}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  minHeight: "304px",
                }}
              >
                <img width={266} height={150} src={item.imgPath} alt="" />
                <div style={{ width: "266px" }} className=" box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex ">
                      <a href="#" className="icon-link"></a>
                      <a href="#" className="icon-github"></a>
                    </div>
                    <a href="#" className="link flex">
                      Live Demo
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </article>
            </a>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </section>
    </main>
  );
};

export default Main;

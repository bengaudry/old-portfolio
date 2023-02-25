import { useEffect, useState } from "react";
import { Cursor } from "./modules/Cursor/Cursor";
import { TopBar } from "./modules/TopBar/TopBar";
import { MousePosition } from "./scripts";

export function App() {

  const [mousePosition, setMousePosition] = useState<MousePosition>({x: 0, y: 0});

  useEffect(function() {
    document.addEventListener("mousemove", function(e) {
      setMousePosition({x: e.clientX, y: e.clientY});
    })
  })

  return (
    <>
      <Cursor x={mousePosition.x} y={mousePosition.y} />
      <TopBar />
      <main className="main">
        <section className="hero">
          <div className="responsive" id="hero-responsive">
            <div className="left">
              <h1 className="hero-main-sentence">
                Hey ! I'm Ben,
                <br />a junior dev
              </h1>
            </div>
            <div className="right">
              <ul className="hero-characteristics-list">
                <li className="hero-characteristic">Based in France</li>
                <li className="hero-characteristic">17 years old</li>
                <li className="hero-characteristic">Front-end developer</li>
              </ul>
            </div>
            <a className="discover-scroll-btn" href="#skills">
              <img src="/down-arrow.png" alt="Scroll down" />
            </a>
          </div>
        </section>

        <section className="skills" id="skills">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{ transform: "translateY(10px)" }}
          >
            <path
              fill="#132872"
              fill-opacity="1"
              d="M0,256L34.3,256C68.6,256,137,256,206,234.7C274.3,213,343,171,411,149.3C480,128,549,128,617,138.7C685.7,149,754,171,823,165.3C891.4,160,960,128,1029,106.7C1097.1,85,1166,75,1234,90.7C1302.9,107,1371,149,1406,170.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
          <div className="skills-content">
            <div className="responsive"></div>
          </div>
        </section>

        <section className="second-section" id="second-section">
          <div className="responsive">
            <div className="sub-section">
              <h2 className="big-title">Skills</h2>
              <p>
                As a front-end developer, I need to master a lot of technologies
                that evolves every day. Here are a few :
              </p>
            </div>
            <div className="skills-graph-container">
              <button className="skills-graph-btn" id="skills-left">
                <img src="/angle-gauche.svg" alt="&lt;" />
              </button>
              <div className="skills-graph-scroller">
                <div className="skills-graph">
                  {/*<div className="skills-graph-progress" style="height: 95%;">
                <span className="skills-graph-desc">Css</span>
              </div>
              <div className="skills-graph-progress" style="height: 100%;">
                <span className="skills-graph-desc">Html</span>
              </div>
              <div className="skills-graph-progress" style="height: 90%;">
                <span className="skills-graph-desc">Tailwind</span>
              </div>
              <div className="skills-graph-progress" style="height: 40%;">
                <span className="skills-graph-desc">Bootstrap</span>
              </div>
            </div>
            <div className="skills-graph">
              <div className="skills-graph-progress" style="height: 80%;">
                <span className="skills-graph-desc">TypeScript</span>
              </div>
              <div className="skills-graph-progress" style="height: 95%;">
                <span className="skills-graph-desc">JavaScript</span>
              </div>
              <div className="skills-graph-progress" style="height: 65%;">
                <span className="skills-graph-desc">React</span>
              </div>
              <div className="skills-graph-progress" style="height: 30%;">
                <span className="skills-graph-desc">VueJS</span>
              </div>
              <div className="skills-graph-progress" style="height: 12%;">
                <span className="skills-graph-desc">Svelte</span>
              </div> */}
                </div>
              </div>
              <button className="skills-graph-btn" id="skills-right">
                <img src="/angle-droit.svg" alt=">" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

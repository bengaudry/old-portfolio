import { TopBar } from "../TopBar/TopBar";

export function Main() {
  return (
    <>
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
      </main>
    </>
  );
}

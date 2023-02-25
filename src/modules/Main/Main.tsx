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
            <ul className="hero-characteristics-list">
              <li className="hero-characteristic">Based in France</li>
              <li className="hero-characteristic">17 years old</li>
              <li className="hero-characteristic">Front-end developer</li>
            </ul>
          </div>
        </section>

        <section id="about" style={{ backgroundColor: "#003b3b", padding: "150px 0" }}></section>

        <section id="contact" style={{ padding: "150px 0" }}>
          <div className="inputs-group">
          <h2>Send me a message</h2>
            <div className="input-zone">
              <input type="text" placeholder="Your name" />
            </div>
            <div className="input-zone">
              <input type="text" placeholder="Your email" />
            </div>
            <div className="input-zone">
              <textarea placeholder="Your message" />
            </div>
            <button type="submit" className="cta">
              <span>Send</span>
              <img src="/right-arrow.png" alt="" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

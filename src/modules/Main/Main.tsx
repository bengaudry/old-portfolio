import { Cta } from "../Buttons/Cta";
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

        <section id="about">
          <div className="responsive">
            <div className="side">
              <h2 className="section-title">Hire</h2>
              <p>
                You have a design that you want to turn into a functionnal
                website ? Check out the services I propose on fiverr !
              </p>
            </div>
            <div className="side">
              <img
                src="../../../public/fiverr-cover.webp"
                alt="Fiverr gig cover"
              />
              <Cta
                linkHref="https://fr.fiverr.com/share/1RaWYz"
                type="link"
                target="_blank"
                img={{path: "../../../public/fiverr-icon.png", alt: "Fiverr icon"}}
              >
                See on fiverr
              </Cta>
            </div>
          </div>
        </section>

        <section id="contact">
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

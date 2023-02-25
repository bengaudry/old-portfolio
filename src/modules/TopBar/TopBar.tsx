import { useState } from "react";

export function TopBar() {

  const [isMenuOpened, setMenuOpened] = useState(false)

  return (
    <header className="top-bar">
      <div className="responsive">
        <div className="tb-brand">
          <a href="#">Ben Gaudry</a>
        </div>
        <button className="menu-toggler" onClick={() => setMenuOpened(!isMenuOpened)}>
          <img src="/hamburger.png" alt="Open menu" />
        </button>
        <div className={`${isMenuOpened ? "" : "tb-actions-closed"} tb-actions`}>
          <nav className="tb-nav">
            <ul className="tb-nav-items">
              <li className="tb-nav-item">
                <a href="#skills" className="tb-nav-link">
                  Skills
                </a>
              </li>
              <li className="tb-nav-item">
                <a href="#hire" className="tb-nav-link">
                  Hire
                </a>
              </li>
              <li className="tb-nav-item">
                <a href="#projects" className="tb-nav-link">
                  Projects
                </a>
              </li>
              <li className="tb-nav-item">
                <a href="#contact" className="tb-nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="https://github.com/bengaudry/"
            target="_blank"
            className="cta cta-secondary tb-cta"
          >
            <img src="/github-mark-white.png" alt="See on GitHub" />
          </a>
        </div>
      </div>
    </header>
  );
}

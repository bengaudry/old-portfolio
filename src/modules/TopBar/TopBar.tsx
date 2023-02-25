import { useState } from "react";
import { NavItem } from "./Items/NavItem";

export function TopBar() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<null | number>(null);

  return (
    <header className="top-bar">
      <div className="responsive">
        <div className="tb-brand">
          <a href="#">Ben Gaudry</a>
        </div>
        <button
          className="menu-toggler"
          onClick={() => setMenuOpened(!isMenuOpened)}
        >
          <span>MENU</span>
        </button>
        <div
          className={`${isMenuOpened ? "" : "tb-actions-closed"} tb-actions`}
        >
          <nav className="tb-nav">
            <ul className="tb-nav-items">
              <NavItem
                name="About"
                to="#about"
                setHoveredElement={setHoveredElement}
                hoveredElement={hoveredElement}
                id={1}
              />
              <NavItem
                name="Hire"
                to="#hire"
                setHoveredElement={setHoveredElement}
                hoveredElement={hoveredElement}
                id={2}
              />
              <NavItem
                name="Projects"
                to="#projects"
                setHoveredElement={setHoveredElement}
                hoveredElement={hoveredElement}
                id={3}
              />
              <NavItem
                name="Contact"
                to="#contact"
                setHoveredElement={setHoveredElement}
                hoveredElement={hoveredElement}
                id={4}
              />
            </ul>
          </nav>
          <a
            href="https://github.com/bengaudry/"
            target="_blank"
            className="tb-cta"
          >
            <img src="/github-mark-white.png" alt="See on GitHub" />
          </a>
        </div>
      </div>
    </header>
  );
}

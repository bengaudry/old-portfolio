import { useState } from "react";
import { NavItem } from "./Items/NavItem";

export function TopBar() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<null | number>(null);

  return (
    <header
      className="top-bar"
      data-opened={`${isMenuOpened ? "true" : "false"}`}
    >
      <div className="responsive">
        <div className="tb-brand">
          <a href="#">Ben Gaudry</a>
        </div>
        <button
          className="menu-toggler"
          onClick={() => setMenuOpened(!isMenuOpened)}
        >
          <span>MENU</span>
          <span>CLOSE</span>
        </button>
        <div className="tb-actions">
          <nav className="tb-nav">
            <div className="responsive">
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
                <a
                  href="https://github.com/bengaudry/"
                  target="_blank"
                  className="tb-cta"
                >
                  <img src="/github-mark-white.png" alt="See on GitHub" />
                  See on GitHub
                </a>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

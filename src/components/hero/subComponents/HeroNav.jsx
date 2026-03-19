import React, { useState, forwardRef } from "react";

const HeroNav = forwardRef((props, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav ref={ref} className={`hero-nav ${isMenuOpen ? "menu-open" : ""}`}>
        <a href="#about-me" onClick={toggleMenu}>
          About me
        </a>
        <a href="#skills" onClick={toggleMenu}>
          Skills
        </a>
        <a href="#portfolio" onClick={toggleMenu}>
          Portafolio
        </a>
        <a href="#ContactMe" onClick={toggleMenu}>
          Contact
        </a>
      </nav>
    </>
  );
});

HeroNav.displayName = "HeroNav";
export default HeroNav;

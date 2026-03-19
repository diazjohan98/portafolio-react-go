import React, { useRef } from "react";
import "./Hero.css";

// Importamos el Hook y los Subcomponentes
import { useHeroAnimations } from "./hooks/useHeroAnimations";
import HeroNav from "./subComponents/HeroNav";
import HeroSocials from "./subComponents/HeroSocials";

// Imágenes locales del Hero
import logoJD from "../../assets/hero/jd-logo.png";
import johanPhoto from "../../assets/hero/johan-avatar.JPEG";

const Hero = () => {
  // 1. Declaramos las referencias
  const introRef = useRef(null);
  const nameRef = useRef(null);
  const navRef = useRef(null);
  const footerRef = useRef(null);
  const rightPanelRef = useRef(null);
  const photoRef = useRef(null);

  // 2. Le pasamos las referencias a nuestro Custom Hook para que haga la magia
  useHeroAnimations({
    introRef,
    nameRef,
    navRef,
    footerRef,
    rightPanelRef,
    photoRef,
  });

  // 3. Renderizamos una estructura limpia
  return (
    <div className="hero-container">
      {/* --- Panel Izquierdo --- */}
      <div className="left-panel">
        <header className="hero-header">
          <img src={logoJD} alt="JD Digital Logo" className="hero-logo" />
        </header>

        <main className="main-intro">
          <p ref={introRef} className="intro-text">
            Hi, i am
          </p>
          <h1 ref={nameRef} className="name-text">
            Johan Diaz
          </h1>
          <p className="title-text">Front-end Developer / UI Designer</p>
        </main>

        <HeroSocials ref={footerRef} />
      </div>

      {/* --- Panel Derecho --- */}
      <div className="right-panel" ref={rightPanelRef}>
        <img
          src={johanPhoto}
          alt="Johan Diaz Aquarium"
          className="johan-photo"
          ref={photoRef}
        />
        <div className="photo-overlay"></div>

        <HeroNav ref={navRef} />
      </div>
    </div>
  );
};

export default Hero;

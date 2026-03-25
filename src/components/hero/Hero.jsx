/* src/components/hero/Hero.jsx */
import React, { useRef, useState } from "react"; // 1. Añadimos useState aquí
import "./Hero.css";

// Importamos el Hook y los Subcomponentes
import { useHeroAnimations } from "./hooks/useHeroAnimations";
import HeroNav from "./subComponents/HeroNav";
import HeroSocials from "./subComponents/HeroSocials";
import Preloader from "./subComponents/Preloader";

// Imágenes locales del Hero
import logoJD from "../../assets/hero/jd-logo.png";
import johanPhoto from "../../assets/hero/johan-avatar.JPEG";

const Hero = () => {
  // 2. Estado para el Preloader
  const [isLoading, setIsLoading] = useState(true);

  // Referencias para las animaciones
  const introRef = useRef(null);
  const nameRef = useRef(null);
  const navRef = useRef(null);
  const footerRef = useRef(null);
  const rightPanelRef = useRef(null);
  const photoRef = useRef(null);

  // 3. Pasamos las refs y el estado de carga al Hook
  useHeroAnimations(
    {
      introRef,
      nameRef,
      navRef,
      footerRef,
      rightPanelRef,
      photoRef,
    },
    !isLoading,
  );

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div
        className="hero-container"
        style={{
          visibility: isLoading ? "hidden" : "visible",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
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
    </>
  );
};

export default Hero;

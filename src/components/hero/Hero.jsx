/* src/components/hero/Hero.jsx */
import React, { useRef, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  // Referencias para las animaciones
  const introRef = useRef(null);
  const nameRef = useRef(null);
  const navRef = useRef(null);
  const footerRef = useRef(null);
  const rightPanelRef = useRef(null);
  const photoRef = useRef(null);

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
        {/* Le agregamos position: "relative" al left-panel para ubicar el texto de Scroll */}
        <div className="left-panel" style={{ position: "relative" }}>
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

          {/* --- CONTENEDOR DE ICONOS SOCIALES --- */}
          <div
            style={{
              position: "absolute",
              bottom: "90px" /* <-- Con esto los subimos bastante */,
              left: "10%",
              transform:
                "scale(2.5)" /* <-- AQUÍ ESTÁ LA MAGIA: 1.5 significa 50% más grandes */,
              transformOrigin:
                "left center" /* Evita que al crecer se muevan hacia la derecha */,
            }}
          >
            <HeroSocials ref={footerRef} />
          </div>

          <HeroSocials ref={footerRef} />
        </div>

        {/* --- Panel Derecho --- */}
        <div className="right-panel" ref={rightPanelRef}>
          <img
            src={johanPhoto}
            alt="Johan Diaz"
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

/* src/components/hero/Hero.jsx */
import React, { useRef, useState, useEffect } from "react";
import "./Hero.css";

import { useHeroAnimations } from "./hooks/useHeroAnimations";
import HeroNav from "./subComponents/HeroNav";
import HeroSocials from "./subComponents/HeroSocials";
import Preloader from "./subComponents/Preloader";

import logoJD from "../../assets/hero/jd-logo.png";
import johanPhoto from "../../assets/hero/johan-avatar.jpg";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const introRef = useRef(null);
  const nameRef = useRef(null);
  const navRef = useRef(null);
  const footerRef = useRef(null);
  const rightPanelRef = useRef(null);
  const photoRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = johanPhoto;
    img.onload = () => setIsImageLoaded(true);
  }, []);

  useHeroAnimations(
    {
      introRef,
      nameRef,
      navRef,
      footerRef,
      rightPanelRef,
      photoRef,
      waveRef,
    },
    !isLoading && isImageLoaded,
  );

  return (
    <>
      {isLoading && (
        <Preloader
          onComplete={() => {
            if (isImageLoaded) setIsLoading(false);
          }}
        />
      )}

      <div
        className="hero-container"
        style={{
          visibility: isLoading ? "hidden" : "visible",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        <div className="left-panel" style={{ position: "relative" }}>
          <header className="hero-header">
            <img src={logoJD} alt="JD Digital Logo" className="hero-logo" />
          </header>

          <main className="main-intro">
            <p ref={introRef} className="intro-text">
              Hi, I am
            </p>
            <h1 ref={nameRef} className="name-text">
              Johan Diaz
            </h1>
            <p className="title-text">Software Developer / React & Go</p>
            <p className="description-text mt-4 text-gray-600">
              Building high-performance and scalable web applications.
            </p>
          </main>

          <div className="social-wrapper">
            <HeroSocials ref={footerRef} />
          </div>
        </div>

        {/* --- Panel Derecho --- */}
        <div className="right-panel" ref={rightPanelRef}>
          {/* ✨ SVG de la Ola ✨ */}
          <div className="wave-container">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="wave-svg"
            >
              <path
                ref={waveRef}
                d="M-7.62,100.15 C170.14,142.59 303.89,-20.22 505.36,120.88 L500.00,150.00 L0.00,150.00 Z"
                className="wave-path"
              ></path>
            </svg>
          </div>

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

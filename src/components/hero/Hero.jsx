/* src/components/hero/Hero.jsx */
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Hero.css";

// Importa tus imágenes reales
import logoJD from "../../assets/hero/jd-logo.png";
// Asegúrate de usar tu foto del acuario IMG_2905.jpg
import johanPhoto from "../../assets/hero/johan-avatar.JPEG";
// Importa iconos sociales (asegúrate de tenerlos descargados)
import mailIcon from "../../assets/hero/mail-icon.png";
import githubIcon from "../../assets/hero/github-icon.png";
import linkedinIcon from "../../assets/hero/linkedin-icon.png";

const Hero = () => {
  // Creamos referencias (Refs) para los elementos que queremos animar.
  const introRef = useRef(null);
  const nameRef = useRef(null);
  const navRef = useRef(null);
  const footerRef = useRef(null);

  const rightPanelRef = useRef(null);
  const photoRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useLayoutEffect para configuraciones visuales de GSAP.
  useLayoutEffect(() => {
    // 1. Creamos el contexto de GSAP
    let ctx = gsap.context(() => {
      // Línea de tiempo de la animación de ENTRADA
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.8 },
      });

      tl.fromTo(
        navRef.current.parentNode,
        { opacity: 0 },
        { opacity: 1, delay: 0.3 },
      );
      tl.fromTo(
        introRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.5",
      );
      tl.fromTo(
        nameRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.6",
      );
      tl.fromTo(
        navRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0 },
        "-=0.7",
      );
      tl.fromTo(footerRef.current, { opacity: 0 }, { opacity: 1 }, "-=0.8");

      // Animaciones de flotado infinito
      gsap.to(introRef.current, {
        y: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 0.4,
        delay: 1.5,
      });

      gsap.to(nameRef.current, {
        y: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 1.0,
        delay: 1.6,
      });

      gsap.to(".title-text", {
        y: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 0.9,
        delay: 1.7,
      });
    }); // Aquí se cierra gsap.context

    // 2. Lógica del Parallax del ratón
    const mouseMoveParallax = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const moveFactor = 15;

      const xMove = (clientX - innerWidth / 2) / moveFactor;
      const yMove = (clientY - innerHeight / 2) / moveFactor;

      gsap.to(photoRef.current, {
        x: xMove,
        y: yMove,
        duration: 1,
        ease: "power2.out",
      });
    };

    // Agregamos el escuchador de eventos
    const rightPanel = rightPanelRef.current;
    if (rightPanel) {
      rightPanel.addEventListener("mousemove", mouseMoveParallax);
    }

    // 3. ÚNICO return de limpieza (SÚPER IMPORTANTE)
    return () => {
      ctx.revert(); // Limpiamos GSAP
      if (rightPanel) {
        rightPanel.removeEventListener("mousemove", mouseMoveParallax); // Limpiamos el ratón
      }
    };
  }, []); // Cierre correcto del useLayoutEffect

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

        <footer ref={footerRef} className="hero-footer">
          <a href="#contacto">
            <img src={mailIcon} alt="Email" className="social-icon" />
          </a>
          <a href="#github">
            <img src={githubIcon} alt="Github" className="social-icon" />
          </a>
          <a href="#linkedin">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
        </footer>
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

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Agregamos la clase dinámica 'menu-open' si el estado es true */}
        <nav
          ref={navRef}
          className={`hero-nav ${isMenuOpen ? "menu-open" : ""}`}
        >
          {/* Agregamos onClick a cada enlace para que el menú se cierre al seleccionar una opción */}
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
      </div>
    </div>
  );
};

export default Hero;

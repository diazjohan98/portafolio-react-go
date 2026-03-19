/* src/components/hero/Hero.jsx */
import React, { useLayoutEffect, useRef } from "react";
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
  const navRef = useRef(null); // Referencia para la navegación central
  const footerRef = useRef(null); // Referencia para los iconos sociales

  // useLayoutEffect para configuraciones visuales de GSAP.
  useLayoutEffect(() => {
    // Contexto de GSAP vital para limpieza.
    let ctx = gsap.context(() => {
      // Definimos la línea de tiempo de la animación de ENTRADA
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.8 },
      });

      // Animaciones de entrada que ya tenías (aparecer)
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

      // ==========================================
      // 🌊 NUEVAS ANIMACIONES CONTINUAS (El "Flow")
      // ==========================================

      // 1. El "Hi, i am" flotando suavemente de arriba a abajo
      gsap.to(introRef.current, {
        y: 8, // Sube y baja 8 pixeles
        repeat: -1, // -1 significa infinito
        yoyo: true, // Hace el efecto de ida y vuelta (respiración)
        ease: "sine.inOut",
        duration: 2,
        delay: 1.5, // Espera a que termine de aparecer para empezar a flotar
      });

      // 2. Tu nombre (Johan Diaz) flotando con un ritmo ligeramente distinto
      gsap.to(nameRef.current, {
        y: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2.5, // Un poco más lento para que se vea orgánico
        delay: 1.6,
      });

      // 3. El título de UI Designer flotando sutilmente
      gsap.to(".title-text", {
        y: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2.2,
        delay: 1.7,
      });
    });

    // Función de limpieza
    return () => ctx.revert();
  }, []); // El array vacío significa que esto solo se ejecuta al montar el componente.

  return (
    <div className="hero-container">
      {/* --- Panel Izquierdo (Gris Claro) --- */}
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

      {/* --- Panel Derecho (Tu Foto + Oscurecimiento + clip-path) --- */}
      <div className="right-panel">
        {/* Tu foto del acuario real! */}
        <img
          src={johanPhoto}
          alt="Johan Diaz Aquarium"
          className="johan-photo"
        />
        {/* Superposición oscurecedora para garantizar contraste de texto blanco */}
        <div className="photo-overlay"></div>

        {/* Navegación central (sobre la foto oscurecida) */}
        <nav ref={navRef} className="hero-nav">
          <a href="#about-me">About me</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portafolio</a>
          <a href="#ContactMe">Contact</a>
        </nav>

        {/* Botón 'CONTACT ME' (esquina superior derecha de este panel) */}
      </div>
    </div>
  );
};

export default Hero;

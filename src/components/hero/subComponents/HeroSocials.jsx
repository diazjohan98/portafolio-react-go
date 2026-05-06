import React, { forwardRef } from "react";
import gsap from "gsap"; // No olvides importar gsap
import mailIcon from "../../../assets/hero/mail-icon.png";
import githubIcon from "../../../assets/hero/github-icon.png";
import linkedinIcon from "../../../assets/hero/linkedin-icon.png";

const HeroSocials = forwardRef((props, ref) => {
  // Animación cuando el mouse ENTRA al ícono
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.15, // Crece un 15%
      y: -5, // Salta 5px hacia arriba
      opacity: 1, // Se pone 100% visible
      filter: "grayscale(0%)", // Recupera su color original (si tienen)
      duration: 0.4,
      ease: "back.out(2)", // Este es el efecto de "rebote" elástico
    });
  };

  // Animación cuando el mouse SALE del ícono
  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1, // Vuelve a su tamaño normal
      y: 0, // Baja a su posición original
      opacity: 0.6, // Vuelve a ser un poco transparente
      filter: "grayscale(100%)", // Vuelve a blanco y negro
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <footer
      ref={ref}
      className="hero-footer"
      style={{ display: "flex", gap: "20px" }}
    >
      {/* Aplicamos los eventos a la etiqueta <a> para que anime todo el bloque */}
      <a
        href="#contacto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: "inline-block" }} // Importante para que el transform 'y' funcione bien en enlaces
      >
        <img src={mailIcon} alt="Email" className="social-icon" />
      </a>

      <a
        href="https://github.com/diazjohan98"
        target="_blank"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: "inline-block" }}
      >
        <img src={githubIcon} alt="Github" className="social-icon" />
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/johan98vdiaz/"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: "inline-block" }}
      >
        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
      </a>
    </footer>
  );
});

HeroSocials.displayName = "HeroSocials";
export default HeroSocials;

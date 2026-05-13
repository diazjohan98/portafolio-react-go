import { useLayoutEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Registramos el plugin
gsap.registerPlugin(TextPlugin);

export const useHeroAnimations = (refs, start) => {
  const { nameRef, navRef, footerRef, rightPanelRef, photoRef, waveRef } = refs;

  useLayoutEffect(() => {
    if (!start) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      // 1. Vaciamos el nombre inicialmente
      gsap.set(nameRef.current, { text: "" });

      // 2. Animaciones de entrada del layout (Fondo, Logo, Navegación)
      if (navRef.current) {
        tl.fromTo(
          navRef.current.parentNode,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
        );
      }

      tl.fromTo(
        rightPanelRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1.5 },
        0,
      );

      tl.fromTo(
        ".hero-logo",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        0.5, // Aparece al medio segundo
      )
        .fromTo(
          navRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0 },
          0.8,
        )
        .fromTo(footerRef.current, { opacity: 0 }, { opacity: 1 }, 1);

      // ✨ 3. EFECTO MÁQUINA DE ESCRIBIR INFINITO ✨
      // Lo hacemos con un gsap.to independiente para que no bloquee la línea de tiempo
      gsap.to(nameRef.current, {
        duration: 1.5,
        text: "Johan Diaz",
        ease: "none",
        repeat: -1, // Bucle infinito
        yoyo: true, // Va en reversa (efecto de borrado)
        repeatDelay: 2, // Se queda quieto 2 segundos con el nombre escrito antes de borrar
        delay: 0.5, // Espera medio segundo al cargar la página antes de empezar a escribir
      });

      // --- 4. ANIMACIÓN DE LA OLA ---
      if (waveRef && waveRef.current) {
        const waveTl = gsap.timeline({
          repeat: -1,
          yoyo: true,
          defaults: { ease: "sine.inOut" },
        });

        waveTl
          .to(waveRef.current, {
            duration: 5,
            attr: {
              d: "M-15.52,65.62 C145.31,160.36 345.10,-45.88 512.13,110.02 L500.00,150.00 L0.00,150.00 Z",
            },
          })
          .to(waveRef.current, {
            duration: 4,
            attr: {
              d: "M-10.52,85.62 C180.31,120.36 280.10,30.88 505.13,90.02 L500.00,150.00 L0.00,150.00 Z",
            },
          });

        gsap.to(".wave-container", {
          y: "-=20",
          x: "+=15",
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // --- 5. ELEMENTOS FLOTANTES (Solo el "Software Developer") ---
      const floatingItems = [{ ref: ".title-text", y: 5, dur: 0.9, del: 1.7 }];

      floatingItems.forEach((item) => {
        gsap.to(item.ref, {
          y: item.y,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: item.dur,
          delay: item.del,
        });
      });

      // --- 6. PARALLAX CON EL MOUSE ---
      const mouseMoveParallax = (e) => {
        const xMove = (e.clientX - window.innerWidth / 2) / 15;
        const yMove = (e.clientY - window.innerHeight / 2) / 15;

        gsap.to(photoRef.current, {
          x: xMove,
          y: yMove,
          duration: 1.2,
          ease: "power2.out",
        });
      };

      const rightPanel = rightPanelRef.current;
      if (rightPanel) {
        rightPanel.addEventListener("mousemove", mouseMoveParallax);
      }

      return () => {
        if (rightPanel)
          rightPanel.removeEventListener("mousemove", mouseMoveParallax);
      };
    });

    return () => ctx.revert();
  }, [start]);
};

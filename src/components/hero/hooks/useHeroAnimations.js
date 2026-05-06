import { useLayoutEffect } from "react";
import gsap from "gsap";

export const useHeroAnimations = (refs, start) => {
  // 1. Desestructuramos la nueva ref: waveRef
  const {
    introRef,
    nameRef,
    navRef,
    footerRef,
    rightPanelRef,
    photoRef,
    waveRef,
  } = refs;

  useLayoutEffect(() => {
    if (!start) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

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
        introRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.2",
      )
        .fromTo(
          nameRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.7",
        )
        .fromTo(
          ".hero-logo",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1 },
          "-=0.8",
        )
        .fromTo(
          navRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0 },
          "-=0.7",
        )
        .fromTo(footerRef.current, { opacity: 0 }, { opacity: 1 }, "-=0.8");

      // --- AQUÍ VA EL IF DE LA OLA ---
      if (waveRef && waveRef.current) {
        const waveTl = gsap.timeline({
          repeat: -1, // Infinito
          yoyo: true, // Va y viene
          defaults: { ease: "sine.inOut" }, // Movimiento suave
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
          y: "-=20", // Sube 20px
          x: "+=15", // Se mueve 15px a la derecha
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
      // -------------------------------

      const floatingItems = [
        { ref: introRef.current, y: 8, dur: 0.8, del: 1.5 },
        { ref: nameRef.current, y: 6, dur: 1.0, del: 1.6 },
        { ref: ".title-text", y: 5, dur: 0.9, del: 1.7 },
      ];

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

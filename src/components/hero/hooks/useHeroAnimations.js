import { useLayoutEffect } from "react";
import gsap from "gsap";

export const useHeroAnimations = (refs, start) => {
  const { introRef, nameRef, navRef, footerRef, rightPanelRef, photoRef } =
    refs;

  useLayoutEffect(() => {
    if (!start) return;
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.8 },
      });

      // Verificamos que navRef exista para evitar errores al cargar
      if (navRef.current) {
        tl.fromTo(
          navRef.current.parentNode,
          { opacity: 0 },
          { opacity: 1, delay: 0.3 },
        );
      }
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
        ".hero-logo",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5 },
        "-=0.2",
      );

      tl.fromTo(
        navRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0 },
        "-=0.7",
      );
      tl.fromTo(footerRef.current, { opacity: 0 }, { opacity: 1 }, "-=0.8");

      // Animaciones infinitas
      gsap.to(introRef.current, {
        y: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 0.8,
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
    });

    // Lógica del Parallax
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

    const rightPanel = rightPanelRef.current;
    if (rightPanel) {
      rightPanel.addEventListener("mousemove", mouseMoveParallax);
    }

    return () => {
      ctx.revert();
      if (rightPanel)
        rightPanel.removeEventListener("mousemove", mouseMoveParallax);
    };
  }, [introRef, nameRef, navRef, footerRef, rightPanelRef, photoRef, start]);
};

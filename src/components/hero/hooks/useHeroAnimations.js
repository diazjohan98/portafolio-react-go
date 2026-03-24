import { useLayoutEffect } from "react";
import gsap from "gsap";

export const useHeroAnimations = (refs, start) => {
  const { introRef, nameRef, navRef, footerRef, rightPanelRef, photoRef } =
    refs;

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

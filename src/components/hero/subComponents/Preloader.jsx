import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import jdLogoPreloader from "../../../assets/hero/logo-negro.png";

const Preloader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.fromTo(
        logoRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1.5, opacity: 1, duration: 1, ease: "back.out(1.7)" }, // 1.5 para que sea más grande
      )
        .to(logoRef.current, {
          scale: 1.6,
          duration: 0.6,
          repeat: 1,
          yoyo: true,
          ease: "sine.inOut",
        })
        .to(
          logoRef.current,
          {
            x: "-40vw",
            y: "-40vh",
            scale: 0.5,
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "+=0.2",
        )
        // 4. La cortina sube
        .to(
          loaderRef.current,
          {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
          },
          "-=0.4",
        );
    });
    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="preloader-container" ref={loaderRef}>
      <img
        src={jdLogoPreloader}
        alt="JD Digital Logo Loading"
        className="preloader-logo"
        ref={logoRef}
      />
    </div>
  );
};

export default Preloader;

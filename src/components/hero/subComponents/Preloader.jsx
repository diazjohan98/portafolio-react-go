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
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
      )
        .to(logoRef.current, {
          scale: 1.1,
          duration: 1.2,
          ease: "sine.inOut",
        })
        .to(logoRef.current, {
          scale: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power4.in",
        })
        .to(
          loaderRef.current,
          {
            opacity: 0,
            display: "none",
            duration: 0.5,
            ease: "none",
          },
          "-=0.4",
        )
        .to(logoRef.current, {
          scale: 60,
          opacity: 0,
          filter: "blur(20px)",
          duration: 0.8,
          ease: "power4.in",
        });
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

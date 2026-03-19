import React, { forwardRef } from "react";
import mailIcon from "../../../assets/hero/mail-icon.png";
import githubIcon from "../../../assets/hero/github-icon.png";
import linkedinIcon from "../../../assets/hero/linkedin-icon.png";

const HeroSocials = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="hero-footer">
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
  );
});

HeroSocials.displayName = "HeroSocials";
export default HeroSocials;

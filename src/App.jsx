import React, { Suspense, lazy } from "react";
import Hero from "./components/hero/Hero";
import SkillsSection from "./components/skills/SkillsSection";
import PortafolioSection from "./components/portafolio/PortafolioSection";
import ContactSection from "./components/contact/ContactSection";

import "./App.css";
const AboutSection = lazy(() => import("./components/about/AboutSection"));

function App() {
  return (
    <div className="App">
      <Hero />
      <Suspense fallback={<div className="bg-black h-screen" />}>
        <AboutSection />
      </Suspense>
      <SkillsSection />
      <PortafolioSection />
      <ContactSection />
    </div>
  );
}

export default App;

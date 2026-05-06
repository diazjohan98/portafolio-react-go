import React, { Suspense, lazy } from "react";
import Hero from "./components/hero/Hero";
import SkillsSection from "./components/skills/SkillsSection";

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
    </div>
  );
}

export default App;

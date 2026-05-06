import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registramos el plugin de GSAP
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  // 1. Creamos una referencia para la sección About Me
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animación para la franja oscura (DIAZ DIGITAL)
      gsap.from(".banner-content > *", {
        scrollTrigger: {
          trigger: ".banner-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // 2. Animación para el cuadro de ABOUT ME
      gsap.from(".about-title-box", {
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      // 3. Animación para el texto de introducción y botón
      gsap.from(".about-intro > *", {
        scrollTrigger: {
          trigger: ".about-intro",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // 4. Animación escalonada para los 3 pilares
      gsap.from(".pillar-card", {
        scrollTrigger: {
          trigger: ".pillars-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 2. Función para hacer el scroll suave al hacer clic en "READ MORE"
  const scrollToAbout = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={sectionRef} id="about-me">
      {/* --- FRANJA OSCURA: DIAZ DIGITAL --- */}
      <section className="banner-container relative bg-[#151515] text-white py-20 px-8 overflow-hidden">
        {/* Letras gigantes de fondo */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 opacity-5 text-[20rem] font-black leading-none rotate-12 select-none pointer-events-none">
          IT
        </div>

        <div className="banner-content max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl font-bold tracking-[0.2em] mb-6 uppercase">
            Diaz Digital
          </h2>
          <br />
          <p className="text-sm text-gray-400 max-w-3xl mb-8 leading-relaxed">
            So, here’s the deal with Digital Diaz. It's my personal brand, but
            mostly it's just the space where I build web apps that actually
            work. Being a Systems Technologist gave me the theory, but spending
            hours writing front-end code taught me the reality. People want
            sites that look good, and I get that. But if the code behind the
            scenes is a mess, everything eventually breaks. I just focus on
            keeping things incredibly clean, fast, and useful for the business.
            Period.
          </p>
          <br />
          {/* 3. Agregamos el evento onClick al botón */}
          <button
            onClick={scrollToAbout}
            className="flex items-center gap-4 text-xs font-bold tracking-widest hover:text-gray-300 transition-colors"
          >
            <span className="w-[2px] h-4 bg-white"></span>
            READ MORE
            <span className="w-[2px] h-4 bg-white"></span>
          </button>
        </div>
      </section>

      {/* 4. Asignamos la referencia a la sección About */}
      <section
        ref={aboutMeRef}
        className="about-container bg-[#e5e5e5] text-black py-24 px-8 flex flex-col items-center"
      >
        <div className="about-title-box border-4 border-black px-12 py-5 mb-12">
          <h2 className="text-3xl font-black tracking-[0.3em] uppercase">
            About Me
          </h2>
        </div>
        <br />
        <div className="about-intro flex flex-col items-center mb-16">
          <p className="max-w-3xl text-center text-sm font-medium leading-relaxed text-gray-800 mb-8">
            I’ve been building user interfaces for a while now. React and Vue
            are my main daily tools, though honestly, I just love solving the
            puzzle of a tricky layout. I’m the kind of dev who gets annoyed when
            a site isn't fully accessible or if a page takes three seconds to
            load. Working in agile setups is great because we get to bounce
            ideas around and fix nasty bugs together. Simply put, I like
            building things people actually want to use.
          </p>
          <br />
          {/* 5. Cambiamos el botón a un <a> tag para el enlace a LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tu-url-de-linkedin-aqui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-xs font-bold tracking-widest hover:text-gray-600 transition-colors cursor-pointer"
          >
            <span className="w-[2px] h-4 bg-black"></span>
            EXPLORE
            <span className="w-[2px] h-4 bg-black"></span>
          </a>
          <br />
        </div>

        {/* Separador decorativo */}
        <div className="flex items-center gap-3 mb-20 opacity-50">
          <div className="w-16 h-[2px] bg-black"></div>
          <div className="flex gap-1 text-black font-black tracking-tighter italic">
            ///\\\
          </div>
          <div className="w-16 h-[2px] bg-black"></div>
        </div>

        {/* Pilares */}
        <div className="pillars-container max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
          {/* Design */}
          <div className="pillar-card flex flex-col items-center text-center">
            <div className="text-3xl mb-4 opacity-20">✏️</div>
            <h3 className="font-bold tracking-[0.2em] mb-4 uppercase">
              Design
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed max-w-sm">
              UI/UX Implementation You know how a design looks perfect in Figma,
              but the coded version ends up looking slightly weird? My job is to
              stop that from happening. I take the mockups and turn them into
              real, working code. I always build for mobile first. Once that
              feels right, scaling it up to desktop with CSS Grid is pretty
              easy. The whole point is making the live site look exactly like
              what the designer imagined.
            </p>
          </div>

          {/* Development */}
          <div className="pillar-card flex flex-col items-center text-center">
            <div className="text-3xl mb-4 opacity-20">⚙️</div>
            <h3 className="font-bold tracking-[0.2em] mb-4 uppercase">
              Engineering & Development
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed max-w-sm">
              Day in and day out, I'm writing JavaScript. Single Page
              Applications are pretty much my bread and butter right now.
              Managing state can get out of hand quickly if you aren't careful,
              so I try to keep the architecture extremely straightforward. I
              pull data from REST APIs, hook it all up, and make sure every
              change is tracked. No magic tricks, just solid code that won't
              give the next developer a headache.
            </p>
          </div>

          {/* Maintenance */}
          <div className="pillar-card flex flex-col items-center text-center md:col-span-2">
            <div className="text-3xl mb-4 opacity-20">🔧</div>
            <h3 className="font-bold tracking-[0.2em] mb-4 uppercase">
              Maintenance & Performance
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed max-w-sm">
              Pushing to production is literally just the start. The real
              challenge is keeping the app fast over time. I rely on lazy
              loading and cutting down bundle sizes so users aren't left staring
              at loading spinners. Bugs happen, that's just web development.
              That's why I write tests and dig into DevTools to catch weird
              glitches early. I hate returning to a project months later and not
              understanding my own code, so I keep it spotless.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

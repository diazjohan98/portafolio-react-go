import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import jdLogo from "../../assets/hero/jd-logo.png";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animación del Logo de Fondo (Flote suave y respiración)
      gsap.to(logoRef.current, {
        y: -20,
        rotation: 2,
        scale: 1.05,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. Entrada del Título
      gsap.from(".contact-title-box", {
        scrollTrigger: {
          trigger: ".contact-title-box",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)",
      });

      // 3. Entrada de la Información
      gsap.from(infoRef.current.children, {
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
        },
        x: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });

      // 4. Entrada del Formulario
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
        x: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full flex flex-col items-center bg-[#e5e5e5] text-black overflow-hidden"
    >
      {/* FONDO ANIMADO LOGO */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <img
          ref={logoRef}
          src={jdLogo}
          alt="JD Logo Background"
          className="w-[90vw] md:w-[45vw] opacity-[0.04] object-contain grayscale"
        />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      {/* Redujimos a max-w-4xl para forzar el centrado absoluto */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-24 pb-20 flex flex-col items-center">
        {/* Título */}
        <div className="contact-title-box border-4 border-black px-10 py-4 mb-8 bg-transparent">
          <h2 className="text-2xl md:text-3xl font-black tracking-[0.3em] uppercase">
            Contact
          </h2>
        </div>
        <br />
        {/* Subtítulo */}
        <p className="text-center text-xs md:text-sm font-medium max-w-2xl text-gray-700 mb-6">
          Ready to build the next great web experience? Let's talk about your
          project. I am available to discuss Software Engineering and front-end
          development opportunities that require scalability and high quality.
        </p>
        <br />
        {/* Divisor Decorativo */}
        <div className="flex items-center justify-center gap-2 mb-16 text-black font-black tracking-widest">
          <span>———</span>
          <span className="text-lg">\\\\///</span>
          <span>———</span>
        </div>
        <br />
        {/* INFO + FORMULARIO (Ahora con mitades exactas 50/50) */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-stretch gap-12 md:gap-16">
          {/* Columna Izquierda: Información (md:w-1/2 asegura el 50%) */}
          <div
            ref={infoRef}
            className="flex flex-col justify-center gap-8 w-full md:w-1/2"
          >
            <div className="flex items-center gap-5 group">
              <svg
                className="w-7 h-7 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <div>
                <span className="font-black text-xs tracking-[0.2em] uppercase block mb-1">
                  Email
                </span>
                <a
                  href="mailto:jsvd3032@gmail.com"
                  className="text-gray-600 hover:text-black transition-colors font-mono text-sm"
                >
                  jsvd3032@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <svg
                className="w-7 h-7 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <div>
                <span className="font-black text-xs tracking-[0.2em] uppercase block mb-1">
                  Teléfono
                </span>
                <a
                  href="tel:+573108644297"
                  className="text-gray-600 hover:text-black transition-colors font-mono text-sm"
                >
                  +57 3108644297
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <svg
                className="w-7 h-7 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <div>
                <span className="font-black text-xs tracking-[0.2em] uppercase block mb-1">
                  Ubicación
                </span>
                <span className="text-gray-600 font-mono text-sm">
                  Tuluá, Colombia
                </span>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <svg
                className="w-7 h-7 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <div>
                <span className="font-black text-xs tracking-[0.2em] uppercase block mb-1">
                  LinkedIn
                </span>
                <a
                  href="https://linkedin.com/in/johanDiaz"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-black transition-colors font-mono text-sm"
                >
                  /in/johanDiaz
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <svg
                className="w-7 h-7 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
              <div>
                <span className="font-black text-xs tracking-[0.2em] uppercase block mb-1">
                  GitHub
                </span>
                <a
                  href="https://github.com/diazjohan98"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-black transition-colors font-mono text-sm"
                >
                  /diazjohan98
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario (md:w-1/2 asegura el otro 50%) */}
          <form
            ref={formRef}
            action="https://formspree.io/f/xzdowbdw"
            method="POST"
            className="w-full md:w-1/2 flex flex-col gap-5 bg-white p-8 md:p-10 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <h3 className="font-black text-xl tracking-widest uppercase mb-2">
              Send a Message
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border-b-2 border-gray-400 focus:border-black py-3 outline-none font-mono text-sm transition-colors"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-transparent border-b-2 border-gray-400 focus:border-black py-3 outline-none font-mono text-sm transition-colors"
            />

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              required
              rows="4"
              className="w-full bg-transparent border-b-2 border-gray-400 focus:border-black py-3 outline-none font-mono text-sm transition-colors resize-none mt-2"
            ></textarea>

            <button
              type="submit"
              className="mt-6 w-full bg-black text-white font-black tracking-[0.2em] uppercase py-4 hover:bg-gray-800 transition-all active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_0px_rgba(100,100,100,1)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER OSCURO */}
      <footer className="w-full bg-[#111111] text-white pt-20 pb-12 flex flex-col items-center mt-10 z-10 relative">
        <button
          onClick={scrollToTop}
          className="flex flex-col items-center gap-3 group hover:text-gray-400 transition-colors mb-12"
        >
          <svg
            className="w-7 h-7 group-hover:-translate-y-2 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
          <span className="text-xs md:text-sm font-black tracking-[0.3em] uppercase">
            Back to Top
          </span>
        </button>
        <br />
        <div className="flex items-center gap-8 mb-10">
          <a
            href="#"
            className="hover:-translate-y-1 hover:text-gray-400 transition-all"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/johanDiaz"
            className="hover:-translate-y-1 hover:text-gray-400 transition-all"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:-translate-y-1 hover:text-gray-400 transition-all"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="mailto:jsvd3032@gmail.com"
            className="hover:-translate-y-1 hover:text-gray-400 transition-all"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </a>
        </div>
        <br />
        <p className="text-xs text-gray-500 font-medium">
          @2026 Johan Sebastian Vasquez Diaz All Rights Reserved.
        </p>
      </footer>
    </section>
  );
}

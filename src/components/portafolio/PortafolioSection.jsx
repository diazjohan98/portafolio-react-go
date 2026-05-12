import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GitHubCalendar } from "react-github-calendar";

gsap.registerPlugin(ScrollTrigger);

export default function PortafolioSection() {
  const getInitialCount = () => {
    if (typeof window !== "undefined") {
      // Si es celular (ancho menor a 768px) mostramos 4. Si es PC, mostramos 6.
      return window.innerWidth < 768 ? 4 : 6;
    }
    return 6;
  };

  const [activeFilter, setActiveFilter] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(getInitialCount()); // Iniciamos mostrando 4 proyectos
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  // La data real de tus repositorios
  const projects = [
    {
      id: 1,
      title: "pizza tracker.",
      categories: ["FRONTEND", "BACKEND"],
      tech: "React, Golang, SSE",
      description:
        "Sistema de rastreo de órdenes en tiempo real con alta concurrencia.",
      image:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000&auto=format&fit=crop",
      links: [
        {
          label: "FRONTEND",
          url: "https://github.com/diazjohan98/pizza-tracker-frontend.git",
        },
        {
          label: "BACKEND",
          url: "https://github.com/diazjohan98/pizza-tracker-backend.git",
        },
      ],
    },
    {
      id: 2,
      title: "task dashboard.",
      categories: ["FRONTEND", "BACKEND"],
      tech: "Angular, Go, REST API",
      description:
        "Panel de gestión de tareas con arquitectura cliente-servidor.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
      links: [
        {
          label: "FRONTEND",
          url: "https://github.com/diazjohan98/task-dashboard-angular.git",
        },
        {
          label: "BACKEND",
          url: "https://github.com/diazjohan98/REST-API-GO.git",
        },
      ],
    },
    {
      id: 4,
      title: "go & mysql.",
      categories: ["BACKEND"],
      tech: "Golang, MySQL",
      description:
        "API RESTful con operaciones CRUD utilizando Go nativo y base de datos relacional.",
      image:
        "https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=1000&auto=format&fit=crop",
      links: [
        {
          label: "GITHUB",
          url: "https://github.com/diazjohan98/Proyecto-Go-MySQL.git",
        },
      ],
    },
    {
      id: 5,
      title: "meteoritos.",
      categories: ["BACKEND"],
      tech: "Python, Pygame",
      description: "Juego arcade clásico de esquivar y destruir asteroides.",
      image:
        "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=1000&auto=format&fit=crop",
      links: [
        {
          label: "GITHUB",
          url: "https://github.com/diazjohan98/Juego-Meteoritos.git",
        },
      ],
    },
    {
      id: 6,
      title: "portfolio react.",
      categories: ["FRONTEND"],
      tech: "React, GSAP, Tailwind",
      description:
        "Portafolio personal interactivo con animaciones avanzadas y diseño minimalista.",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      links: [
        {
          label: "GITHUB",
          url: "https://github.com/diazjohan98/portafolio-react-go.git",
        },
      ],
    },
    {
      id: 7,
      title: "countries app.",
      categories: ["FRONTEND"],
      tech: "React, API Rest, Netlify",
      description:
        "Aplicación web para explorar información de países consumiendo una API externa en tiempo real.",
      image:
        "https://images.unsplash.com/photo-1651421479704-470a78eef530?q=80&w=1470&auto=format&fit=crop",
      links: [
        { label: "DEMO", url: "https://regal-chebakia-3ced95.netlify.app" },
        {
          label: "GITHUB",
          url: "https://github.com/diazjohan98/Countries-app.git",
        },
      ],
    },
  ];

  useEffect(() => {
    setVisibleCount(getInitialCount());
  }, [activeFilter]);

  const filteredProjects = projects.filter((project) =>
    activeFilter === "ALL" ? true : project.categories.includes(activeFilter),
  );
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    const loadAmount = window.innerWidth < 768 ? 4 : 3;
    setVisibleCount((prev) => prev + loadAmount);
  };

  // 1. Animaciones Base (Hero, Título y GitHub)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax en las montañas
      gsap.to(".portfolio-bg", {
        scrollTrigger: {
          trigger: ".portfolio-hero",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: "20%",
        ease: "none",
      });

      // Entrada del título Portafolio
      gsap.from(".portfolio-title-box", {
        scrollTrigger: {
          trigger: ".portfolio-hero",
          start: "top 75%",
        },
        y: 80,
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.5)",
      });

      // Entrada del Calendario de GitHub
      gsap.from(".github-section", {
        scrollTrigger: {
          trigger: ".github-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "back.out(1.2)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 2. Animaciones de las Tarjetas (Se ejecuta al cambiar filtro o dar clic en "Ver más")
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 40, rotationX: -15, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.5)",
          clearProps: "all",
          onComplete: () => ScrollTrigger.refresh(),
        },
      );
    }, gridRef);

    return () => ctx.revert();
  }, [activeFilter, visibleCount]);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="w-full flex flex-col overflow-hidden"
    >
      {/* 1. HERO RESPONSIVE PARALLAX */}
      <div className="portfolio-hero relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
        <div
          className="portfolio-bg absolute top-[-20%] left-0 w-full h-[140%] bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop')",
          }}
        ></div>

        <div className="portfolio-title-box relative z-10 border-2 md:border-4 border-black px-8 py-4 md:px-12 md:py-5 bg-white/90 backdrop-blur-sm shadow-2xl mx-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black tracking-[0.2em] md:tracking-[0.3em] text-black uppercase">
            Portafolio
          </h2>
        </div>
      </div>

      {/* 2. ZONA OSCURA (Filtros y Grilla) */}
      <div className="bg-[#111111] text-white w-full flex flex-col items-center pt-10 pb-20">
        {/* Menú de Filtros Responsive */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10 px-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
          {["ALL", "FRONTEND", "BACKEND"].map((filter) => (
            <button
              key={filter}
              onClick={(e) => {
                setActiveFilter(filter);
                gsap.fromTo(
                  e.currentTarget,
                  { scale: 0.85 },
                  { scale: 1, duration: 0.4, ease: "back.out(2.5)" },
                );
              }}
              className={`pb-2 transition-colors duration-300 relative ${activeFilter === filter ? "text-white" : "hover:text-gray-300"}`}
            >
              {filter}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-transform duration-300 ease-out origin-center ${activeFilter === filter ? "scale-x-100" : "scale-x-0"}`}
              ></span>
            </button>
          ))}
        </div>
        <br />

        {/* Grilla Responsive (2 en móvil, 3 en PC) */}
        <div
          ref={gridRef}
          className="w-full max-w-[1920px] grid grid-cols-2 lg:grid-cols-3"
        >
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="project-card relative group aspect-[4/3] md:aspect-video overflow-hidden bg-black"
            >
              {/* IMAGEN DE FONDO */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 md:opacity-70 md:group-hover:opacity-30"
              />

              {/* OVERLAY: Información y botones */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 p-2 md:p-6 text-center">
                {/* Circulo decorativo: scale-100 en móvil (siempre grande), md:scale-50 en PC */}
                <div className="absolute w-24 h-24 md:w-40 md:h-40 border-[1px] border-white/20 rounded-full scale-100 md:scale-50 md:group-hover:scale-100 transition-transform duration-700 ease-out"></div>

                <p className="text-[8px] md:text-[10px] text-gray-300 tracking-widest lowercase mb-1 md:mb-2 z-10">
                  {project.categories.join(", ")}
                </p>

                <h3 className="text-sm md:text-3xl font-black lowercase mb-1 md:mb-2 z-10 text-white drop-shadow-lg px-1">
                  {project.title}
                </h3>

                <p className="text-[9px] md:text-xs text-gray-400 mb-3 md:mb-6 z-10 max-w-[95%] md:max-w-[80%] line-clamp-2 md:line-clamp-none">
                  {project.description}
                </p>

                {/* Enlaces */}
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-[8px] md:text-[10px] font-bold tracking-[0.2em] z-10">
                  {project.links.map((link, index) => (
                    <React.Fragment key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-300 transition-colors bg-white/10 px-2 py-1 rounded-sm md:bg-transparent md:px-0 md:py-0 md:rounded-none"
                      >
                        {link.label}
                      </a>
                      {index < project.links.length - 1 && (
                        <span className="hidden md:inline text-gray-600">
                          ||
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN VER MÁS */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-12 flex justify-center w-full">
            <button
              onClick={handleLoadMore}
              className="px-8 md:px-10 py-3 border border-gray-600 text-gray-300 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 active:scale-95"
            >
              Ver Más Proyectos ↓
            </button>
          </div>
        )}
        <br />
        {/* GITHUB SECTION */}
        <div className="github-section relative w-full max-w-5xl flex flex-col items-center mt-20 md:mt-32 px-4 z-10 pb-10">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mb-6 md:mb-10 text-center">
            <svg
              className="w-8 h-8 text-white drop-shadow-md"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
            <h3 className="text-lg md:text-2xl font-black tracking-[0.1em] md:tracking-[0.3em] uppercase text-white">
              GitHub Contributions
            </h3>
          </div>
          <br />
          <div className="relative w-full group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2ea043] to-[#238636] rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>

            <div className="relative w-full bg-[#0d1117]/90 backdrop-blur-sm p-4 md:p-10 border border-gray-800 rounded-2xl flex flex-col items-center shadow-2xl">
              <p className="md:hidden text-gray-500 text-[10px] uppercase tracking-widest mb-4 animate-pulse">
                ← Desliza para ver más →
              </p>

              <div className="w-full overflow-x-auto overflow-y-hidden pb-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                <div className="min-w-[750px] flex justify-center px-4 md:px-0">
                  <GitHubCalendar
                    username="diazjohan98"
                    colorScheme="dark"
                    blockSize={15}
                    blockMargin={5}
                    fontSize={14}
                    theme={{
                      dark: [
                        "#161b22",
                        "#0e4429",
                        "#006d32",
                        "#26a641",
                        "#39d353",
                      ],
                    }}
                  />
                </div>
              </div>

              <a
                href="https://github.com/diazjohan98"
                target="_blank"
                rel="noreferrer"
                className="mt-6 md:mt-8 px-6 md:px-8 py-3 bg-[#238636] hover:bg-[#2ea043] text-white text-[10px] md:text-xs font-black tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(46,160,67,0.4)] hover:shadow-[0_0_25px_rgba(46,160,67,0.7)] transform hover:-translate-y-1 text-center"
              >
                View Full Profile
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-[10px] md:text-xs text-gray-500 tracking-widest font-semibold uppercase">
          And many more to come!
        </div>
      </div>
    </section>
  );
}

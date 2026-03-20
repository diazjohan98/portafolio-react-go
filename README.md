# 🚀 Johan Diaz - Front-end Developer & UI Designer Portfolio

¡Bienvenido a mi portafolio personal! Este proyecto no es solo una vitrina de mis trabajos, sino una demostración de **arquitectura limpia**, animaciones fluidas y diseño responsivo de alto nivel.

## 🛠️ Tech Stack & Herramientas

- **Core:** React.js (Vite)
- **Animaciones:** GSAP (GreenSock Animation Platform)
- **Estilos:** CSS3 (Custom Properties & Flexbox/Grid)
- **Iconografía:** React Icons / Assets personalizados
- **Diseño:** Figma (Basado en metodologías de UX/UI)

## 🏗️ Arquitectura del Proyecto (Clean Code)

Para este proyecto, apliqué principios de **Responsabilidad Única (SRP)** y **Modularización**, dividiendo el componente `Hero` para mejorar la mantenibilidad:

- **Custom Hooks:** Toda la lógica de animaciones y efectos de ratón (Parallax) vive en `useHeroAnimations.js`.
- **Subcomponentes:** Separación de la navegación (`HeroNav`) y redes sociales (`HeroSocials`) para un código más legible.
- **Responsive Design:** Menú hamburguesa dinámico con estados de React y transiciones suaves.

## ✨ Características Principales

- **Parallax Effect:** La imagen principal reacciona al movimiento del ratón en tiempo real mediante GSAP.
- **Flotado Orgánico:** Animaciones infinitas tipo "respiración" en los textos principales para dar vida a la interfaz.
- **Mobile First:** Diseño optimizado para dispositivos móviles con navegación intuitiva.
- **Optimización UI:** Contraste garantizado mediante superposiciones (overlays) y jerarquía tipográfica clara.

## 🚀 Instalación y Uso

Si quieres probar este proyecto localmente:

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/tu-usuario/portafolio-johan.git](https://github.com/tu-usuario/portafolio-johan.git)
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Corre el servidor de desarrollo:
    ```bash
    npm run dev
    ```

## 📈 Próximos Pasos

- [ ] Sección "About Me" con línea de tiempo.
- [ ] Galería de proyectos filtrable.
- [ ] Integración de formulario de contacto con EmailJS.
- [ ] Modo Oscuro/Claro (Dark Mode).

---

Desarrollado por [Johan Diaz](https://www.linkedin.com/in/johan98vdiaz/)

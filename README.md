# 🚀 Arshdeep Anand — Senior Full-Stack Portfolio

[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A high-performance, modern software engineer portfolio engineered with **React 19**, **Tailwind CSS v4**, and **Vite**. Built with dynamic micro-interactions, custom interactive canvas physics, interactive constellation systems, and an executive-grade design system.

---

## ✨ Key Features

- **Executive "About Me" Modal**: Fixed-dimension, zero-layout-shift architecture with tabbed navigation (Overview, Skills Matrix, Timeline & Milestones, Engineering Philosophy).
- **Interactive Constellation Canvas**: Lightweight custom 2D canvas background with soft star clusters confined strictly to side margins (zero content overlap) and automated DOM unmounting on mobile (`< 768px`) for maximum responsiveness.
- **Matter.js Physics Canvas**: Interactive 2D physics field integrated into the hero landing section.
- **Modern Tech Stack Showcase**: Curated technology badges covering Frontend, Backend, Databases, Cloud & DevOps (Docker, AWS, Prisma, PostgreSQL, Redis, etc.).
- **Interactive Project Portfolio**: Filterable project gallery with live previews, GitHub repository deep-links, and tech stack tags.
- **Production Contact System**: EmailJS-integrated contact form featuring real-time client-side validation and toast notifications.
- **Engineered for SEO & Accessibility**: Pre-configured `robots.txt`, XML sitemaps, semantic HTML5 structure, and screen-reader considerations.

---

## 🛠️ Tech Stack

### **Frontend & Architecture**
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### **Interactive Graphics & Physics**
- **Physics Engine**: [Matter.js](https://brm.io/matter-js/)
- **Canvas Systems**: Custom Vanilla Canvas 2D (Constellation Network & Starfield)
- **Carousels & Motion**: [Swiper](https://swiperjs.com/), [React Parallax Tilt](https://github.com/mkosir/react-parallax-tilt), [React Simple Typewriter](https://github.com/awran5/react-simple-typewriter)

### **Integrations & Utilities**
- **Form Delivery**: [@emailjs/browser](https://www.emailjs.com/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 📂 Project Structure

```bash
├── components/
│   ├── About.jsx                  # Senior-grade multi-tab modal (zero shift)
│   ├── Contact.jsx                # Contact form with EmailJS integration
│   ├── ExpertsView.jsx            # Testimonials & recommendations slider
│   ├── Footer.jsx                 # Footer with socials & quick links
│   ├── Header.jsx                 # Glassmorphic responsive navigation
│   ├── Home.jsx                   # Hero section with Matter.js physics
│   ├── Interactive3DBackground.jsx# Margin-confined constellation background
│   ├── LatestWorks.jsx            # Featured projects display
│   ├── SingleProject.jsx          # Project showcase card component
│   ├── SingleReview.jsx           # Client review card
│   ├── Skills.jsx                 # Interactive skills matrix
│   └── TechIcon.jsx               # Technology SVG icon library
├── context/
│   └── scrollContext.jsx          # Smooth scrolling & active section tracking
├── public/
│   ├── robots.txt                 # Search engine crawler directives
│   └── sitemap.xml                # SEO sitemap index
├── src/
│   ├── App.jsx                    # Root application entry
│   ├── index.css                  # Global styles & Tailwind v4 theme tokens
│   └── main.jsx                   # DOM mounting point
└── package.json
```

---

## 🚀 Getting Started

### **Prerequisites**
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/VibeStack/My-Portfolio.git
   cd My-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## ⚙️ Environment Configuration

To configure the contact form, create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 📱 Responsiveness & Performance

- **Fluid Breakpoints**: Optimized across ultra-wide desktop monitors, laptops, tablets, and smartphones.
- **Resource Discipline**: Heavy canvas renders and physics loops automatically disable or scale down on mobile viewports.
- **Tailwind v4 Optimized**: Zero unused CSS bloat with lightning-fast rebuild times.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

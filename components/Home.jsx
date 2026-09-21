import React, { useContext, useState } from "react";
import { useEffect, useRef } from "react";
import { runMatter } from "../matter";
import { Typewriter, Cursor } from "react-simple-typewriter";
import Header from "./Header";
import About from "./About";
import { ScrollContext } from "../context/scrollContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { sectionRefs } = useContext(ScrollContext);
  const [showAbout, setShowAbout] = useState(false);
  const handleAboutClick = () => {
    setShowAbout(true);
  };
  const handleCloseAbout = () => {
    setShowAbout(false);
  };
  const Typing = ({ text }) => {
    return (
      <>
        <Typewriter
          words={text}
          loop={0}
          typeSpeed={30}
          deleteSpeed={10}
          delaySpeed={2000}
        />
        <Cursor />
      </>
    );
  };

  const { scrollTo } = useContext(ScrollContext);

  const wrapperRef = useRef(null);
  useEffect(() => {
    if (location.pathname === "/" && wrapperRef.current) {
      runMatter(wrapperRef.current);
    }
  }, []);

  return (
    <div className="home-page bg-[#111] text-white font-['Nunito'] relative overflow-hidden">
      <section ref={sectionRefs.home} className="h-screen flex flex-col justify-between relative">
        <Header />
        <About isOpen={showAbout} onClose={handleCloseAbout} />

        {/* 2D Physics Canvas */}
        <div
          className="absolute inset-0 hidden md:block z-0 pointer-events-none"
          id="wrapper-canvas"
          ref={wrapperRef}
        />

        {/* Ambient atmospheric glow spots */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-32 left-1/4 w-120 h-120 bg-purple-600/10 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute top-1/3 -right-20 w-105 h-105 bg-violet-800/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-[130px]" />
        </div>

        <div className="flex relative items-center flex-1 my-auto z-10 pointer-events-none">
          <div className="max-w-6xl w-full mx-auto px-6 sm:px-10 lg:px-14 relative">
            {/* Background geometric SVG A watermark - prominent and visible */}
            <svg
              width={406}
              height={368}
              viewBox="0 0 406 368"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute top-1/2 right-4 sm:right-12 md:right-16 -translate-y-1/2 w-70 sm:w-105 md:w-145 lg:w-162.5 h-auto opacity-75 select-none transition-all duration-500 -z-10"
            >
              <path
                d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                stroke="#5a189a"
                strokeOpacity="0.8"
                strokeWidth={9}
              />
              <path
                d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                stroke="url(#paint0_linear)"
                strokeWidth={9}
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="205.549"
                  y1="20.0169"
                  x2="204.338"
                  y2="349.43"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#c77dff" stopOpacity="0.8" />
                  <stop offset="0.5" stopColor="#9d4edd" stopOpacity="0.6" />
                  <stop offset="0.85" stopColor="#7b2cbf" stopOpacity="0.3" />
                  <stop offset="1" stopColor="#3c096c" stopOpacity="0.05" />
                </linearGradient>
              </defs>
            </svg>

            {/* Hero Content */}
            <div className="relative z-20 max-w-2xl">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/4 border border-purple-500/30 backdrop-blur-md mb-6 shadow-inner pointer-events-auto">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono tracking-wide text-purple-200/90 font-medium">
                  Available for new opportunities
                </span>
              </div>

              {/* Title & Name */}
              <div className="space-y-2 select-none">
                <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-purple-300/80 font-mono">
                  Hello, I'm
                </p>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-['League_Spartan'] text-white">
                  <span className="bg-linear-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
                    Arshdeep Anand
                  </span>
                </h1>
              </div>

              {/* Dynamic Subtitle */}
              <div className="h-10 sm:h-12 flex items-center my-4 sm:my-6 font-['Merriweather'] italic text-lg sm:text-2xl font-bold text-purple-300">
                <Typing
                  text={[
                    "Software Developer",
                    "Full Stack Engineer",
                    "MERN Stack Specialist",
                    "UI/UX Craftsperson",
                  ]}
                />
              </div>

              {/* Bio snippet */}
              <p className="text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed mb-8">
                Crafting performant, visually distinctive web applications with modern architecture, thoughtful micro-interactions, and robust engineering.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
                <button
                  onClick={handleAboutClick}
                  className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-white bg-linear-to-r from-[#7b2cbf] via-[#9d4edd] to-[#c77dff] hover:from-[#9d4edd] hover:to-[#e0aaff] shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(224,170,255,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 border border-white/40 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <span className="relative z-10 tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">About Me</span>
                  <div className="relative z-10 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white text-white group-hover:text-[#5a189a] transition-colors duration-300">
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </button>

                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-gray-200 bg-white/4 hover:bg-white/9 hover:text-white border border-white/10 hover:border-purple-300/50 backdrop-blur-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-sm"
                >
                  <span>Get In Touch</span>
                </button>
              </div>
            </div>
          </div>

          {/* Social Links Dock on Right */}
          <div className="hidden sm:flex flex-col items-center gap-4 fixed right-6 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
            <div className="w-px h-12 bg-linear-to-b from-transparent to-white/20" />
            
            {/* LinkedIn: Brand Blue #0A66C2 */}
            <Link
              to="https://www.linkedin.com/in/arshdeep-anand-600865288/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/4 border border-white/15 text-gray-300 hover:text-white hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.6)] hover:scale-110 transition-all duration-300 backdrop-blur-md shadow-lg group relative"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                />
              </svg>
            </Link>

            {/* GitHub: Brand Dark with White Accent */}
            <Link
              to="https://github.com/VibeStack/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/4 border border-white/15 text-gray-300 hover:text-black hover:border-white hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-110 transition-all duration-300 backdrop-blur-md shadow-lg group relative"
              aria-label="GitHub Profile"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </Link>

            {/* Email: Brand Coral / Crimson #EA4335 */}
            <Link
              to="mailto:arshanand0527@gmail.com"
              className="p-3 rounded-xl bg-white/4 border border-white/15 text-gray-300 hover:text-white hover:border-[#EA4335] hover:bg-[#EA4335] hover:shadow-[0_0_20px_rgba(234,67,53,0.6)] hover:scale-110 transition-all duration-300 backdrop-blur-md shadow-lg group relative"
              aria-label="Send Email"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                />
              </svg>
            </Link>

            <div className="w-px h-12 bg-linear-to-t from-transparent to-white/20" />
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="relative self-center flex flex-col items-center pb-8 z-20 pointer-events-auto">
          <button
            onClick={() => scrollTo("latestWorks")}
            className="group flex flex-col items-center gap-2 text-xs font-mono tracking-widest uppercase text-gray-400 hover:text-purple-300 transition-colors"
            aria-label="Scroll to latest works"
          >
            <span className="group-hover:translate-y-0.5 transition-transform">Explore Works</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5 group-hover:border-purple-400 transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-purple-400 animate-bounce" />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
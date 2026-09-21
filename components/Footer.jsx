import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ScrollContext } from "../context/scrollContext";

export default function Footer() {
  const { scrollTo } = useContext(ScrollContext);

  return (
    <footer className="relative w-full bg-[#08080c] border-t border-white/10 text-white py-16 font-['Nunito'] overflow-hidden z-20">
      {/* Background ambient purple glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-137.5 h-87.5 bg-purple-900/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-14 border-b border-white/10">
          {/* Brand & Bio Column (5 cols) */}
          <div className="md:col-span-5 space-y-4 text-left">
            <button
              onClick={() => scrollTo("home")}
              className="group inline-flex items-center gap-3 text-left cursor-pointer focus:outline-none"
            >
              <div className="p-2.5 rounded-xl bg-white/4 border border-white/15 backdrop-blur-md shadow-lg group-hover:border-purple-400/50 group-hover:shadow-[0_0_20px_rgba(157,78,221,0.3)] transition-all duration-300">
                <img
                  className="w-8 h-8 group-hover:rotate-6 transition-transform duration-300"
                  src="/name-logo-white.svg"
                  alt="Arshdeep Anand Logo"
                />
              </div>
              <div>
                <span className="text-xl font-bold font-['League_Spartan'] text-white group-hover:text-purple-200 transition-colors">
                  Arshdeep Anand
                </span>
                <p className="text-xs font-mono text-purple-300/80 tracking-wide">
                  Full-Stack Software Engineer
                </p>
              </div>
            </button>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Designing and developing robust, high-performance web applications with modern architecture and immersive interactive experiences.
            </p>
            {/* Live Availability Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/3 border border-emerald-500/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono text-emerald-300 font-medium">
                Open to new roles & contracts
              </span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 text-left space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-purple-300 font-semibold mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => scrollTo("home")}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("about")}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("latestWorks")}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Featured Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("skills")}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Skills & Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("contact")}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Connect & Socials (4 cols) */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-purple-300 font-semibold mb-4">
              Direct Channels
            </h4>
            <p className="text-sm text-gray-400">
              Feel free to reach out directly through any of these platforms:
            </p>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-3 pt-1">
              {/* LinkedIn */}
              <Link
                to="https://www.linkedin.com/in/arshdeep-anand-600865288/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/4 border border-white/10 text-gray-300 hover:text-white hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 shadow-md"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </Link>

              {/* GitHub */}
              <Link
                to="https://github.com/VibeStack/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/4 border border-white/10 text-gray-300 hover:text-black hover:border-white hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 shadow-md"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"
                  />
                </svg>
              </Link>

              {/* Email */}
              <Link
                to="mailto:arshanand0527@gmail.com"
                className="p-3 rounded-xl bg-white/4 border border-white/10 text-gray-300 hover:text-white hover:border-[#EA4335] hover:bg-[#EA4335] hover:shadow-[0_0_20px_rgba(234,67,53,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 shadow-md"
                aria-label="Email"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                  />
                </svg>
              </Link>

              {/* WhatsApp */}
              <Link
                to="https://wa.me/8544953527?text='Hi, How are you!'"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/4 border border-white/10 text-gray-300 hover:text-white hover:border-[#25D366] hover:bg-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 shadow-md"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Arshdeep Anand. Built with React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-400 hover:text-purple-300 transition-colors">
              Crafted with passion & precision
            </span>
            <button
              onClick={() => scrollTo("home")}
              className="inline-flex items-center gap-1.5 text-purple-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

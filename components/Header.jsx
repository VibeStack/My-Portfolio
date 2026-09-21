import React from "react";
import { Link } from "react-router-dom";

export default function Header({popup}) {
  return (
    <header
      className={`z-20 flex items-center justify-between px-6 py-4 max-w-6xl mx-auto w-full transition-opacity duration-300 ${
        popup ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Link
        className="group relative flex items-center gap-3 text-white transition-transform hover:scale-105 pointer-events-auto"
        to="#"
        aria-label="Home"
      >
        <div className="relative p-2 rounded-xl bg-white/4 border border-white/10 backdrop-blur-md shadow-lg shadow-purple-950/40 group-hover:border-purple-500/40 transition-colors">
          <svg
            width={34}
            height={34}
            viewBox="0 0 416 368"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-purple-300 group-hover:text-purple-200 transition-colors"
          >
            <path
              d="M324.632 203.212L324.632 349.142L172.233 208.765M324.632 203.212L292.769 203.298M324.632 203.212L347.614 203.298L390.733 170.82L324.632 170.82M172.233 208.765L127.777 170.672L167.233 170.82M172.233 208.765L65.0568 317.038L20.1163 317.038L147.215 188.868M210.233 170.82L292.769 96.2119L292.769 170.82M210.233 170.82L292.769 170.82M210.233 170.82L167.233 170.82M292.769 203.298L220.578 202.834L292.769 270.798L292.769 203.298ZM292.769 170.82L324.632 170.82M167.233 170.82L325.868 20.1441L324.632 170.82"
              stroke="currentColor"
              strokeWidth={18}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="hidden sm:inline font-mono text-xs tracking-wider uppercase text-purple-200/70 group-hover:text-purple-200 transition-colors">
          Arshdeep Anand
        </span>
      </Link>
      <div className="flex items-center gap-3">
        {/* Phone / Call: Brand Green Hover Fill */}
        <Link
          className="p-2.5 rounded-xl bg-white/4 border border-white/10 backdrop-blur-md text-gray-300 hover:text-white hover:border-[#10B981] hover:bg-[#10B981] hover:shadow-[0_0_18px_rgba(16,185,129,0.6)] hover:scale-105 transition-all shadow-md pointer-events-auto"
          to="tel:8544953527"
          aria-label="Call Arshdeep"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-phone"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </Link>

        {/* WhatsApp: Official Brand Green Hover Fill #25D366 */}
        <Link
          className="p-2.5 rounded-xl bg-white/4 border border-white/10 backdrop-blur-md text-gray-300 hover:text-white hover:border-[#25D366] hover:bg-[#25D366] hover:shadow-[0_0_18px_rgba(37,211,102,0.6)] hover:scale-105 transition-all shadow-md pointer-events-auto"
          to="https://wa.me/8544953527?text='Hi, How are you!'"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

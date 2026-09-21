import React from "react";
import { Link } from "react-router-dom";

export default function SingleProject({
  websiteLink,
  websiteImg,
  websiteName,
  shortDisc,
  longDisc,
  techUsed,
  imgPosition,
}) {
  const isImageLeft = imgPosition === "left";

  return (
    <div className="relative group/card w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white/2 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(157,78,221,0.15)] relative overflow-hidden">
        
        {/* Subtle corner highlight gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-purple-500/10 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

        {/* Project Image Preview (7 cols on lg) */}
        <div
          className={`w-full lg:col-span-7 relative ${
            isImageLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Link
            to={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/img block relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-xl sm:shadow-2xl transition-all duration-500 hover:scale-[1.01] sm:hover:scale-[1.02] hover:border-purple-400/60"
          >
            {/* Browser top-bar mock */}
            <div className="h-7 sm:h-8 bg-zinc-900/90 border-b border-white/10 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 sm:ml-3 text-[10px] sm:text-[11px] font-mono text-gray-500 truncate max-w-45 sm:max-w-55">
                {websiteName.toLowerCase().replace(/\s+/g, "-")}.live
              </span>
            </div>

            {/* Project screenshot */}
            <div className="relative overflow-hidden w-full bg-[#0d0d0d] flex items-center justify-center p-2 sm:p-4">
              <img
                className="w-full h-auto max-h-95 sm:max-h-110 object-contain rounded-lg transition-transform duration-700 ease-out group-hover/img:scale-[1.03]"
                src={websiteImg}
                alt={websiteName}
                loading="lazy"
              />
              {/* Overlay hover prompt */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4 sm:p-6">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-white bg-[#7b2cbf]/90 px-4 py-2 rounded-xl border border-white/30 backdrop-blur-md shadow-lg">
                  Visit Live Demo
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Project Details Content (5 cols on lg) */}
        <div
          className={`w-full lg:col-span-5 text-left flex flex-col justify-center space-y-3 sm:space-y-4 ${
            isImageLeft ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {/* Category / Subtitle pill */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-purple-300 font-semibold px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30">
              {shortDisc}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-['League_Spartan'] group-hover/card:text-purple-200 transition-colors">
            {websiteName}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            {longDisc}
          </p>

          {/* Tech Stack Chips */}
          <div className="pt-1 sm:pt-2">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {techUsed.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono font-medium tracking-wide text-purple-200 bg-white/4 border border-purple-500/25 rounded-lg hover:border-purple-400 hover:bg-purple-900/20 transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>

          {/* Live Action Link */}
          <div className="pt-3 sm:pt-4 flex items-center gap-4">
            <Link
              to={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-linear-to-r from-[#7b2cbf] via-[#9d4edd] to-[#c77dff] hover:from-[#9d4edd] hover:to-[#e0aaff] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-md shadow-purple-950/50 border border-white/30"
            >
              <span>Explore Application</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1={10} y1={14} x2={21} y2={3} />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

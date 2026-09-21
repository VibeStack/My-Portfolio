import React from "react";

export default function SingleReview({
  clientImg,
  clientReview,
  clientName,
  clientPosition,
}) {
  return (
    <div className="relative group w-full max-w-4xl mx-auto p-6 sm:p-10 md:p-12 rounded-3xl bg-white/3 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl shadow-[0_0_40px_rgba(157,78,221,0.1)] transition-all duration-500 my-8">
      {/* Decorative quote SVG watermark */}
      <svg
        className="absolute top-6 right-6 sm:top-10 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 text-purple-500/10 pointer-events-none"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Avatar with luxury gradient border ring */}
        <div className="relative shrink-0">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full p-1 bg-linear-to-tr from-[#7b2cbf] via-[#c77dff] to-white/40 shadow-[0_0_25px_rgba(157,78,221,0.35)]">
            <img
              className="w-full h-full object-cover rounded-full"
              src={clientImg}
              alt={clientName}
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-left flex flex-col justify-between">
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-['Nunito'] mb-6 italic">
            "{clientReview}"
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-['League_Spartan'] text-white">
                <span className="bg-linear-to-r from-white via-purple-100 to-[#c77dff] bg-clip-text text-transparent">
                  {clientName}
                </span>
              </h3>
              <p className="text-xs sm:text-sm font-mono text-purple-300 font-medium">
                {clientPosition}
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-gray-500">
              Verified Review
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

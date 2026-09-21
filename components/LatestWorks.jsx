import React, { useContext } from "react";
import SingleProject from "./SingleProject";
import { latestWorksCollection } from "../data";
import { ScrollContext } from "../context/scrollContext";

export default function LatestWorks() {
  const { sectionRefs } = useContext(ScrollContext);
  return (
    <section
      ref={sectionRefs.latestWorks}
      className="relative w-full bg-[#0d0d11] text-white pt-20 pb-24 font-['Nunito'] overflow-hidden"
    >
      {/* Background ambient purple glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-125 md:w-175 h-125 md:h-175 bg-purple-900/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-0 w-100 h-100 bg-violet-800/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center">
        {/* Section Header */}
        <div className="relative z-10 max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/4 border border-purple-500/30 backdrop-blur-md mb-4 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span className="text-xs font-mono tracking-widest uppercase text-purple-200/90 font-medium">
              Featured Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-['League_Spartan'] mb-4">
            <span className="bg-linear-to-r from-white via-purple-100 to-[#c77dff] bg-clip-text text-transparent">
              Latest Works
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            A curated selection of production-grade web applications, interactive interfaces, and software experiments.
          </p>
        </div>

        {/* Project Showcase List */}
        <div className="relative space-y-12 sm:space-y-16 lg:space-y-20">
          {latestWorksCollection.map((work, index) => (
            <SingleProject
              key={work.key || index}
              websiteLink={work.websiteLink}
              websiteImg={work.websiteImg}
              websiteName={work.websiteName}
              shortDisc={work.shortDisc}
              longDisc={work.longDisc}
              techUsed={work.techUsed}
              imgPosition={work.imgPosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

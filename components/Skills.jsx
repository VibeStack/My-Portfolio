import React, { useContext } from "react";
import { SkillsInfo } from "../data";
import Tilt from "react-parallax-tilt";
import { ScrollContext } from "../context/scrollContext";
import { TechIcon } from "./TechIcon";

export default function Skills() {
  const { sectionRefs } = useContext(ScrollContext);
  return (
    <section
      ref={sectionRefs.moreSkills}
      id="skills"
      className="relative w-full bg-[#0d0d11] text-white pt-20 pb-24 font-['Nunito'] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 -left-32 w-125 h-125 bg-purple-900/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-112.5 h-112.5 bg-violet-800/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/4 border border-purple-500/30 backdrop-blur-md mb-4 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span className="text-xs font-mono tracking-widest uppercase text-purple-200/90 font-medium">
              Technical Stack & Tools
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-['League_Spartan'] mb-4">
            <span className="bg-linear-to-r from-white via-purple-100 to-[#c77dff] bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Showcasing a comprehensive toolkit spanning full-stack frameworks, languages, databases, and modern developer tooling.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SkillsInfo.map((category) => (
            <div
              key={category.title}
              className="group/cat rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-white/2 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(157,78,221,0.15)] flex flex-col"
            >
              {/* Category Title */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold font-['League_Spartan'] tracking-wide text-white group-hover/cat:text-purple-200 transition-colors">
                  {category.title}
                </h3>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 font-semibold">
                  {category.skills.length} Techs
                </span>
              </div>

              {/* Skill Badges */}
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.01}
                transitionSpeed={800}
                gyroscope={true}
                className="w-full flex-1 flex flex-col justify-center"
              >
                <div className="flex flex-wrap gap-2.5 sm:gap-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item inline-flex items-center gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/4 border border-white/10 hover:border-purple-400/60 hover:bg-purple-900/25 hover:shadow-[0_0_16px_rgba(157,78,221,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-default"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center">
                        {skill.iconName ? (
                          <TechIcon name={skill.iconName} className="w-full h-full object-contain filter group-hover/item:brightness-125 transition-all duration-300" />
                        ) : (
                          <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="w-full h-full object-contain filter group-hover/item:brightness-110 transition-all duration-300"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <span className="text-xs sm:text-sm font-medium tracking-wide text-gray-300 group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

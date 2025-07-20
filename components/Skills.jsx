import React from "react";
import { SkillsInfo } from "../data";
import Tilt from "react-parallax-tilt";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#111] pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-skills-gradient clip-path-custom font-['Nonito']"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="inline-block text-[24px] sm:text-6xl z-15 font-extrabold px-4 py-4 mx-auto text-center text-[#5a189a] sm:border-b-2 sm:border-[#9d4edd] border-2 border-[#9d4edd] rounded-md shadow-md shadow-[#e0aaff] font-['Nunito'] bg-[#111]">
          Skills
        </h2>
        <p className="text-gray-400 mt-8 text-lg font-semibold">
          Showcasing a diverse skill set spanning frontend frameworks, backend
          technologies, programming languages, and development tools—each
          sharpened by real-world project experience.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-[#222] backdrop-blur-md px-8 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] flex flex-col items-center"
          >
            <h3
              className="text-2xl sm:text-3xl font-semibold text-[#9c51e4] mb-8 py-2 px-4 border-b-2 inline-block mx-auto text-center shadow-md shadow-[#e0aaff] rounded"
            >
              {category.title}
            </h3>

            {/* Skill Items - 3 per row on larger screens */}
            <Tilt
              key={category.title}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="flex flex-wrap gap-3 w-full justify-center">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 border-2 border-gray-600 rounded-2xl py-2 px-2 sm:py-2 sm:px-2 text-center "
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}

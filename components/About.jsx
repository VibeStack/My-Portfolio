import React, { useContext, useState } from "react";
import { MapPin, Briefcase, Award, Code2, Sparkles, X, ChevronRight, GraduationCap, Terminal, ExternalLink } from "lucide-react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { aboutPageSkills, journey, interests } from "../data";
import { ScrollContext } from "../context/scrollContext";
import { Link } from "react-router-dom";

export default function About({ isOpen, onClose }) {
  const { scrollTo } = useContext(ScrollContext);
  const [activeTab, setActiveTab] = useState("overview");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in font-['Nunito']"
      onClick={onClose}
    >
      {/* Modal Dialog Card - Locked Fixed Height to prevent any resizing/jumping between tabs */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl h-[92vh] md:h-160 lg:h-170 bg-[#0f0f15] border border-white/15 rounded-3xl shadow-[0_0_80px_rgba(157,78,221,0.25)] flex flex-col md:flex-row overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/6 border border-white/15 text-gray-300 hover:text-white hover:bg-[#9d4edd] hover:border-purple-300 hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Left Profile Sidebar (32% on desktop) - Locked Height */}
        <div className="w-full md:w-[35%] lg:w-[32%] h-full bg-[#0b0b10] p-6 sm:p-7 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 shrink-0 overflow-y-auto">
          <div>
            {/* Avatar Profile */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4">
              <div className="w-full h-full rounded-2xl p-1 bg-linear-to-tr from-[#7b2cbf] via-[#c77dff] to-white/40 shadow-[0_0_30px_rgba(157,78,221,0.35)]">
                <img
                  src="./img/myPic.jpeg"
                  alt="Arshdeep Anand"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <span className="absolute -bottom-2 right-1 px-2 py-0.5 rounded-full bg-emerald-500/90 border border-emerald-300 text-[10px] font-mono font-bold text-black uppercase tracking-wider shadow">
                Active
              </span>
            </div>

            {/* Name & Title with fixed height envelope to eliminate typewriter text jitter */}
            <div className="text-center mb-5">
              <h2 className="text-xl sm:text-2xl font-extrabold font-['League_Spartan'] text-white">
                Arshdeep Anand
              </h2>
              <div className="h-7 flex items-center justify-center font-mono text-xs text-purple-300 font-semibold tracking-wide overflow-hidden whitespace-nowrap px-2">
                <Typewriter
                  words={[
                    "Senior Software Engineer",
                    "Full-Stack Architect",
                    "MERN & Cloud Specialist",
                    "Performance Craftsman",
                  ]}
                  loop={0}
                  typeSpeed={40}
                  deleteSpeed={20}
                  delaySpeed={2200}
                />
                <Cursor />
              </div>
            </div>

            {/* Metadata Badges */}
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/3 border border-white/5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>India &bull; Remote Available</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/3 border border-white/5">
                <Briefcase className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Full-Time / Contract</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/3 border border-white/5">
                <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Computer Science & Engineering</span>
              </div>
            </div>

            {/* Quick Connect Dock */}
            <div className="flex items-center justify-center gap-2.5 pt-3 mt-3 border-t border-white/5">
              <Link
                to="https://www.linkedin.com/in/arshdeep-anand-600865288/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/4 border border-white/10 text-gray-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-105 transition-all text-xs flex items-center gap-1.5 font-mono"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
              <Link
                to="https://github.com/VibeStack/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/4 border border-white/10 text-gray-300 hover:text-black hover:bg-white hover:border-white hover:scale-105 transition-all text-xs flex items-center gap-1.5 font-mono"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="space-y-1.5 pt-4 mt-3 border-t border-white/10">
            {[
              { id: "overview", label: "Engineering Overview", icon: Code2 },
              { id: "architecture", label: "Skills & Proficiency", icon: Sparkles },
              { id: "journey", label: "Career & Milestones", icon: Award },
              { id: "principles", label: "Philosophy & Interests", icon: Terminal },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === id
                    ? "bg-linear-to-r from-[#7b2cbf] to-[#9d4edd] text-white shadow-lg shadow-purple-950/50 border border-white/20"
                    : "text-gray-400 hover:text-white hover:bg-white/4"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="flex-1 text-left">{label}</span>
                {activeTab === id && <ChevronRight className="w-3.5 h-3.5" />}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Area (68% on desktop) - Locked Height with Independent Scrolling */}
        <div className="flex-1 h-full p-6 sm:p-8 lg:p-10 overflow-y-auto text-left">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-purple-300 font-semibold px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 inline-block mb-3">
                  About Me & Bio
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-['League_Spartan'] text-white">
                  Crafting Scalable, Modern Web Experiences
                </h3>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  I'm a full-stack engineer specialized in building robust production-grade web systems. My focus lies at the intersection of performant backend architectures (Node.js, Express, PHP/Laravel, PostgreSQL, MongoDB, Docker, AWS) and pixel-perfect, highly responsive interfaces (React, Next.js, Tailwind CSS).
                </p>
                <p>
                  My engineering philosophy is simple: write maintainable, modular code that scales seamlessly, minimize unnecessary complexity, and deliver interfaces that are not just functional, but delight users with thoughtful micro-interactions.
                </p>
              </div>

              {/* Core Strengths Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/2 border border-white/10 hover:border-purple-500/40 transition-colors">
                  <h4 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    Clean Architecture
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Adhering to SOLID principles, modular code organization, RESTful best practices, and structured state management.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/2 border border-white/10 hover:border-purple-500/40 transition-colors">
                  <h4 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Cloud & DevOps Ready
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Deploying resilient workloads using Docker, AWS (EC2 & S3), GCP, Vercel, Render, and Linux shell environments.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/2 border border-white/10 hover:border-purple-500/40 transition-colors">
                  <h4 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    High-Performance UI
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Sub-second load times, smooth 60fps micro-animations, accessible DOM hierarchy, and SEO best practices.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/2 border border-white/10 hover:border-purple-500/40 transition-colors">
                  <h4 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-400" />
                    Full Lifecycle Delivery
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    From UX wireframes to production deployment, database migrations, security audits, and continuous optimization.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE & SKILLS */}
          {activeTab === "architecture" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-purple-300 font-semibold px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 inline-block mb-3">
                  Competencies
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-['League_Spartan'] text-white">
                  Technical Proficiency & Focus
                </h3>
              </div>

              {/* Progress Gauges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutPageSkills.map((skill) => (
                  <div key={skill.name} className="p-3.5 rounded-xl bg-white/3 border border-white/10">
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                      <span className="text-white font-semibold">{skill.name}</span>
                      <span className="text-purple-300 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/6 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-[#7b2cbf] via-[#9d4edd] to-[#c77dff] transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* View Full Stack CTA */}
              <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div>
                  <h4 className="text-base font-bold text-white">Looking for the complete technical inventory?</h4>
                  <p className="text-xs text-gray-400">Includes Docker, AWS, GCP, PostgreSQL, Next.js, and DevOps tools.</p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    scrollTo("moreSkills");
                  }}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-linear-to-r from-[#7b2cbf] to-[#9d4edd] hover:from-[#9d4edd] hover:to-[#c77dff] transition-all shadow-md cursor-pointer shrink-0"
                >
                  Explore Full Skills Section &rarr;
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: CAREER JOURNEY */}
          {activeTab === "journey" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-purple-300 font-semibold px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 inline-block mb-3">
                  Evolution
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-['League_Spartan'] text-white">
                  Career Progression & Milestones
                </h3>
              </div>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/30 space-y-8 ml-2 sm:ml-4">
                {journey.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Glowing Bullet */}
                    <div className="absolute -left-7.75 sm:-left-9.75 top-0 w-4 h-4 rounded-full bg-[#9d4edd] border-4 border-[#0f0f15] shadow-[0_0_12px_#9d4edd] group-hover:scale-125 transition-transform" />

                    <div className="p-5 rounded-2xl bg-white/3 border border-white/10 group-hover:border-purple-500/40 transition-all">
                      <span className="inline-block px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-bold text-white font-['League_Spartan']">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PHILOSOPHY & INTERESTS */}
          {activeTab === "principles" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-purple-300 font-semibold px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 inline-block mb-3">
                  Personal Side
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-['League_Spartan'] text-white">
                  Engineering Philosophy & Interests
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/3 border border-white/10 hover:border-purple-500/40 transition-all flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center p-2.5 shrink-0">
                      <img src={interest.icon} alt={interest.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                        {interest.name}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {interest.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Collaboration Banner */}
              <div className="p-6 rounded-2xl bg-linear-to-r from-purple-950/40 to-slate-900/40 border border-purple-500/30 text-left flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div>
                  <h4 className="text-lg font-bold text-white">Ready to collaborate on something impactful?</h4>
                  <p className="text-xs text-gray-400 mt-1">I'm currently accepting new freelance projects and full-time inquiries.</p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    scrollTo("contact");
                  }}
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-linear-to-r from-[#7b2cbf] via-[#9d4edd] to-[#c77dff] hover:scale-105 transition-all shadow-lg cursor-pointer shrink-0"
                >
                  Get In Touch &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

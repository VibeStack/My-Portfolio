import React, { useContext, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { aboutPageSkills, aboutToolTips, interests, journey } from "../data";
import SingleToolTips from "./SingleToolTips";
import { ScrollContext } from "../context/scrollContext";

const About = ({ isOpen, onClose }) => {
  const { scrollTo } = useContext(ScrollContext);
  const [activeTab, setActiveTab] = useState("story");
  function Typing(text) {
    return (
      <>
        <Typewriter
          words={text}
          loop={0}
          typeSpeed={1}
          deleteSpeed={1}
          delaySpeed={2000}
        />
        <Cursor />
      </>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl w-[calc(100%-5vw)] max-h-[95vh] lg:w-6xl md:h-[60vh] lg:h-[90vh] overflow-y-auto relative border border-gray-700 shadow-2xl">
        <div className="flex w-full h-full relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 border-2 border-white rounded-full transition-transform duration-500 hover:rotate-z-180 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </button>

          <div className="flex flex-col md:flex-row w-full relative">
            {/* Sidebar */}
            <div className="w-full md:w-[30%] bg-gray-800 p-8 flex flex-col overflow-y-auto relative">
              <div className="mb-8">
                <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gray-800 to-white mx-auto mb-6 overflow-hidden">
                  <img
                    src="./img/myPic.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white text-center mb-2">
                  Arshdeep Anand
                </h2>
                <p className="text-[#e0aaff] text-center font-bold">
                  {Typing([
                    "Software Developer",
                    "Full Stack Developer",
                    "MERN Stack Developer",
                  ])}
                </p>
              </div>

              <div className="space-y-1 md:space-y-2">
                <div className="flex items-center text-gray-300 mb-3">
                  <MapPin className="w-4 h-4 mr-3 text-purple-400" />
                  <span className="text-[10px] md:text-sm">India</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-3 text-purple-400" />
                  <span className="text-[10px] md:text-sm">
                    Available for projects
                  </span>
                </div>
              </div>

              <div className="mt-4 md:mt-8 space-y-1 md:space-y-2">
                {["story", "skills", "journey", "interests"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left text-[12px] md:text-[16px] px-4 py-3 rounded-lg transition-all duration-1000 ease-in-out capitalize ${
                      activeTab === tab
                        ? "bg-[#5a189a] text-white font-bold"
                        : "text-white hover:font-extrabold "
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-[70%] flex px-8 py-4 mb-10 md:overflow-y-auto relative xl:items-center">
              {activeTab === "story" && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">My Story</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <p className="text-gray-300 leading-relaxed">
                        I'm a tech enthusiast passionate about solving
                        real-world problems through technology. I enjoy
                        exploring concepts in depth and building meaningful
                        solutions that combine innovation with impact.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        My journey started with Java and MySQL in school, and
                        over time it has grown into developing full-stack
                        applications with modern tools and frameworks. I believe
                        in writing clean, efficient, and scalable code while
                        crafting user experiences that are both functional and
                        intuitive.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Beyond coding, I explore emerging technologies,
                        contribute to open-source, and share knowledge within
                        the developer community. I'm always eager to take on new
                        challenges, collaborate with like-minded people, and
                        work on projects that push the boundaries of what
                        technology can achieve.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/20 h-max">
                      <h4 className="text-xl font-semibold text-white mb-4">
                        What Drives Me
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">
                            Building solutions that solve real-world problems
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">
                            Continuous learning and staying updated with tech
                            trends
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">
                            Creating intuitive and accessible user experiences
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">
                            Collaborating with teams to achieve common goals
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "skills" && (
                <div className="space-y-6 w-full flex flex-col">
                  <h3 className="text-3xl font-bold text-white">
                    Technical Skills
                  </h3>
                  <div className="flex justify-center flex-wrap gap-6">
                    {aboutPageSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="space-y-2 w-[40%] md:w-[45%]"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">
                            {skill.name}
                          </span>
                          <span className="text-purple-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 p-6 bg-gray-800 rounded-xl">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      MERN Stack Expertise
                    </h4>
                    <div className="flex wrap-normal justify-center gap-5 sm:gap-12 lg:gap-15 pt-1 sm:pt-5 pb-1">
                      {aboutToolTips.map(
                        ({ tech, img, symbol, textColor }, i) => {
                          return (
                            <SingleToolTips
                              key={i}
                              tech={tech}
                              img={img}
                              symbol={symbol}
                              textColor={textColor}
                            />
                          );
                        }
                      )}
                    </div>
                  </div>

                  <div className="inset-0 m-auto relative">
                    <button
                      onClick={() => {
                        scrollTo("moreSkills");
                        onClose();
                      }}
                      className="inline-flex w-max items-center bg-[#C084FC] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#9d4edd] to-[#5a189a] hover:scale-110 hover:from-[#7b2cbf] hover:to-[#3c096c] transition-all duration-500 group"
                    >
                      View More
                      <svg
                        xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:cc="http://creativecommons.org/ns#"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                        xmlns:svg="http://www.w3.org/2000/svg"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                        version="1.1"
                        x="0px"
                        y="0px"
                        width={22}
                        height={22}
                        viewBox="0 0 100 100"
                        className="absolute left-1/2 -translate-x-1/2 top-10 group-hover:top-11 transition-all ease-in-out rotate-90"
                      >
                        <g transform="translate(0,-952.36218)">
                          <path
                            style={{
                              textIndent: 0,
                              textTransform: "none",
                              direction: "ltr",
                              baselineShift: "baseline",
                              color: "#000000",
                              enableBackground: "accumulate",
                            }}
                            d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
                            fill="#fff"
                            fillOpacity={1}
                            stroke="white"
                            strokeWidth={2}
                            marker="none"
                            visibility="visible"
                            display="inline"
                            overflow="visible"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "journey" && (
                <div className="space-y-6 w-full flex flex-col">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    My Journey
                  </h3>
                  <div className="relative flex flex-wrap gap-6">
                    <div className="absolute left-6 top-0 bottom-0 md:left-8 md:top-0 md:bottom-0 w-0.5 bg-[#3c096c]"></div>
                    <div className="space-y-8">
                      {journey.map((item, index) => (
                        <div key={index} className="relative flex items-start">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#5a189a] rounded-full flex items-center justify-center text-white border-4 border-gray-900">
                            {item.icon}
                          </div>
                          <div className="ml-6 flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="px-3 py-1 bg-[#7b2cbf] text-white text-sm font-bold rounded-full">
                                {item.year}
                              </span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-2">
                              {item.title}
                            </h4>
                            <p className="text-gray-300">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "interests" && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    A Part From Code
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {interests.map((interest, index) => (
                      <div
                        key={index}
                        className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-200"
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center text-white mr-4">
                            <img className="w-10" src={interest.icon} />
                          </div>
                          <h4 className="text-lg font-semibold text-white">
                            {interest.name}
                          </h4>
                        </div>
                        <p className="text-gray-300">{interest.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/20">
                    <h4 className="text-xl font-semibold text-white mb-3">
                      Let's Connect!
                    </h4>
                    <p className="text-gray-300 mb-4">
                      I'm always excited to discuss new projects, collaboration
                      opportunities, or just chat about technology and
                      development.
                    </p>
                    <button
                      onClick={() => {
                        scrollTo("contact");
                        onClose();
                      }}
                      className="flex items-center relative bg-[#C084FC] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#9d4edd] to-[#5a189a] hover:scale-110 hover:from-[#7b2cbf] hover:to-[#3c096c] group"
                    >
                      Get In Touch
                      <svg
                        xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:cc="http://creativecommons.org/ns#"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                        xmlns:svg="http://www.w3.org/2000/svg"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                        version="1.1"
                        x="0px"
                        y="0px"
                        width={44}
                        height={44}
                        viewBox="0 0 100 100"
                        className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 transition-all ease-in-out"
                      >
                        <g transform="translate(0,-952.36218)">
                          <path
                            style={{
                              textIndent: 0,
                              textTransform: "none",
                              direction: "ltr",
                              baselineShift: "baseline",
                              color: "#000000",
                              enableBackground: "accumulate",
                            }}
                            d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
                            fill="#fff"
                            fillOpacity={1}
                            stroke="white"
                            strokeWidth={2}
                            marker="none"
                            visibility="visible"
                            display="inline"
                            overflow="visible"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

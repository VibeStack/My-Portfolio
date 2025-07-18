import React, { useState } from "react";
import { useEffect, useRef } from "react";
import About from "./About";
import { useScroll } from "../hooks/useScroll";
import { runMatter } from "../matter";
import { Typewriter, Cursor } from "react-simple-typewriter";
import Header from "./Header";

export default function Home() {
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

  const { scrollToLatestWorks } = useScroll();
  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const wrapperRef = useRef(null);
  useEffect(() => {
    if (location.pathname === "/" && wrapperRef.current) {
      runMatter(wrapperRef.current);
    }
  }, []);

  return (
    <div className="home-page bg-[#111] text-white font-['Nunito']">
      <section className="h-screen flex flex-col justify-between">
        <Header popup={showAboutPopup} />
        <div
          className="absolute inset-0 hidden md:block"
          id="wrapper-canvas"
          ref={wrapperRef}
        />

        <div className={`flex -mt-10 relative`}>
          <div className="max-w-screen-xl w-full mx-auto">
            <svg
              width={406}
              height={368}
              viewBox="0 0 406 368"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute top-0 left-1/2 -translate-y-[80px] sm:-translate-y-[100px] md:-translate-y-[180px] -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[650px] h-auto"
            >
              <path
                d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                stroke="#3E0B57"
                strokeOpacity="0.9"
                strokeWidth={10}
              />
              <path
                d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                stroke="url(#paint0_linear)"
                strokeWidth={10}
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="205.549"
                  y1="20.0169"
                  x2="204.338"
                  y2="342.461"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ced4da" />
                  <stop offset="0.9" stopColor="#240046" stopOpacity="0.001" />
                </linearGradient>
              </defs>
            </svg>
            <div className="relative ml-4 md:ml-12">
              <h1 className="pointer-events-none text-4xl md:text-6xl font-['spartan'] mr-20">
                <p>Arshdeep Anand</p>
              </h1>
              <p className="pointer-events-none font-['Merriweather'] italic my-4 md:my-8 font-bold">
                <Typing
                  text={[
                    "Software Developer",
                    "Full Stack Develoepr",
                    "MERN Stack Developer",
                  ]}
                />
              </p>
              <button
                className="flex items-center relative bg-[#C084FC] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#9d4edd] to-[#5a189a] hover:scale-110 hover:from-[#7b2cbf] hover:to-[#3c096c] group"
                onClick={() => setShowAboutPopup(true)}
              >
                About Me
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
              {showAboutPopup && (
                <About onClose={() => setShowAboutPopup(false)} />
              )}
            </div>
          </div>
          <ul className="ml-auto px-4 space-y-6 text-[#b0b2c3] absolute right-8">
            <li>
              <a
                href="https://www.linkedin.com/in/arshdeep-anand-600865288/"
                target="_blank"
              >
                <svg
                  className="w-7 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/radioactive_arsh05/"
                target="_blank"
              >
                <svg
                  className="w-7 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:arshanand0527@gmail.com" target="_blank">
                <svg
                  className="w-7 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/VibeStack/" target="_blank">
                <svg
                  className="w-7 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div
          className={`relative self-center after:content-[''] after:absolute after:w-[2px] after:h-5 after:left-1/2 after:-translate-x-1/2 after:bg-[#444] after:top-[100px] ${
            showAboutPopup ? "opacity-0" : ""
          }`}
        >
          <button
            onClick={scrollToLatestWorks}
            className="flex items-center relative bg-[#C084FC] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#9d4edd] to-[#5a189a] hover:scale-110 hover:from-[#7b2cbf] hover:to-[#3c096c] transition-all duration-500 group mb-20 "
          >
            Latest Works
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
              className="absolute left-1/2 -translate-x-1/2 top-11 group-hover:top-12 transition-all ease-in-out rotate-90"
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
      </section>
    </div>
  );
}

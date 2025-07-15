import React, { useEffect, useState } from "react";

export default function About({ onClose }) {
  const myLearnedTech = [
    "javascript",
    "react.js",
    "node.js",
    "express.js",
    "mongoDB",
    "mongoose",
    "html",
    "css",
    "sass",
    "tailwind",
    "git",
    "github",
    "terminal",
  ];
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="fixed inset-10 bg-[#191919] z-10">
        <div className={`flex flex-col lg:flex-row justify-center items-center absolute w-full h-full p-5 md:p-10 border-2 border-white rounded-xl transition-all duration-700 ease-in-out transform ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="bg-[#191919] flex flex-col md:flex-row justify-center items-center">
            <div>
              <div className="mb-1 md:mb-4">
                <h2 className="p-4 text-4xl lg:text-5xl text-purple-500">About Me</h2>
                <p className="leading-relaxed	text-[12px] lg:text-[16px] px-4 font-sans mb-2">
                  A Tech Enthusiast, who loves to help, explore, and dive deep
                  into concepts. I'm passionate about building meaningful tech
                  solutions and continuously expanding my knowledge.
                </p>
                <p className="leading-relaxed	text-[12px] lg:text-[16px] px-4 font-sans mb-2">
                  Technologies and tools I use to craft modern, responsive, and
                  high-performance web applications.
                </p>
                {myLearnedTech.map((tech, i) => {
                  return (
                    <span
                      key={i}
                      className="inline-block py-[5px] px-[10px] border-2 border-[#3d3d3d] rounded-[50px] mx-1 my-1 text-[#f3dfff] text-[12px]"
                    >
                      #{tech}
                    </span>
                  );
                })}
              </div>
              <div className="m-2 md:m-4">
                <h2 className="p-2 md:p-4 text-4xl lg:text-5xl text-purple-500">MERN Stack</h2>
                <div className="flex wrap-normal justify-center gap-5 sm:gap-12 lg:gap-15 pt-10 pb-5 ">
                  <span className="flex flex-col justify-center items-center p-1">
                    <div className="relative flex items-center justify-center flex-col group">
                      <p className="after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:-z-1 absolute -top-12 opacity-0 bg-[#49a149] px-2 py-1 rounded text-black group-hover:opacity-100">
                        MongoDB
                      </p>
                      <img
                        className="relative"
                        src="/img/mongoDB.svg"
                        alt=""
                      />
                    </div>
                    <h2 className="font-extrabold text-2xl pt-2 text-[#49a149]">
                      M
                    </h2>
                  </span>
                  <span className="flex flex-col justify-center items-center p-1">
                    <div className="relative flex items-center justify-center flex-col group">
                      <p className="after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:-z-1 absolute -top-12 opacity-0 bg-[#FFF] px-2 py-1 rounded text-black group-hover:opacity-100">
                        Express.JS
                      </p>
                      <img
                        className="relative"
                        src="/img/express.svg"
                        alt=""
                      />
                    </div>
                    <h2 className="font-extrabold text-2xl pt-2 text-[#fff]">
                      E
                    </h2>
                  </span>
                  <span className="flex flex-col justify-center items-center p-1">
                    <div className="relative flex items-center justify-center flex-col group">
                      <p className="after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:-z-1 absolute -top-12 opacity-0 bg-[#64dcf5] px-2 py-1 rounded text-black group-hover:opacity-100">
                        React.JS
                      </p>
                      <img
                        className="relative"
                        src="/img/react.svg"
                        alt=""
                      />
                    </div>
                    <h2 className="font-extrabold text-2xl pt-2 text-[#64dcf5]">
                      R
                    </h2>
                  </span>
                  <span className="flex flex-col justify-center items-center p-1">
                    <div className="relative flex items-center justify-center flex-col group">
                      <p className="after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:-z-1 absolute -top-12 opacity-0 bg-[#8dc154] px-2 py-1 rounded text-black group-hover:opacity-100">
                        Node.JS
                      </p>
                      <img
                        className="relative"
                        src="/img/node.svg"
                        alt=""
                      />
                    </div>
                    <h2 className="font-extrabold text-2xl pt-2 text-[#8dc154]">
                      N
                    </h2>
                  </span>

                </div>
              </div>
            </div>
            <div>
              <img className="hidden sm:block sm:w-[250px] md:w-2xl lg:w-7xl rounded-2xl" src="/img/aboutImg.jpg" alt="" />
            </div>
          </div>
          <button className="fixed top-5 right-5 p-2 border-2 border-white rounded-full transition-transform duration-500 hover:rotate-z-180 z-10"
            onClick={onClose}>
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
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import SingleToolTips from "./SingleToolTips";

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
    "java",
    "mysql",
  ];
  const aboutToolTips = [
    {
      tech: "MongoDB",
      img: "/img/mongoDB.svg",
      symbol: "M",
      textColor: "#499e49",
    },
    {
      tech: "Express.JS",
      img: "/img/express.svg",
      symbol: "E",
      textColor: "#fff",
    },
    {
      tech: "React.JS",
      img: "/img/react.svg",
      symbol: "R",
      textColor: "#64dcf5",
    },
    {
      tech: "Node.JS",
      img: "/img/node.svg",
      symbol: "N",
      textColor: "#8dc154",
    },
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
      <div className="fixed inset-0 m-auto bg-transparent z-50 flex justify-center items-center max-w-[1024px]">
        <div
          className={`bg-[#191919] flex flex-col lg:flex-row justify-center items-center absolute  p-[24px] m-[24px] box-border border-2 border-white rounded-xl transition-all duration-700 ease-in-out transform ${
            show ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="bg-[#191919] flex flex-col md:flex-row justify-center items-center">
            <div>
              <div className="m-1 mb-2">
                <h2 className="p-2 text-[24px] lg:text-[36px] text-purple-500">
                  About Me
                </h2>
                <p className="leading-relaxed	text-[10px] sm:text-[12px] px-4 font-sans mb-2">
                  A Tech Enthusiast, who loves to help, explore, and dive deep
                  into concepts. I'm passionate about building meaningful tech
                  solutions and continuously expanding my knowledge.
                </p>
                <p className="leading-relaxed	text-[10px] sm:text-[12px] px-4 font-sans mb-2">
                  Technologies and tools I use to craft modern, responsive, and
                  high-performance web applications.
                </p>
                {myLearnedTech.map((tech, i) => {
                  return (
                    <span
                      key={i}
                      className="inline-block py-[5px] px-[10px] border-2 border-[#3d3d3d] rounded-[50px] mx-1 my-1 text-[#f3dfff] text-[8px] sm:text-[12px]"
                    >
                      #{tech}
                    </span>
                  );
                })}
              </div>
              <div className="m-1 md:m-4">
                <h2 className="text-[24px] lg:text-[36px] text-purple-500">
                  MERN Stack
                </h2>
                <div className="flex wrap-normal justify-center gap-5 sm:gap-12 lg:gap-15 pt-2 sm:pt-5 pb-2">
                  {
                    aboutToolTips.map(({tech,img,symbol,textColor},i)=>{
                      return (<SingleToolTips key={i} tech={tech} img={img} symbol={symbol} textColor={textColor} />)
                    })
                  }
                </div>
              </div>
            </div>
            <div>
              <img
                className="hidden sm:block sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] rounded-2xl"
                src="/img/aboutImg.jpg"
                alt=""
              />
            </div>
          </div>
          <button
            className="fixed top-5 right-5 p-2 border-2 border-white rounded-full transition-transform duration-500 hover:rotate-z-180 z-10"
            onClick={onClose}
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
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function SingleProject({
  websiteLink,
  websiteImg,
  websiteName,
  shortDisc,
  longDisc,
  techUsed,
  imgPosition,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-[80px] items-center relative my-25">
      <div className={`h-[1px] ${
          imgPosition === "left" ? "left-1/4 right-1/2" : "left-1/2 right-1/4"
        } bg-[#ced4da] absolute top-1/2 hidden sm:block`}
      />
      <a href={websiteLink} className="w-4 h-4 rounded-full border-[3px] border-[#ced4da] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block">
      </a>

      <div className="order-2 sm:order-1 w-full pt-5">
        <h3 className="text-[#ced4da] font-bold text-2xl md:text-4xl">
          {websiteName}
        </h3>
        <span className="text-[#ced4da] text-base md:text-lg">
          {`(${shortDisc})`}
        </span>
        <p className="text-justify text-sm md:text-base mt-2 ">{longDisc}</p>
        <ul className="flex flex-wrap gap-2 mt-2 ">
          {techUsed.map((tech, i) => {
            return (
              <li
                key={i}
                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
              >
                #{tech}
              </li>
            );
          })}
        </ul>
      </div>
      <a
        href={websiteLink}
        className={`${
          imgPosition === "right" ? "order-1 sm:order-2" : "order-1"
        }flex w-full relative justify-center sm:justify-start items-center`}
      >
        <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
          <img
            className="max-w-[400px] w-full pl-auto relative z-10 drop-shadow-[0_0_100px_rgba(255,255,255,0.6)]"
            src={websiteImg}
            alt=""
          />
          <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#ced4da] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 after:-z-1 text-[#111] md:text-[12px] lg:text-[16px] group">
            {websiteName}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-external-link"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1={10} y1={14} x2={21} y2={3} />
            </svg>
          </span>
        </div>
      </a>
    </div>
  );
}

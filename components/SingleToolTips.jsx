import React from "react";

export default function SingleToolTips({tech,img,symbol,textColor}) {
  return (
    <span className="flex flex-col justify-center items-center p-1">
      <div className="relative flex items-center justify-center flex-col group">
        <p style={{backgroundColor:textColor}} className={`after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 absolute -top-12 opacity-0 px-4 py-2 rounded text-black group-hover:opacity-100 group-hover:rotate-y-360 transition-all ease-in-out duration-200`}>
          {tech}
        </p>
        <img className="relative" src={img} alt="" />
      </div>
      <h2 style={{color:textColor}} className={`font-extrabold text-2xl pt-2`}>{symbol}</h2>
    </span>
  );
}

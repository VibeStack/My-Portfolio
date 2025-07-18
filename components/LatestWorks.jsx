import React from "react";
import SingleProject from "./SingleProject";
import { useScroll } from "../hooks/useScroll";
import { latestWorksCollection } from "../data";

export default function LatestWorks() {
  const { scrollRef } = useScroll();
  return (
    <>
      <section ref={scrollRef}
        className="pt-10 max-w-screen mx-auto px-10 md:px-15 lg:px-40 relative pb-8 sm:pb-16 bg-[#111] text-white"
      >
        <h2 className="text-[24px] sm:text-6xl relative z-10 font-extrabold px-4 py-4 w-max mx-auto text-center text-[#5a189a] sm:border-b-2 sm:border-[#9d4edd] border-2 border-[#9d4edd] rounded-md shadow-md shadow-[#e0aaff] font-['Nunito'] transition-all duration-500 ease-in-out bg-[#111]">
          Latest Works
        </h2>

        {latestWorksCollection
          .map((works) => {
            return works;
          })
          .map((work) => {
            return (
              <SingleProject
                key={work.key}
                websiteLink={work.websiteLink}
                websiteImg={work.websiteImg}
                websiteName={work.websiteName}
                shortDisc={work.shortDisc}
                longDisc={work.longDisc}
                techUsed={work.techUsed}
                imgPosition={work.imgPosition}
              />
            );
          })}
        <div className="w-[1px] hidden sm:block bg-[#ced4da] absolute top-30 bottom-0 left-1/2 -translate-x-1/2 " />
      </section>
    </>
  );
}

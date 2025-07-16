import React from "react";
import SingleProject from "./SingleProject";
import { useScroll } from "../hooks/useScroll";

export default function LatestWorks() {
  const { scrollRef } = useScroll();
  const latestWorksCollection = [
    {
      key:crypto.randomUUID(),
      websiteLink: "https://countries-detailed-information-a.netlify.app/",
      websiteImg: "/img/country-api.png",
      websiteName: "Country API",
      shortDisc: "Global Data",
      longDisc:
        "CountryAPI offers a comprehensive platform for accessing detailed global information, seamlessly integrating into applications",
      techUsed: [
        "html",
        "css",
        "react.js",
        "javascript",
        "parcel",
      ],
      imgPosition: "left",
    },
    {
      key:crypto.randomUUID(),
      websiteLink: "https://conference-ticket-generator-a.netlify.app/",
      websiteImg: "/img/conference-ticket-generator.png",
      websiteName: "Conference Ticket Generator",
      shortDisc: "Ticket Generator",
      longDisc:
        "TicketGen is an innovative EdTech platform that simplifies conference ticket creation with a responsive interface. It delivers seamless ticket design and management.",
      techUsed: [
        "html",
        "css",
        "javascript",
      ],
      imgPosition: "right",
    },
    {
      key:crypto.randomUUID(),
      websiteLink: "https://focus-on-today-a.netlify.app/",
      websiteImg: "/img/focus-on-today.png",
      websiteName: "Focus On Today",
      shortDisc: "Task Manager",
      longDisc:
        "FocusOnToday is a dynamic platform for adding, tracking, and locking tasks with a user-friendly interface. It streamlines task management and completion tracking.",
      techUsed: [
        "html",
        "css",
        "javascript",
      ],
      imgPosition: "left",
    },
  ];
  return (
    <>
      <section ref={scrollRef}
        className="pt-10 max-w-screen mx-auto px-10 md:px-15 lg:px-40 relative pb-8 sm:pb-16 bg-[#111] text-white"
      >
        <h2 className="text-4xl sm:text-6xl relative z-100 font-extrabold px-4 py-2 w-max mx-auto text-center text-[#5a189a] sm:border-b-2 sm:border-[#9d4edd] border-2 border-[#9d4edd] rounded-md shadow-2xl shadow-[#e0aaff] font-['Nunito'] opacity-75 transition-all hover:opacity-100 sm:scale-100 sm:hover:scale-110 duration-500 ease-in-out">
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
      <section className="max-w-screen mx-auto px-10 bg-[#111] text-center">
        <h2 className="text-4xl sm:text-6xl relative z-10 font-extrabold px-4 py-2  mx-auto inline-block text-center text-[#5a189a] sm:border-b-2 sm:border-[#9d4edd] border-2 border-[#9d4edd] rounded-md shadow-2xl shadow-[#e0aaff] p-6 font-['Nunito'] opacity-75 transition-all hover:opacity-100 sm:scale-100 sm:hover:scale-110 duration-500 ease-in-out">What Experts Say About My Work</h2>
      </section>
    </>
  );
}

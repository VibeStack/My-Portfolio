import { useRef } from "react";
import { ScrollContext } from "./scrollContext";

export const ScrollProvider = ({ children }) => {
  const sectionRefs = {
    home:useRef(null),
    latestWorks:useRef(null),
    moreSkills:useRef(null),
    contact:useRef(null),
  }

  const scrollTo = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider value={{ sectionRefs, scrollTo }}>
      <div className="relative w-full min-h-screen bg-[#0d0d11] text-white overflow-y-scroll overflow-x-hidden scroll-smooth">
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

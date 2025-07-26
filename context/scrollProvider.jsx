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
        <div className="scroll-container relative">
          {children}
        </div>
    </ScrollContext.Provider>
  );
};

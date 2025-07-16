import { useContext } from "react";
import { ScrollContext } from "../context/scrollContext";

export const useScroll = () => useContext(ScrollContext);

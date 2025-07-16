import { useRef } from 'react';
import { ScrollContext } from './scrollContext';

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  const scrollToLatestWorks = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ scrollRef, scrollToLatestWorks }}>
      {children}
    </ScrollContext.Provider>
  );
};


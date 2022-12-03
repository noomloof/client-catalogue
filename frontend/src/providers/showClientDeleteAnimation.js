import { createContext, useState } from 'react';

export const ShowClientDeleteAnimationContext = createContext([]);

export const ShowClientDeleteAnimationProvider = ({ children }) => {
  const [showClientDeleteAnimation, setShowClientDeleteAnimation] =
    useState(false);

  return (
    <ShowClientDeleteAnimationContext.Provider
      value={{ showClientDeleteAnimation, setShowClientDeleteAnimation }}
    >
      {' '}
      {children}{' '}
    </ShowClientDeleteAnimationContext.Provider>
  );
};

import { createContext, useState } from 'react';

export const ShowClientRegisterAnimationContext = createContext([]);

export const ShowClientRegisterAnimationProvider = ({ children }) => {
  const [showClientRegisterAnimation, setShowClientRegisterAnimation] =
    useState(false);

  return (
    <ShowClientRegisterAnimationContext.Provider
      value={{ showClientRegisterAnimation, setShowClientRegisterAnimation }}
    >
      {' '}
      {children}{' '}
    </ShowClientRegisterAnimationContext.Provider>
  );
};

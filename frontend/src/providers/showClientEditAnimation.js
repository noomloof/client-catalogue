import { createContext, useState } from 'react';

export const ShowClientEditAnimationContext = createContext([]);

export const ShowClientEditAnimationProvider = ({ children }) => {
  const [showClientEditAnimation, setShowClientEditAnimation] = useState(false);

  return (
    <ShowClientEditAnimationContext.Provider
      value={{ showClientEditAnimation, setShowClientEditAnimation }}
    >
      {' '}
      {children}{' '}
    </ShowClientEditAnimationContext.Provider>
  );
};

import { createContext, useState } from 'react';

export const ShowLoginAnimationContext = createContext([]);

export const ShowLoginAnimationProvider = ({ children }) => {
  const [showLoginAnimation, setShowLoginAnimation] = useState(false);

  return (
    <ShowLoginAnimationContext.Provider
      value={{ showLoginAnimation, setShowLoginAnimation }}
    >
      {' '}
      {children}{' '}
    </ShowLoginAnimationContext.Provider>
  );
};

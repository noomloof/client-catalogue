import { createContext, useState } from 'react';

export const ShowLoginContext = createContext([]);

export const ShowLoginProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <ShowLoginContext.Provider value={{ showLogin, setShowLogin }}>
      {' '}
      {children}{' '}
    </ShowLoginContext.Provider>
  );
};

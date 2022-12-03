import { createContext, useState } from 'react';

export const ShowClientDeleteContext = createContext([]);

export const ShowClientDeleteProvider = ({ children }) => {
  const [showClientDelete, setShowClientDelete] = useState(false);

  return (
    <ShowClientDeleteContext.Provider
      value={{ showClientDelete, setShowClientDelete }}
    >
      {' '}
      {children}{' '}
    </ShowClientDeleteContext.Provider>
  );
};

import { createContext, useState } from 'react';

export const ShowClientEditContext = createContext([]);

export const ShowClientEditProvider = ({ children }) => {
  const [showClientEdit, setShowClientEdit] = useState(false);

  return (
    <ShowClientEditContext.Provider
      value={{ showClientEdit, setShowClientEdit }}
    >
      {' '}
      {children}{' '}
    </ShowClientEditContext.Provider>
  );
};

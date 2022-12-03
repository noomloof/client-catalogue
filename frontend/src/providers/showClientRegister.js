import { createContext, useState } from 'react';

export const ShowClientRegisterContext = createContext([]);

export const ShowClientRegisterProvider = ({ children }) => {
  const [showClientRegister, setShowClientRegister] = useState(false);

  return (
    <ShowClientRegisterContext.Provider
      value={{ showClientRegister, setShowClientRegister }}
    >
      {' '}
      {children}{' '}
    </ShowClientRegisterContext.Provider>
  );
};

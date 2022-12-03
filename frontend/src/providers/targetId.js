import { createContext, useState } from 'react';

export const TargetIdContext = createContext([]);

export const TargetIdProvider = ({ children }) => {
  const [targetId, setTargetId] = useState('');

  return (
    <TargetIdContext.Provider value={{ targetId, setTargetId }}>
      {' '}
      {children}{' '}
    </TargetIdContext.Provider>
  );
};

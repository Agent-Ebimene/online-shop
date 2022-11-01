import React, { createContext, useState } from 'react';
import { AppContextType, ProviderType } from '../services/model';

export const AppContext = createContext({} as AppContextType);
export const AppContextProvider: React.FC<ProviderType> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const handleAddCount = () => setCount(count + 1);
  return (
    <AppContext.Provider
      value={{
        count,
        handleAddCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

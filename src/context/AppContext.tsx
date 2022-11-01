import React, { createContext, useState } from 'react';
import { AppContextType, ProviderType, WorkShopType } from '../services/model';

export const AppContext = createContext({} as AppContextType);
export const AppContextProvider: React.FC<ProviderType> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<WorkShopType[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const handleAddCount = () => setCount(count + 1);

  const handleOpenCart = () => setIsCartOpen(true);
  const handleAddToCart = (cartItem: WorkShopType) => {
    if (!(cartItems.filter((item) => item.id === cartItem.id).length > 0)) {
      setCartItems((prev) => [...prev, { ...cartItem }]);
      handleAddCount();
      handleOpenCart();
    } else {
      handleAddCount();
    }
  };
  return (
    <AppContext.Provider
      value={{
        count,
        cartItems,
        isCartOpen,
        handleAddCount,
        handleAddToCart,
        handleOpenCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

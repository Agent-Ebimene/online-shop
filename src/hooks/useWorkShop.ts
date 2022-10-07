import { useState, useContext } from 'react';
import { WorkShopType } from '../services/model';
import { AppContext } from '../context/AppContext';
const useWorkShop = () => {
  const URL = ' http://localhost:3000/workshops';
  const [loading, setLoading] = useState<boolean>(true);
  const [workShops, setWorkShops] = useState<WorkShopType[]>([]);
  // const [cartItems, setCartItems] = useState<WorkShopType[]>([]);
  const { count, setCount, isCartOpen, setIsCartOpen } = useContext(AppContext);
  const getWorkshops = async () => {
    const response = await fetch(URL);
    const responseData = await response.json();
    setWorkShops(responseData);
    setLoading(!loading);
  };
  const handleCartBar = () => {
    setIsCartOpen(!isCartOpen);
  };
  const handleCartCount = () => {
    setCount(count + 1);
  };
  // const handleAddCartItems = (id: number) => {};
  return {
    getWorkshops,
    handleCartBar,
    handleCartCount,
    workShops: workShops,
    loading: loading,
  };
};
export default useWorkShop;

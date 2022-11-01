import { useState } from 'react';
import { WorkShopType } from '../services/model';

const useWorkShop = () => {
  const URL = ' http://localhost:3000/workshops';
  const [loading, setLoading] = useState<boolean>(true);
  const [workShops, setWorkShops] = useState<WorkShopType[]>([]);
  const getWorkshops = async () => {
    const response = await fetch(URL);
    const responseData = await response.json();
    setWorkShops(responseData);

    setLoading(!loading);
  };

  return {
    getWorkshops,
    workShops: workShops,
    loading: loading,
  };
};
export default useWorkShop;

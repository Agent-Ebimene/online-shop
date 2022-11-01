import React, { useEffect, useState, useContext } from 'react';

import { WorkShopType } from '../../services/model';
import Header from '../../components/Header/Header';
import { AppContext } from '../../context/AppContext';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import WorkshopCard from './WorkshopCard';
import useWorkShop from '../../hooks/useWorkShop';
import './WorkShop.css';

const WorkshopGallery: React.FC = () => {
  const { handleAddCount, count } = useContext(AppContext);
  const [cartItems, setCartItems] = useState<WorkShopType[]>([]);
  const { getWorkshops, workShops, loading } = useWorkShop();
  const handleAddToCart = (cartItem: WorkShopType) => {
    if (!(cartItems.filter((item) => item.id === cartItem.id).length > 0)) {
      setCartItems((prev) => [...prev, { ...cartItem }]);
      handleAddCount();
    } else {
      handleAddCount();
    }
  };
  console.log('App Re-rendered!');
  useEffect(() => {
    getWorkshops();
  }, []);
  useEffect(() => {
    console.log(count, cartItems);
  }, [count, cartItems]);
  return (
    <div>
      <Header />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='workshop-container'>
          <h2>Workshops</h2>
          <h3>Displayed:</h3>
          {workShops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkshopGallery;

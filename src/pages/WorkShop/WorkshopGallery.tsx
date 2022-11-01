import React, { useEffect, useState, useContext } from 'react';

import { WorkShopType } from '../../services/model';
import Header from '../../components/Header/Header';
import { AppContext } from '../../context/AppContext';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import CartItems from '../../components/CartItems/CartItems';
import WorkshopCard from './WorkshopCard';
import useWorkShop from '../../hooks/useWorkShop';
import './WorkShop.css';

const WorkshopGallery: React.FC = () => {
  const { cartItems, count, isCartOpen } = useContext(AppContext);

  const { getWorkshops, workShops, loading } = useWorkShop();

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
      {isCartOpen && <CartItems />}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='workshop-container'>
          <h2>Workshops</h2>
          <h3>Displayed:</h3>
          {workShops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkshopGallery;

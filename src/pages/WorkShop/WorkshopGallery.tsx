import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import WorkshopCard from './WorkshopCard';
import useWorkShop from '../../hooks/useWorkShop';
import './WorkShop.css';

const WorkshopGallery: React.FC = () => {
  const { getWorkshops, handleCartBar, workShops, loading } = useWorkShop();
  console.log('App Re-rendered!');
  useEffect(() => {
    getWorkshops();
  }, []);
  return (
    <div>
      <Header />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='workshop-container'>
          <h2>Workshops</h2>
          {workShops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkshopGallery;

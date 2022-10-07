import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import WorkshopCard from './WorkshopCard';
import useWorkShop from '../../hooks/useWorkShop';
import './WorkShop.css';
import cartIcon from '../../assets/images/cart-icon.png';
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
            <WorkshopCard key={workshop.id} />
            // <div key={workshop.id} className='workshop-card'>
            //   <article className='workshop-img-container'>
            //     {' '}
            //     <img src={workshop.imageUrl} alt={`${workshop.title}`} />
            //   </article>
            //   <article className='workshop-info'>
            //     {' '}
            //     <h6>{workshop.date}</h6>
            //     <h2 className='workshop-title'>{workshop.title}</h2>
            //     <div className='workshop-card-footer'>
            //       <h3>{workshop.price} EUR</h3>
            //       <button type='button'>
            //         <img src={cartIcon} alt='cart icon' />
            //       </button>
            //     </div>
            //   </article>
            // </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkshopGallery;

import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';
import { WorkshopCardProps } from '../../services/model';
import cartIcon from '../../assets/images/cart-icon.png';

const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop }) => {
  const { handleAddToCart } = useContext(AppContext);
  const { id, date, title, price, imageUrl } = workshop;
  return (
    <section>
      <div key={id} className='workshop-card'>
        <article className='workshop-img-container'>
          {' '}
          <img src={imageUrl} alt={`${title}`} />
        </article>
        <article className='workshop-info'>
          {' '}
          <h6>{date}</h6>
          <h2 className='workshop-title'>{title}</h2>
          <div className='workshop-card-footer'>
            <h3>{price} EUR</h3>
            <button type='button' onClick={() => handleAddToCart(workshop)}>
              <img src={cartIcon} alt='cart icon' />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WorkshopCard;

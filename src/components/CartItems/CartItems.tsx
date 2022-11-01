import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
const CartItems = () => {
  const { cartItems } = useContext(AppContext);
  return (
    <div className='cart-items'>
      {cartItems.map((cartItem, i) => (
        <div key={i}>
          <h3>{cartItem.title}</h3>
          <img src={cartItem.imageUrl} alt={cartItem.title} />
        </div>
      ))}
    </div>
  );
};

export default CartItems;

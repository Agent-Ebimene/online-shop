import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';
import './Header.css';
import logo from '../../assets/images/logo.png';
import cartIcon from '../../assets/images/cart-icon.png';
import notificationIcon from '../../assets/images/notification-icon.png';
const Header = () => {
  const { cartItems, count } = useContext(AppContext);
  return (
    <header className='app-header'>
      <div>
        <img src={logo}></img>
      </div>
      <article className='cart-container'>
        <div className='cart-icon-container'>
          <img src={cartIcon} alt='cart icon image' className='cart-icon' />
          <div className='notification-container'>
            {cartItems.length > 0 && (
              <img src={notificationIcon} alt='Cart notification' className='notification-icon' />
            )}
          </div>
        </div>
        <h4>Cart is Empty</h4>
      </article>
    </header>
  );
};

export default Header;

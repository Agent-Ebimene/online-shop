import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import cartIcon from '../../assets/images/cart-icon.png';
const Header = () => {
  return (
    <header className='app-header'>
      <div>
        <img src={logo}></img>
      </div>
      <article className='cart-container'>
        <img src={cartIcon} alt='cart icon image' />
        <h4>Cart is Empty</h4>
      </article>
    </header>
  );
};

export default Header;

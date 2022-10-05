import React from 'react';
import logo from './assets/images/logo.png';
import cartIcon from './assets/images/eva_shopping-cart-outline.png';
import './App.css';

function App() {
  return (
    <div>
      <header className='app-header'>
        <div>
          <img src={logo}></img>
        </div>
        <article className='cart-container'>
          <img src={cartIcon} alt='cart icon' />
          <h4>Cart is Empty</h4>
        </article>
      </header>
    </div>
  );
}

export default App;

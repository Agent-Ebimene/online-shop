import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import cartIcon from '../../assets/images/cartIcon.png';
import closeIcon from '../../assets/images/close-icon.png';
import notificationIcon from '../../assets/images/notification-icon.png';
const CartBar = () => {
  return (
    <section className='cart-bar-container'>
      <article className='cart-bar-header'>
        <div className='cart-bar-icon-container'>
          <div>
            <img src={cartIcon} alt='Cart bar icon' />
          </div>
          <img src={notificationIcon} alt='Notification icon'></img>
        </div>
        <h2> Workshop</h2>
        <div>
          <img src={closeIcon} alt='Cart close icon' />
        </div>
      </article>
    </section>
  );
};

export default CartBar;

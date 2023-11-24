import React from 'react';
import { useCart } from '../services/cartContext';
import '../Styles/CartPage.css';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className='cart-main-container'>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={`https://shop.polymer-project.org/esm-bundled/${item.image}`} alt={item.title} style={{ maxWidth: '100px' }} />
              <div className='title-container'>
                <h3>{item.title}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}
          <div className="cart-summary">
            <p>Total Price: ${totalPrice}</p>
            <Link to="/"><button className="checkout-btn">Order Now</button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

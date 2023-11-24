import React from 'react'
import Cart from '../shopping-cart.png';
import { Link } from 'react-router-dom';
import '../Styles/Header.css'
import { useCart} from '../services/cartContext'

const Header = () => {
  const {cart} = useCart();
  let cartCount = cart.length;
  return (
    <>
      <div className='header'>
        <div className='title'>
          <Link to="/"><span>SHOP</span></Link>
          <Link to="/cart">
            <img src={Cart} alt="Cart" />
            {cartCount > 0 && <p className="cart-count">{cartCount}</p>}
          </Link>
        </div>
        <div className='categories'>
          <Link to="/mens-outerwear">Men's Outerwear</Link>
          <Link to="/ladies-outerwear">Ladies Outerwear</Link>
          <Link to="/mens-t-shirts">Men's T-Shirts</Link>
          <Link to="/ladies-t-shirts">Ladies T-Shirts</Link>
        </div>
      </div>
    </>
  )
}

export default Header

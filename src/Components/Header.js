import React from 'react'
import Cart from '../shopping-cart.png';
import { Link } from 'react-router-dom';
import '../Styles/Header.css'

const Header = () => {
  return (
    <>
      <div className='header'>
            <div className='title'>
                <span>SHOP</span>
                <img src={Cart} alt="Cart" />
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

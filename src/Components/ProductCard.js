import React, { useEffect, useState } from 'react';
import '../Styles/ProductCard.css';
import { useCart } from '../services/cartContext';

const ProductCard = ({ productDetails }) => {
  const { addToCart } = useCart();

  return (
    <div className="product_container">
      <div className="product_image">
        <img src={`https://shop.polymer-project.org/esm-bundled/${productDetails.image}`} alt={productDetails.title} />
      </div>
      <h3>{productDetails.title}</h3>
      <span>{`$ ${productDetails.price}`}</span>
      <button onClick={() => {addToCart(productDetails)}}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

import React, { useEffect, useState } from 'react';
import '../Styles/ProductCard.css'
const ProductCard = ({productDetails}) => {

  return (
    <>
      <div className="product_container">
        <div className="product_image">
          <img src={`https://shop.polymer-project.org/esm-bundled/${productDetails.image}`} alt={productDetails.title} />
        </div>
        <h3>{productDetails.title}</h3>
        <span>{`$ ${productDetails.price}`}</span>
      </div>
    </>
  );
}

export default ProductCard;

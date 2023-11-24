import React from 'react'
import ProductCard from '../Components/ProductCard'
import '../Styles/CategoryPage.css'

const CategoryPage = ({ productData }) => {
    return (
        <>
            <div className="main-container">
                <div className="showcase">
                    <img src={productData[0].category_image} alt={productData[0].category_name} />
                    <h3>{productData[0].category_name}</h3>
                    <span>{`(${productData.length - 1} items)`}</span>
                </div>

                <div className="products-container">
                    {productData.slice(1).map((product, index) => (
                        <ProductCard key={index} productDetails={product} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default CategoryPage

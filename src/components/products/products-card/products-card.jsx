import React from 'react'
import "../products.css"

function ProductCard({ title, description, imageSrc, imageAlt, productUrl }) {
  return (
    <a href={productUrl}>
    <div className="products-card">
      <h5 className='product-card-title'>{title}</h5>
      <p className='product-card-description'>{description}</p>
      <img src={imageSrc} alt={imageAlt} className='product-card-img' />
    </div>
    </a>
  );
}
export default ProductCard
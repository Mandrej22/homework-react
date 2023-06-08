import React from 'react'
import '../products/products.css'
import ProductCard from "./products-card/products-card"
import product1 from "../../assets/pngs/Group 1098.png"
import product2 from "../../assets/pngs/Group 1911.png"

function Products() {
  return (
    <div className="products">
    <div className="products-title">
    <h2>Take a look at
        <br /> 
    <span>our products</span>
    </h2>
  </div>
  <div className="products-card-container">
  <ProductCard
  title="Via"
  description="Business travel automatization software."
  imageSrc={product1}
  imageAlt="Via"
  productUrl={"#"}
/>
<ProductCard
  title="Shift"
  description="Central base of transfered mobile and fixed numbers."
  imageSrc={product2}
  imageAlt="Shift"
  productUrl={"#"}
/>
</div>
  </div>
  )
}

export default Products
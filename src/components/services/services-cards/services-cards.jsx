import React from 'react'
import '../services.css'
import image1 from '../../../assets/svgs/Group 1045.svg'

function ServicesCards() {
  const products = {
    product1: {
      title: "Mobile apps development",
      imageSrc: image1,
      productUrl: "#"
    },
    product2: {
      title: "Website development",
      imageSrc: image1,
      productUrl: "#"
    },
    product3: {
      title: "SaaS",
      imageSrc: image1,
      productUrl: "#"
    }
  };

  return (
    <div className='services-cards-grid'>
    {Object.values(products).map((product) => (
      <div className='services-cards'>
      <a href={product.productUrl}>
      <img src={product.imageSrc} alt="design"/>
      <h5>{product.title}</h5>
     </a>
    </div>
     ))}
    </div>
   
  )
}

export default ServicesCards
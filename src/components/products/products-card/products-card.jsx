import React from 'react';
import styles from '../products.module.sass';

function ProductCard({ title, description, imageSrc, imageAlt, productUrl }) {
  return (
    <div className={styles['products-card']}>
      <h3 className={styles['product-card-title']}>{title}</h3>
      <p className={styles['product-card-description']}>{description}</p>
      <img className={styles['product-card-img']} src={imageSrc} alt={imageAlt} />
    </div>
  );
}

export default ProductCard;

import React from 'react';
import Button from '../../Button/Button';
import PropTypes from 'prop-types';
import './ShopCard.css';

function ShopCard(props) {
  const { product } = props;
  
  return (
    <div className="card-item">
      <div className="card-item__title">
        {product.name}
      </div>
      <span className="card-item__color">
        {product.color}
      </span>
      <img src={product.img} alt={product.name} />
      <div className="card-item__row">
        <span className="card-item__price">${product.price}</span>
        <Button />
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  product: PropTypes.object.isRequired
}

export default ShopCard;
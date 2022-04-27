import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import './ShopItem.css';

function ShopItem(props) {
  const { product } = props;
  return (
    <div className="list-item">
      <img className="list-item__img" src={product.img} alt={product.name} />
      <div className="list-item__title">
        {product.name}
      </div>
      <span className="list-item__color">
        {product.color}
      </span>
      <span className="list-item__price">${product.price}</span>
      <Button />      
    </div>
  );
}

ShopItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default ShopItem;
import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ShopCard from './ShopCard/ShopCard';
import './CardsView.css';

function CardsView(props) {
  const { products } = props;
  const productsIndex = products.map((product) => {
    product.id = shortid.generate();
    return product;
  });
  const productsCards = productsIndex.map((product) => <ShopCard key={product.id} product={product} />);

  return (
    <div className="cards-wrap">
      {productsCards}
    </div>
  )
}

CardsView.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CardsView;

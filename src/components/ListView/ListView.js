import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ShopItem from './ShopItem/ShopItem';

function ListView(props) {
  const { products } = props;
  const productsIndex = products.map((product) => {
    product.id = shortid.generate();
    return product;
  });
  const productsCards = productsIndex.map((product) => <ShopItem key={product.id} product={product} />);

  return (
    <div className="list-wrap">
      {productsCards}
    </div>
  )
}

ListView.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ListView;

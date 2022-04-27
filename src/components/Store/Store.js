import React, { useState } from 'react';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';
import IconSwitch from '../IconSwitch/IconSwitch';
import './Store.css';

function Store() {
  const [isCardsView, changeView] = useState(true);

  const onSwitch = () => {
    changeView(!isCardsView); 
  }

  const products = [{
    name: 'Nike Metcon 2',
    price: '130',
    color: 'red',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg'
  }, {
    name: 'Nike Metcon 2',
    price: '130',
    color: 'green',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg'
  }, {
    name: 'Nike Metcon 2',
    price: '130',
    color: 'blue',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg'
  }, {
    name: 'Nike Metcon 2',
    price: '130',
    color: 'black',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg'
  }, {
    name: 'Nike free run',
    price: '170',
    color: 'black',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg'
  }, {
    name: 'Nike Metcon 3',
    price: '150',
    color: 'green',
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg'
  }];

  return (
    <div className="store-wrap">
      <IconSwitch icon={isCardsView ? 'view_list' : 'view_module'} onSwitch={onSwitch}/>
      {isCardsView ? <CardsView products={products} /> : <ListView products={products} />}
    </div>
  )
}

export default Store;

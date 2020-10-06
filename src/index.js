import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import { Kanban } from './Kanban';
// import { FilterableProductTable } from './Products';
import { Box } from './Box';


import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';

// const PRODUCTS = [
//   { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
//   { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
//   { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
//   { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
//   { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
//   { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
// ];

ReactDOM.render(
  <React.StrictMode>
    {/* <Kanban /> */}
    {/* <App /> */}
    {/* {<FilterableProductTable products={PRODUCTS} />} */}
    {<Box />}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

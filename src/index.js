// Package import should be in the top

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// then import File import
import './index.css';
import App from './components/App';
import movies from './reducers';


const store = createStore(movies);
console.log('store',  store);
// console.log('Before state',  store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies:[{name: 'superman'}]
// });

// console.log('After state',  store.getState());




ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);


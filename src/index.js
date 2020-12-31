// Package import should be in the top

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

// then import File import
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//  this obj will have access of two properties one is dispatch() and other is getState() and both of these are the funcion of store,(actually redux pass these function to logger)
  // const logger = function(obj){

  // }

//                OR

//  or we can destructure them
const logger = function({dispatch, getState}){
  //  this logger function is curried form of function with obj, next, action as a argument (function logger(obj, next, action))
  //  Internally redux call logger function like this logger(obj)(next)(action)
  return function(next) {
    return function(action){
      //  here i can write middleware code 
      console.log('ACTION_TYPE =', action.type, );
      next(action);

    }
  }
}


const store = createStore(rootReducer, applyMiddleware(logger));
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


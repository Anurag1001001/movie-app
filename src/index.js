// Package import should be in the top

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

// then import File import
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
// import combineReducer from './reducers/index'; 

//  this obj will have access of two properties one is dispatch() and other is getState() and both of these are the funcion of store,(actually redux pass these function to logger)
  // const logger = function(obj){

  // }

//                OR

//  or we can destructure them
// const logger = function({dispatch, getState}){
//   //  this logger function is curried form of function with obj, next, action as a argument (function logger(obj, next, action))
//   //  Internally redux call logger function like this logger(obj)(next)(action)
//   return function(next) {
//     return function(action){
//       //  here i can write middleware code 
//       console.log('ACTION_TYPE =', action.type, );
//       next(action);

//     }
//   }
// }

// arrow function and currying concept 
// var f = () => 1, when we have one statement in a function we can write something like this and this function will return 1 when it gets ccalled.
//  var f = () => () => 1 f()(), used currying concept with arrow function 

// middleware
const logger = ({dispatch, getState}) => (next) => (action) =>{
  if(typeof action !== 'function'){
    console.log('ACTION_TYPE =', action.type );
  }
  
  next(action);
}

// middleware
const thunk = ({dispatch, getState}) => (next) => (action) =>{
  if(typeof action === 'function'){
    //  first go to action - index.js and read all comments of handleMovieSearch()
    // now this middleware is helping us to dispatch(to the reducer) an action when it get the action type as function 
    action(dispatch);
    return;
  }
  next(action);
}







const store = createStore(rootReducer, applyMiddleware(logger, thunk));
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


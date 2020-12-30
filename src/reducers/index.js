// Reducers in Redux is a Pure function. And in functional programming a function is a pure function if it satisfied 3 conditions, i.e 1-- For the same input Output should be the same everyTime means that no matters how many times i call pure function with a different input but same type(same parameter, and type) Output should be same. 2-- And the second condition is that  function shouuld not use value of another variable that are not define in their local scope and should use argument that are provided to the function

//  reducers function takes two parameter one is current state(and this is not going to be  undefined that's why i've initialise with an empty array) and the 2nd parameter would be action(type of action)

// reducers has to return something whether it could be a new state or something else

// there are some abilities 'store' give us and i.e 
// setState, Read the state, Update the state, listen to the state changes(subscribe)


import {combineReducers} from 'redux'; 

//  we can't have multiple default export in single file 
import { ADD_MOVIES,ADD_FAVOURITE, UN_FAVOURITE,SHOW_FAVOURITE } from '../actions';

const initialMovieState = {
    list: [],
    favourites: [],
    showFavourite: false
}


export function movies(state = initialMovieState, action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;

    //  In React community we don't rely on if else case idealy, we prefer switch case instead, although we can use if else as well but we prefer switch case

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites:[action.movie, ...state.favourites]
            }
        case UN_FAVOURITE:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return{
                ...state,
                favourites: filteredArray
            }
        case SHOW_FAVOURITE:
            return{
                ...state,
                showFavourite: action.val
            }
        default:
            return state
    }
}

const initialSearchState = {
    result: {}
};

export function search (state = initialSearchState, action){
    // console.log("SEARCH REDUCER");
    return state;
}

const initialRootReducer = {
    movies: initialMovieState,
    search: initialSearchState
}


// when the dispatch() called then rootReducer will be called automatically and both reducer(movie and search) reducer will be called.
// you can do console.log inside these reducer and check yourself.


export default function rootReducer (state = initialRootReducer, action){
    return{
        movies: movies(state.movies, action),
        search: search(state.search, action)
    }
}


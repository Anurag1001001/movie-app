// In code action basically a javascript Object, Objact basically express an intent to modify the state.

// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const UN_FAVOURITE = 'UN_FAVOURITE';
export const SHOW_FAVOURITE = 'SHOW_FAVOURITE';

// Action creator
export function addMovies (movies){
    return {
            type: ADD_MOVIES,
            movies
    }
}

export function addFavourite (movie){
    return {
            type: ADD_FAVOURITE,
            movie
    }
}
export function unFavourite (movie){
    return {
            type: UN_FAVOURITE,
            movie
    }
}
export function showFavourite (val){
    return {
            type: SHOW_FAVOURITE,
            val
    }
}
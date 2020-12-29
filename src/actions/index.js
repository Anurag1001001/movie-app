// In code action basically a javascript Object, Objact basically express an intent to modify the state.

// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const UN_FAVOURITE = 'UN_FAVOURITE';

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
export function unFavourite (index){
    return {
            type: UN_FAVOURITE,
            index
    }
}
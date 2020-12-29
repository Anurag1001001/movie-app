// In code action basically a javascript Object, Objact basically express an intent to modify the state.

// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';

// Action creator
export function addMovies (movies){
    return {
            type: ADD_MOVIES,
            movies
    }
}
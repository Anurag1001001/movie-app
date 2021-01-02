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
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST'



// One thing we should know that our Action creator generally synchronous and they return a particular object
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
export function addMovieToList (movie){
    return {
            type: ADD_MOVIE_TO_LIST,
            movie
    }
}



export function handleMovieSearch (movie) {
    const  url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

    //  this is how we fetch somthing from the server using fetch(), this method basically is asynchrounous and Action creator should be synchronous and return Object
    //  function returns a promise.
    
    // fetch(url)
    // .then(response => response.json() );
    // .then(movie => {
    //     console.log('movie', movie);
    // })
    


    // Our this function (Action creator) are not returning anything but all earlier action creator were returning an object, so i need to do two thing first i should return something and reache to reducer and second thing is to store search result to the store and this can be happen by reducer.

    // So what i'm gonna do here is returning a function(above all action creator were return an object where action type defined) and do something to the reducer side so that it can handle 'returned function' and object simultaneouly (bascially based on  return type). Yes we're gon do middleware there, middlwware will be called just after when we dispatched the action and before it reaches to the reducer(go to index.js where i've created a middleware thunk) 
    // i'm gonna wrap the upper code into the function like this
    
    return function (dispatch){
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log('movie', movie);

            // dispatch an action
            // dispatch({ type: 'ADD_SEARCH_RESULT', movie})
        })
    }
}
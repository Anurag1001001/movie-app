//  Reducer always state return krta h, and it could be a new state or old state then store hota h wo returned state se compare krta h and if change kuch hua hota h toh current state ko returned state se change kr deta h


import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies, showFavourite} from '../actions';
import {storeContext} from '../index';
console.log('storeContext');


class App extends React.Component{
  componentDidMount(){
    //  Note When the dispatch() called immedietly subscribe() gets called and update the component
    // make api call
     const {store} = this.props;

    //  subsvribe
    store.subscribe(() =>{
      console.log('Updated');
      // we shouldn't use forceUpdate() in our application, just for the understanding purpose we did this 
      this.forceUpdate();
    })
    // dispatch action
    store.dispatch(addMovies(data));
    console.log('state', this.props.store.getState());
  }

  isMovieFavourite = (movie) =>{
    const { movies } = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      // found the movie
      return true;
    }
    return false;
  }

  onChangeTab = (val) =>{
    this.props.store.dispatch(showFavourite(val));
  }
  render(){
    const {movies, search} = this.props.store.getState(); // {movies: movies(), search: search()}
    const {list, favourites, showFavourite} = movies;
    console.log('RENDER', this.props.store.getState());
    const showMovie = showFavourite ? favourites : list ;
    
    return (
      <div className= 'App'>
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div className= {`tab ${showFavourite ? '' : 'active-tabs'}`} onClick = {() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourite ? 'active-tabs' : ''}`} onClick = {() => this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className="list">
            {showMovie.map((movie, index) => (
              <MovieCard
                 movie ={movie}
                 key= {`movies-${index}`}
                 dispatch = {this.props.store.dispatch}
                 isFavourite = {this.isMovieFavourite(movie)} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}


class AppWrapper extends React.Component{
  render(){
    return (
      <storeContext.Consumer>
        {(store) => <App store ={store} />}
      </storeContext.Consumer>
    )
  }
  
}

export default AppWrapper;

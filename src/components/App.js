//  Reducer always state return krta h, and it could be a new state or old state then store hota h wo returned state se compare krta h and if change kuch hua hota h toh current state ko returned state se change kr deta h


import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies} from '../actions';


class App extends React.Component{
  componentDidMount(){
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
  render(){
    const {list} = this.props.store.getState(); // {list:[], favourite:[]}
    console.log('RENDER', this.props.store.getState());
    return (
      <div className= 'App'>
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie ={movie} key= {`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

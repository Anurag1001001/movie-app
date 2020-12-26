//  Reducer always state return krta h, and it could be a new state or old state then store hota h wo returned state se compare krta h and if change kuch hua hota h toh current state ko returned state se change kr deta h


import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';


function App() {
  return (
    <div className= 'App'>
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {data.map((movie, index) => (
            <MovieCard movie ={movie} key= {`movies-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

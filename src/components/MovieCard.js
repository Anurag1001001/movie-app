import React from 'react';
import { addFavourite,unFavourite } from '../actions';

export default class MovieCard extends React.Component {
    handleFavouriteClick = () =>{
       const {movie} = this.props;
       this.props.store.dispatch(addFavourite(movie)); 

    }
    handleUnFavouriteClick = (movie) =>{
        const {favourites} = this.props.store.getState();
        const index = favourites.indexOf(movie);
        this.props.store.dispatch(unFavourite(index));
    }
    render(){
        const { movie, isFavourite } =  this.props;        
        return (
            <div className= 'movie-card'>
                <div className="left">
                    <img alt='movie-poster' src='{movie.Poster' />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdRating}</div>
                        {
                            isFavourite
                            ? <button className="unfavourite-btn" onClick = {this.handleUnFavouriteClick(movie)}>unfavourite</button>
                            : <button className="favourite-btn" onClick = {this.handleFavouriteClick}>Favourite</button>
                        }

                        
                    </div>
                </div>
            </div>
        );
    }
}

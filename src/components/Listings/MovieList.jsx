import React from "react";
import {Link} from "react-router-dom";

const setRatingClass = (rating) => {
    if(rating>=8){
        return 'green'
    }else if(rating<8 && rating>=5){
        return 'orange'
    }else{
        return 'red';
    }
};

const MovieList = (props) => {
    return(
        <>
            {props.filtered.map((movie) => (
            <Link to={`/CurrentMovieList/${movie._id}`}>            
                <div className="movie">
                    
                    <img src={movie.poster} alt='movie'/>
                    <div className="movie-info">
                        <h3>{movie.fullTitle}</h3>
                        <span className={`tag ${setRatingClass(movie.ratings)}`}>{movie.ratings}</span>
                    </div>

                    <div className="movie-over">
                        <h2>Actors:</h2>
                        <p>{movie.actors}</p>
                        <h2>Directors:</h2>
                        <p>{movie.directors}</p>
                    </div>
                </div>
            </Link>
            ))}
        </>
    );
};

export default MovieList;
import React from "react";

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
            {props.movies.map((movie) => (
            <div className="movie">
                <img src={movie.image} alt='movie'/>
                <div className="movie-info">
                    <h3>{movie.fullTitle}</h3>
                    <span className={`tag ${setRatingClass(movie.imDbRating)}`}>{movie.imDbRating}</span>
                </div>

                <div className="movie-over">
                    <h2>Overview:</h2>
                    <p>{movie.plot}</p>
                    <h2>Actors:</h2>
                    <p>{movie.stars}</p>
                    <h2>Directors:</h2>
                    <p>{movie.directors}</p>
                </div>
            
            
            </div>
            ))}
        </>
    );
};

export default MovieList;
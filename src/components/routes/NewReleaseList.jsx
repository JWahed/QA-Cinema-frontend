import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Listings/MovieListing.css"
import Header from "../Navigation/Header/Header";
import Footer from "../Navigation/Footer/Footer";
import axios from "axios";

const setRatingClass = (rating) => {
  if(rating>=8){
      return 'green'
  }else if(rating<8 && rating>=5){
      return 'orange'
  }else{
      return 'red';
  }
};

function NewReleaseMovieRequest() {
  const [movies, setMovies] = useState([]);

const getMovieRequest = async() => {
  const url = "http://localhost:5000/api/movies/"
  const response = await axios.get(url);


  setMovies(response.data);
};

useEffect(() => {
  getMovieRequest();
},[]);

  return (
    <>
    <Header/>
    <div>
      <div className="movie-container"> 

      {movies.filter((movie)=>(
        //movie.dateReleased.includes("Jul") || 
        movie.dateReleased.includes("Aug") || 
        movie.dateReleased.includes("Sep")))
        .map((movie) => (
            <Link to={`/NewReleaseList/${movie._id}`}>            
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
      </div>
    </div>
    <Footer/>
      </>
  );
}
export default NewReleaseMovieRequest;
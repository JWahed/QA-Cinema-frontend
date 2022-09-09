import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Header from "../navigation/header/Header";
import Footer from "../navigation/footer/Footer";
import "../details/movieDetails.css"

const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const {_id} = useParams();

    const getMovieRequest = async() => {
        const url = `http://localhost:5000/api/movies/${_id}`
        const response = await axios.get(url);
        console.log(response.data);
        setMovie(response.data);
      };
      
      useEffect(() => {
        getMovieRequest();
      },[]);

  return (
    <>
    <Header/>
    <div className="movieDetails">
      <div className="movieDetailsSub">
        <div className="imageDetails">
          <img src = {movie.poster} alt=''/>
        </div>
        <div className="box">
          <div className="row">
            <h2>{movie.fullTitle}</h2>
            <span>{movie.description}</span>
            <span>Actors: {movie.actors}</span>
            <span>Directors: {movie.directors}</span>
            <span>classification: {movie.classification}</span>
            <span>Release Date: {movie.dateReleased}</span>
            <span>Rating: {movie.ratings}/10</span>
          </div>
          {/* <button>BOOK NOW</button> */}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
export default MovieDetails;
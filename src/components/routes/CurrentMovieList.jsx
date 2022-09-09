import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../listings/MovieListing.css"
import MovieList from "../listings/MovieList";
import Filter from "../listings/MovieFilter";
import Header from "../Navigation/header/Header";
import Footer from "../Navigation/footer/Footer";
import axios from "axios";


function MovieRequest() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("All");


const getMovieRequest = async() => {
  //const url = "https://imdb-api.com/en/API/InTheaters/k_tqmmd23i"
  // const upcomingURL = "https://imdb-api.com/en/API/ComingSoon/k_1j7tiy4o"
  const url = "http://localhost:5000/api/movies/"
  const response = await axios.get(url);
  // const responseJson = await response.json();

  setMovies(response.data);
  setFiltered(response.data);
};

useEffect(() => {
  getMovieRequest();
},[]);

  return (
    <>
    <Header/>
    <div>
      <Filter movies = {movies} 
        setFiltered = {setFiltered} 
        activeGenre = {activeGenre} 
        setActiveGenre = {setActiveGenre}
        // filtered = {filtered}
        />
      <div className="movie-container"> 

          <MovieList 
          // movies={movies}
          filtered = {filtered}/>
      </div>
    </div>
    <Footer/>
      </>
  );
}
export default MovieRequest;
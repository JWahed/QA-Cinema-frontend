import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from "./components/routes/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  //const [searchInput, setSearchInput] = useState('');

const getMovieRequest = async() => {
  const url = "https://imdb-api.com/en/API/InTheaters/k_3tlo06yz"

  const response = await fetch(url);
  const responseJson = await response.json();

  setMovies(responseJson.items);
}

useEffect(() => {
  getMovieRequest();
},[]);

  return (
  <div className="movie-container"> 
      <MovieList movies={movies}/>
  </div>
  );
};
export default App;
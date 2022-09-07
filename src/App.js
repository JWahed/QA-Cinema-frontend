<<<<<<< HEAD
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/routes/Homepage'
import NotFound from './components/routes/NotFound'
import Attractions from './components/routes/Attractions'
import MovieRequest from './components/routes/CurrentMovieList'
import MovieDetails from './components/routes/MovieDetails'
import NewReleaseMovieRequest from './components/routes/NewReleaseList'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/Attractions' element={<Attractions />} />
          <Route path='/CurrentMovieList' element={<MovieRequest />} />
          <Route path='/CurrentMovieList/:_id' element={<MovieDetails />} />
          <Route path='/NewReleaseList' element={<NewReleaseMovieRequest />} />
          <Route path='/NewReleaseList/:_id' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
=======
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
>>>>>>> 5406c71a90fd6dcd2714c0f83a0057ac009d9a7c

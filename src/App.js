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

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/routes/Homepage'
import NotFound from './components/routes/NotFound'
import Attractions from './components/routes/Attractions'
import Contact from './components/routes/Contact'
import MovieRequest from './components/routes/CurrentMovieList'
import MovieDetails from './components/routes/MovieDetails'
import NewReleaseMovieRequest from './components/routes/NewReleaseList'
import ScreensPage from './components/routes/ScreenPage'
import ClassificationPage from './components/routes/ClassificationPage'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/Attractions' element={<Attractions />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/CurrentMovieList' element={<MovieRequest />} />
          <Route path='/CurrentMovieList/:_id' element={<MovieDetails />} />
          <Route path='/NewReleaseList' element={<NewReleaseMovieRequest />} />
          <Route path='/NewReleaseList/:_id' element={<MovieDetails />} />
          <Route path='/screens' element={<ScreensPage />} />
          <Route path='/Classification' element={<ClassificationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

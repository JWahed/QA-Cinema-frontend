import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/routes/Homepage'
import NotFound from './components/routes/NotFound'
import ClassificationPage from './components/routes/ClassificationPage';
import Attractions from './components/routes/Attractions'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/Attractions' element={<Attractions />} />
          <Route path="/Classification" element={<ClassificationPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

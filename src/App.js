import logo from './logo.svg';
import './App.css';
import BookingsPage from './components/BookingPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav className='navContainer'>
        <h1 className='navTitle'>MoviesApp</h1>
        <div className='linkContainer'>
          <Link to="/home">Home</Link>
          <Link to="/Booking">Bookings</Link>
           </div>
        </nav>
        <Routes>
          <Route path="/Booking" element={<BookingsPage/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

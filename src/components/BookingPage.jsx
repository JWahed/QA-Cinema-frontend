import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  const [availableMovies, setAvailableMovies] = useState([]);
  const [title, setSelectedMovie] = useState('');
  const [date, setSelectedDate] = useState('');
  const [time, setSelectedTime] = useState('');
  const [seats, setSelectedSeat] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const ticketPrice = [10.75,5.65, 7.25 ]



  const onSubmitBooking = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await axios.post('/api/booking', {
      fullTitle: title,
      date: date,
      movieTime: time,
      seats: seats,
      ticketType: ticketType,
      bookerName: name,
    });
    setIsLoading(false);
    console.log(res.data);

    
  };


  useEffect(() => {
    axios
      .get('http://localhost:5000/api/movies')
      .then((res) => {
        setAvailableMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='BookingForm'>
      <h3> Book Tickets </h3>
      <form
        className='Form'
        onSubmit={(e) => {
          onSubmitBooking(e);
        }}
      >
        <label htmlFor='name'>Movie</label>
        <select required onChange={(e) => setSelectedMovie(e.target.value)}>
          <option value=''>Select a Movie</option>
          {availableMovies.map(({fullTitle }) => (
            <option
              value={fullTitle}
              onChange={(e) => setSelectedMovie(e.target.value)}
            >
              {fullTitle}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor='movieTitle'>Date</label>
        <select required onChange={(e) => setSelectedDate(e.target.value)}>
          <option value=''>-Select a Date-</option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Friday: 09/09/2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Saturday: 10/09/2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Sunday: 11/09/2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Monday: 12/09/2022
          </option>
          ))
        </select>
        <br />
        <br />
        <label htmlFor='movieTitle'>Time</label>
        <select required onChange={(e) => setSelectedTime(e.target.value)}>
          <option value=''>-Select a Time-</option>
          <option>10:30 Screen 1</option>
          <option>11:30 Screen 2</option>
          <option>16:00 Screen 3</option>
          <option>20:00 Screen 5</option>
          ))
        </select>
        <br />
        <br />
      <Link to={{ pathname: `/screens` }} target="_blank">
        <button id="screenButton" type="button">
          Please click for screen info{" "}
        </button>
      </Link>
      <br />
        <label htmlFor='seats'>No. of Seats:</label>
        <input
          required
          type='number'
          placeholder='Enter no. of seats...'
          id='seats'
          onChange={(e) => setSelectedSeat(e.target.value)}
        />
        <br />
        <p>Please select your ticket type:</p>
        <input
          required
          type='radio'
          id='adult'
          name='ticketType'
          onChange={(e) => setTicketType(e.target.value)}
        />
        <label htmlFor='adult'>Adult Seats (£{ticketPrice[0]} each)</label>
        <br />
        <input
          required
          type='radio'
          id='child'
          name='ticketType'
          onChange={(e) => setTicketType(e.target.value)}
        />
        <label htmlFor='child'>Child Seats (£{ticketPrice[1]} each)</label>
        <br />
        <input
          required
          type='radio'
          id='concession'
          name='ticketType'
          onChange={(e) => setTicketType(e.target.value)}
        />
        <label htmlFor='concession'>Concession Seats (£{ticketPrice[2]} each)</label>
        <br />
        <label htmlFor='name'>Booker name:</label>
        <input
          required
          type='text'
          placeholder='Enter name...'
          id='bookerName'
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button type='submit'>
          {isLoading && <i className='fas fa-spinner fa-pulse' />}
          {!isLoading && 'Book Tickets!'}
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
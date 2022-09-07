import './Booking.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingPageRefactor = () => {
  const [availableMovies, setAvailableMovies] = useState([]);
  const [title, setSelectedMovie] = useState("");
  const [date, setSelectedDate] = useState("");
  const [time, setSelectedTime] = useState("");
  const [seats, setSelectedSeat] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const ticketPrice = [10.75, 5.65, 7.25];

  const onSubmitBooking = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await axios.post("/api/booking", {
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
      .get("http://localhost:5000/api/movies")
      .then((res) => {
        setAvailableMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="BookingForm">
      <br/>
      <h4> Book Tickets Here</h4>
      <br />
      <form
        className="booking-form"
        onSubmit={(e) => {
          onSubmitBooking(e);
        }}
      >
        <div className='booking-form-body'>
        <label for="movieTitle" class="form-label">
          Movie:
        </label>
        <select
          class="form-select"
          aria-label="Default select example"
          required
          onChange={(e) => setSelectedMovie(e.target.value)}
        >
          <option selected>Select a Movie</option>
          {availableMovies.map(({ title }) => (
            <option
              value={title}
              onChange={(e) => setSelectedMovie(e.target.value)}
            >
              {title}
            </option>
          ))}
        </select>
        <br />
        <label for="movieTitle" class="form-label">
          Date:
        </label>
        <select
          class="form-select"
          aria-label="Default select example"
          required
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          <option value="">Select a Date</option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Saturday: 10/09/2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Sunday: 11/09/2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Monday: 12/09/2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Tuesday: 13/09/2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Wednesday: 14/09/2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Thursday: 15/09/2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Friday: 16/09/2022
          </option>
          ))
        </select>
        <br />
        <label for="movieTitle" class="form-label">
          Time:
        </label>
        <select
          class="form-select"
          aria-label="Default select example"
          required
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Select a Time</option>
          <option>10:00 Screen 1 (Deluxe)</option>
          <option>12:30 Screen 2 (Standard)</option>
          <option>16:00 Screen 3 (Standard)</option>
          <option>20:00 Screen 4 (Deluxe)</option>
          ))
        </select>
        <br />
        <Link to={{ pathname: `/screens` }} target="_blank">
          <button type="button" class="btn btn-info screenBtn">
            Please click for screen info{" "}
          </button>
        </Link>
        <br />
        <br />
        <label for="movieTitle" class="form-label">
          Seats:
        </label>
        <input
          aria-describedby="inputGroup-sizing-default"
          class="form-control"
          aria-label="Sizing example input"
          required
          type="number"
          placeholder="Enter number of seats"
          id="seats"
          onChange={(e) => setSelectedSeat(e.target.value)}
        />
        <br />
        <label for="movieTitle" class="form-label"> Please select your ticket type:</label>
        <br />
        <input
          required
          type='radio'
          id='adult'
          name='ticketType'
          onChange={(e) => setTicketType(e.target.value)}
        />
        <label htmlFor='adult' class="form-label"> Adult Seats (£{ticketPrice[0]} each)</label>
        <br />
        <input
          required
          type='radio'
          id='child'
          name='ticketType'
          onChange={(e) => setTicketType(e.target.value)}
        />
        <label htmlFor='child' class="form-label"> Child Seats (£{ticketPrice[1]} each)</label>
        <br />
        <input
          required
          type='radio'
          id='concession'
          name='ticketType'
          onChange={(e) => setTicketType(e.target.value)}
        />
        <label htmlFor='concession' class="form-label"> Concession Seats (£{ticketPrice[2]} each)</label>
        <br />
        <br />
        <label htmlFor='name' class="form-label">Booker Name:</label>
        <input
          required
          type='text'
          aria-describedby="inputGroup-sizing-default"
          class="form-control"
          aria-label="Sizing example input"
          placeholder='Enter name...'
          id='bookerName'
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button type="submit" class="btn btn-primary bookingBtn">
          {isLoading && <i className='fas fa-spinner fa-pulse' />}
          {!isLoading && 'Book Tickets!'}
        </button>
        </div>
      </form>
    </div>
  );
};

export default BookingPageRefactor;
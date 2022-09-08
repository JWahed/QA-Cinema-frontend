import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
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

    const res = await axios.post("http://localhost:5000/api/booking", {
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
    <>
      <br/>
      <h4> Book Tickets Here</h4>
      <br />
      <form
        className="BookingForm"
      >
        <div className='body'>
        <label htmlFor="movieTitle" className="form-label">
          Movie:
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          required
          onChange={(e) => setSelectedMovie(e.target.value)}
        >
          <option >Select a Movie</option>
          {availableMovies.map(({ fullTitle }) => (
            <option
              value={fullTitle}
              onChange={(e) => setSelectedMovie(e.target.value)}
              key={fullTitle}
            >
              {fullTitle}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="movieTitle" className="form-label">
          Date:
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          required
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          <option value={date}>Select a Date</option>
          <option  onChange={(e) => setSelectedDate(e.target.value)}>
            10-09-2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            11-09-2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            12-09-2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            13-09-2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            14-09-2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            15-09-2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            16-09-2022
          </option>
          ))
        </select>
        <br />
        <label htmlFor="movieTitle" className="form-label">
          Time:
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          type="text"
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
          <button type="button" className="btn btn-info screenBtn">
            Please click for screen info{" "}
          </button>
        </Link>
        <br />
        <br />
        <label htmlFor="movieTitle" className="form-label">
          Seats:
        </label>
        <input
          aria-describedby="inputGroup-sizing-default"
          className="form-control"
          aria-label="Sizing example input"
          required
          type="number"
          placeholder="Enter number of seats"
          id="seats"
          onChange={(e) => setSelectedSeat((e.target.value))}
        />
        <br />
        <select
          className="form-select"
          aria-label="Default select example"
          type="text"
          required
          onChange={(e) => setTicketType((e.target.value).split(' ')[0])}
        >
          <option value="">Select a ticket type</option>
          <option>Adult {"£" + (ticketPrice[0])}</option>
          <option>Child {"£" + (ticketPrice[1])}</option>
          <option>Concession {"£" + (ticketPrice[2])}</option>
          ))
        </select>
        <br />
        <br />
        <label htmlFor='name' className="form-label">Booker Name:</label>
        <input
          required
          type='text'
          aria-describedby="inputGroup-sizing-default"
          className="form-control"
          aria-label="Sizing example input"
          placeholder='Enter name...'
          id='bookerName'
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        
        <button type="submit" className="btn btn-primary bookingBtn">
          {isLoading && <i className='fas fa-spinner fa-pulse' />}
          <Link onClick={(e) => onSubmitBooking(e.target.value)} to={`/checkout/${title}/${date}/${time}/${seats}/${ticketType}/${name}`}>
          {!isLoading && 'Book Tickets!'}
          </Link>
        </button>
        </div>
      </form>
    </>
  );
};

export default Booking;

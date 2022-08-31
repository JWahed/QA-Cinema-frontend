import { useState } from 'react';
import { Container } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";
import { addDays } from 'date-fns';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const BookingDetails = () => {

    const placeholder = [
        { id: 0, title: "Title1", showtimes: ["Please select a film"] },
        {
            id: 1, title: "Title2", showtimes: [
                "10:00 Screen 1",
                "12:00 Screen 1",
                "12:30 Screen 3",
                "14:00 Screen 1",
                "16:00 Screen 1",
                "16:30 Screen 3",
                "18:00 Screen 1",
                "20:00 Screen 1",
                "20:30 Screen 3",
                "22:00 Screen 1"]
        },
        {
            id: 2, title: "Title3", showtimes: [
                "10:15 Screen 2",
                "11:30 Screen 3",
                "12:15 Screen 2",
                "14:15 Screen 2",
                "15:30 Screen 3",
                "16:15 Screen 2",
                "18:15 Screen 2",
                "19:30 Screen 3",
                "20:15 Screen 2",
                "22:15 Screen 2"]
        }
    ];


    const [movie, setMovie] = useState("");
    const [filmTime, setFilmTime] = useState(0);
    const [selectedTime, setTime] = useState("");
    const [newBookerName, setBookerName] = useState("");
    const [filmDate, setStartFilmDate] = useState(null);
    const [countAdult, setCountAdult] = useState(0);
    const [countChild, setCountChild] = useState(0);
    const [countStudent, setCountStudent] = useState(0);
    const ticketPrice = [10.75, 5.65, 7.25];

    let totalPrice = Number(ticketPrice[0] * countAdult + ticketPrice[1] * countChild + ticketPrice[2] * countStudent).toFixed(2);
    let countAll = countAdult + countChild + countStudent;

    const setAdultUp = (event) => {
        event.preventDefault();
        setCountAdult(countAdult => Math.min(24, countAdult + 1));
    }

    const setAdultDown = (event) => {
        event.preventDefault();
        setCountAdult(countAdult => Math.max(0, countAdult - 1));
    }

    const setChildUp = (event) => {
        event.preventDefault();
        setCountChild(countChild => Math.min(24, countChild + 1));
    }

    const setChildDown = (event) => {
        event.preventDefault();
        setCountChild(countChild => Math.max(0, countChild - 1));
    }

    const setStudentUp = (event) => {
        event.preventDefault();
        setCountStudent(countStudent => Math.min(24, countStudent + 1));
    }

    const setStudentDown = (event) => {
        event.preventDefault();
    }

    const bookerName = ({ target }) => {
        setBookerName(target.value)
    }

    const setFilm = (event) => {
        event.preventDefault();
        setMovie(event.target.value);
        setFilmTime(event.target.value);
    }

    const setNewTime = (event) => {
        event.preventDefault();
        setTime(event.target.value);
    }

    const navigate = useNavigate();

    const submitForm = (event) => {
        let paye = [];
        event.preventDefault();
        if (typeof (movie) == "undefined") {
            alert('please pick a movie');
            return
        } else if (filmDate == null) {
            alert('please pick a date');
            return
        }
        else if (selectedTime == "") {
            alert('please pick a time and screen');
            return
        } else if (newBookerName == "") {
            alert('please enter the ticket bookers name');
            return
        } else {
            paye = [movie, filmDate, selectedTime, countAdult, countChild, countStudent, totalPrice, newBookerName, countAll];
            console.log(paye);
        }

        navigate.push({
            pathname: "/checkout",
            state: { detail: paye }
        })
    }

    return (
        <div id="dropped-box" className="container-fluid">
            <Container>
                <h1>BOOKINGS</h1>
                <br />
                <Container >
                    <form align="center" onSubmit={submitForm}>
                        <Container id="filmSelect">
                            <select id="Booking" value={movie} onChange={setFilm} >
                                <option disabled value="">-- Select a Film --</option>
                                <option value={placeholder[1].id}>{placeholder[1].title}</option>
                                <option value={placeholder[2].id}>{placeholder[2].title}</option>
                            </select>
                        </Container>
                        <br />
                        <DatePicker
                            selected={filmDate}
                            onChange={(date) => setStartFilmDate(date)}
                            isClearable
                            includeDates={[new Date(),
                            addDays(new Date(), 1), addDays(new Date(), 2), addDays(new Date(), 3), addDays(new Date(), 4),
                            addDays(new Date(), 5), addDays(new Date(), 6), addDays(new Date(), 7), addDays(new Date(), 8),
                            addDays(new Date(), 9), addDays(new Date(), 10), addDays(new Date(), 11), addDays(new Date(), 12),
                            addDays(new Date(), 13)]}
                            placeholderText="Please select a date"
                        />
                        <br />
                        <br />
                        <Container id="timeSelect">
                            <select id="Booking" value={selectedTime} onChange={setNewTime}>
                                <option value="">-- Select a Time and Screen --</option>
                                {placeholder[filmTime].showtimes.map((many, i) => (
                                    <option key={i}>{placeholder[filmTime].showtimes[i]}</option>
                                ))}
                            </select>
                            <br />
                            <Link to={{ pathname: `/screens` }} target="_blank">
                                <button id="screenButton" type="button" >
                                    Please click for sceen info     </button>
                            </Link>
                        </Container>
                        <Container>
                            <br />
                            <label>Adult Seats (£{ticketPrice[0]} each)</label>
                            <button id="neg" onClick={setAdultDown}>
                                -
                            </button>
                            <button id="pos" onClick={setAdultUp}>
                                +
                            </button>
                            <br />
                            <input id="seatCounter" placeholder={countAdult} disabled></input>
                            <br />
                            <br />
                            <label>Child Seats (£{ticketPrice[1]} each)</label>
                            <button id="neg" onClick={setChildDown}>
                                -
                            </button>
                            <button id="pos" onClick={setChildUp}>
                                +
                            </button>
                            <br />
                            <input id="seatCounter" placeholder={countChild} disabled></input>
                            <br />
                            <br />
                            <label>Student Seats (£{ticketPrice[2]} each)</label>
                            <button id="neg" onClick={setStudentDown}>
                                -
                            </button>
                            <button id="pos" onClick={setStudentUp}>
                                +
                            </button>
                            <br />
                            <input id="seatCounter" placeholder={countStudent} disabled></input>
                        </Container>
                        <br />
                        <Container>
                            <label>Booking Name</label>
                            <input id="Booking" placeholder="Please enter your name here:" type="text" onChange={bookerName}></input>
                        </Container>
                        <br />
                        <button id="submitButtonStripe" type="submit" >Submit and Pay: £{totalPrice}</button>
                    </form>
                </Container>
            </Container>
        </div>
    );

}

export default BookingDetails;

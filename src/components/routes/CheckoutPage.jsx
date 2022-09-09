import { loadStripe } from '@stripe/stripe-js';
import {useState}from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../navigation/footer/Footer';
import Header from '../navigation/header/Header';

function Checkout({ stripeKey }) {

    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const {
        fullTitle,
        date,
        movieTime,
        seats,
        ticketType,
        bookerName
    } = useParams();

    let stripePromise;
    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(stripeKey);
        }
        return stripePromise;
    };

    const adultTicket = "price_1LflvHKyk0jJqLbQa6FCISzP";
    const concessionTicket = "price_1LflwFKyk0jJqLbQ4miH7Py3";
    const childTicket = "price_1LflvoKyk0jJqLbQ3PuPdhSj";

    const checkTicket = (ticketType) => {
        switch(ticketType) {
            case "Adult":
                return {price: adultTicket, quantity: parseFloat(seats)};
            case "Child":
                return {price: childTicket, quantity: parseFloat(seats)};
            case "Concession":
                return {price: concessionTicket, quantity: parseFloat(seats)};
        }
    }

    const checkoutOptions = {
        lineItems: [checkTicket(ticketType)],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
    };

    const redirectToCheckout = async () => {

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("Stripe checkout error", error);

        if (error) {
            setStripeError(error.message);
            setLoading(false);
        }
        if (stripeError) {
            alert(stripeError);
        }
    };

    return (
        <>
            <Header />
                <div className="basket-summary">
                    <h3>Movie: {fullTitle}</h3>
                    <h3>Ticket date: {date}</h3>
                    <h3>Showing: {movieTime}</h3>
                    <h3>Number of seats: {seats}</h3>
                    <h3>Ticket type: {ticketType}</h3>
                    <h3>Your name: {bookerName}</h3>
                </div>
                <div className="checkout">
                    <button
                        className="checkout-button"
                        onClick={redirectToCheckout}
                        disabled={isLoading}
                    >
                        <p className="text">{isLoading ? "Loading..." : "Buy"}</p>

                    </button>
                </div>
            <Footer />
        </>
    );
}

Checkout.propTypes = {
    stripeKey: PropTypes.string.isRequired
}

export default Checkout;

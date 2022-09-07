import { loadStripe } from '@stripe/stripe-js';
import PropTypes from 'prop-types';
import Footer from '../Navigation/Footer/Footer';
import Header from '../Navigation/Header/Header';

function Checkout( {stripeKey} ) {
    const stripeClient = loadStripe(stripeKey);
    const item = {
        price: "price_1LfBOEKyk0jJqLbQWPRhOVK0",
        quantity: 1
    }

    return (
        <>
            <Header />
            <Footer />
        </>
    );
}

Checkout.propTypes = {
    stripeKey: PropTypes.string.isRequired
}

export default Checkout;

import { loadStripe } from '@stripe/stripe-js';
import {useState}from 'react';
import PropTypes from 'prop-types';
import Footer from '../Navigation/Footer/Footer';
import Header from '../Navigation/Header/Header';

function Checkout( {stripeKey} ) {

    const  [adultQuantity, setAdultQuantity] = useState(0);
    const  [childQuantity, setChildQuantity] = useState(0);
    const  [concessionQuantity, setConcessionQuantity] = useState(0);

    let stripePromise;
    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(stripeKey);
        }
        return stripePromise;
    };

    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const item = {
        price: "price_1LfIZYKyk0jJqLbQIJcL56jM",
        quantity: 10
    }

    const checkoutOptions = {
        lineItems: [item],
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
        if (stripeError) alert(stripeError);
    };

    return (
        <>
            <Header />
                <div className="checkout">
                    <h1>Stripe Checkout</h1>
                        <p className="checkout-title">Booking price</p>
                        <p className="checkout-description">
                        
                        </p>
                    <h1 className="checkout-price">£10.75</h1>
                    {/* <img
                        className="checkout-product-image"
                        src={ProductImage}
                        alt="Product"
                    /> */}
                    <button
                        className="checkout-button"
                        onClick={redirectToCheckout}
                        disabled={isLoading}
                    >
                        <div className="grey-circle">
                            <div className="purple-circle">
                                {/* <img className="icon" src={CardIcon} alt="credit-card-icon" /> */}
                            </div>
                        </div>
                        <div className="text-container">
                            <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
                        </div>
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

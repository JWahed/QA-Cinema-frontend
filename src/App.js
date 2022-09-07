import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/routes/Homepage";
import NotFound from "./components/routes/NotFound";
import BookingsPage from './components/routes/BookingsPage';
import Checkout from "./components/routes/CheckoutPage";


import { Auth0Provider } from '@auth0/auth0-react';
import PropTypes from 'prop-types';

function App({ authDomainURL, authClientID, stripeKey }) {
  
  if (!authDomainURL || !authClientID) {
    return (
      <h1 id="load">Loading...</h1>
    );
  }

  return (
    <div className="App">
      <Auth0Provider
          domain={authDomainURL}
          clientId={authClientID}
          redirectUri={window.location.origin}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/bookings" element={<BookingsPage/>} />
            <Route path="/checkout" element={<Checkout stripeKey={stripeKey}/>} />
          </Routes>
        </BrowserRouter>

      </Auth0Provider>
    </div>
  );
}

App.propTypes = {
  authDomainURL: PropTypes.string.isRequired,
  authClientID: PropTypes.string.isRequired,
  stripeKey: PropTypes.string.isRequired
}

export default App;

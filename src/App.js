import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/routes/Homepage";
import NotFound from "./components/routes/NotFound";
import Attractions from "./components/routes/Attractions";
import ProfilePage from "./components/routes/ProfilePage";
import BookingsPage from "./components/routes/BookingsPage";
import FailedPaymentPage from "./components/routes/FailedPaymentPage";
import Checkout from "./components/routes/CheckoutPage";
import MovieRequest from "./components/routes/CurrentMovieList";
import MovieDetails from "./components/routes/MovieDetails";
import NewReleaseMovieRequest from "./components/routes/NewReleaseList";
import ScreensPage from "./components/routes/ScreenPage";
import ClassificationPage from "./components/routes/ClassificationPage";
import Contact from "./components/routes/Contact";
import DiscussionBoard from "./components/routes/discussionBoard";
import AboutPage from "./components/routes/AboutPage";
import SuccessPaymentPage from "./components/routes/SuccessPaymentPage";
import OpeningTimesPage from "./components/routes/OpeningTimesPage";

import { Auth0Provider } from "@auth0/auth0-react";
import PropTypes from "prop-types";

function App({ authDomainURL, authClientID, stripeKey }) {
  if (!authDomainURL || !authClientID || !stripeKey) {
    return (
      <div className="App-load">
        <h1>Loading...</h1>
      </div>
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
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route
              path="/checkout/:fullTitle/:date/:movieTime/:seats/:ticketType/:bookerName"
              element={<Checkout stripeKey={stripeKey} />}
            />
            <Route path="/Success" element={<SuccessPaymentPage />} />
            <Route path="/Failed" element={<FailedPaymentPage />} />
            <Route path="/CurrentMovieList" element={<MovieRequest />} />
            <Route path="/CurrentMovieList/:_id" element={<MovieDetails />} />
            <Route path="/NewReleaseList/:_id" element={<MovieDetails />} />
            <Route path="/CurrentMovieList" element={<MovieRequest />} />
            <Route path="/CurrentMovieList/:_id" element={<MovieDetails />} />
            <Route path="/NewReleaseList/:_id" element={<MovieDetails />} />
            <Route
              path="/NewReleaseList"
              element={<NewReleaseMovieRequest />}
            />
            <Route path="/Screens" element={<ScreensPage />} />
            <Route path="/Classification" element={<ClassificationPage />} />
            <Route path="/Contact-us" element={<Contact />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path='/DiscussionBoard/*' element={<DiscussionBoard />} />
            <Route path='/Opening-times' element={<OpeningTimesPage/>} />
          </Routes>
        </BrowserRouter>
      </Auth0Provider>
    </div>
  );
}

App.propTypes = {
  authDomainURL: PropTypes.string.isRequired,
  authClientID: PropTypes.string.isRequired,
  stripeKey: PropTypes.string.isRequired,
};

export default App;

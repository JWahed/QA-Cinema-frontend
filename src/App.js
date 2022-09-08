import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/routes/Homepage";
import NotFound from "./components/routes/NotFound";
import Attractions from "./components/routes/Attractions";
import ProfilePage from "./components/routes/ProfilePage";
import BookingsPage from "./components/routes/BookingsPage";
import Checkout from "./components/routes/CheckoutPage";
import MovieRequest from "./components/routes/CurrentMovieList";
import MovieDetails from "./components/routes/MovieDetails";
import NewReleaseMovieRequest from "./components/routes/NewReleaseList";
import ScreensPage from "./components/routes/ScreenPage";
import ClassificationPage from "./components/routes/ClassificationPage";

import { Auth0Provider } from "@auth0/auth0-react";
import PropTypes from "prop-types";

function App({ authDomainURL, authClientID, stripeKey }) {
  if (!authDomainURL || !authClientID) {
    return <h1 id="load">Loading...</h1>;
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
            <Route path="/Attractions" element={<Attractions />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route
              path="/checkout"
              element={<Checkout stripeKey={stripeKey} />}
            />
            <Route path="/bookings/failed" element={<BookingsPage />} />
            <Route path="/bookings/success" element={<BookingsPage />} />
            <Route path="/CurrentMovieList" element={<MovieRequest />} />
            <Route path="/CurrentMovieList/:_id" element={<MovieDetails />} />
            <Route
              path="/NewReleaseList"
              element={<NewReleaseMovieRequest />}
            />
            <Route path="/NewReleaseList/:_id" element={<MovieDetails />} />
            <Route path="/screens" element={<ScreensPage />} />
            <Route path="/Classification" element={<ClassificationPage />} />
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

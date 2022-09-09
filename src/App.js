import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

<<<<<<< Updated upstream
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
import DiscussionBoard from './components/routes/discussionBoard';
import AboutPage from './components/routes/AboutPage';
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/routes/Homepage'
import NotFound from './components/routes/NotFound'
import Attractions from './components/routes/Attractions'
import Contact from './components/routes/Contact'
import MovieRequest from './components/routes/CurrentMovieList'
import MovieDetails from './components/routes/MovieDetails'
import NewReleaseMovieRequest from './components/routes/NewReleaseList'
import ScreensPage from './components/routes/ScreenPage'
import ClassificationPage from './components/routes/ClassificationPage'
import AboutPage from './components/routes/AboutPage'
import OpeningTimes from './components/routes/openingTimes'
import BoardContainer from './components/discussionComponents/boardContainer'
import Create from './components/discussionComponents/createTopic'
import CreateComment from './components/discussionComponents/createComment'
import Discussion from './components/discussionComponents/discussion'
import CommentDetails from './components/discussionComponents/comments'
import BoardDetails from './components/discussionComponents/boardDetails'
import NavBar from './components/discussionComponents/navBar'
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route
              path="/checkout/:fullTitle/:date/:movieTime/:seats/:ticketType/:bookerName"
              element={<Checkout stripeKey={stripeKey} />}
            />
            <Route path="/Success" element={<FailedPaymentPage />} />
            <Route path="/Failed" element={<FailedPaymentPage />} />
            <Route path="/CurrentMovieList" element={<MovieRequest />} />
            <Route path="/CurrentMovieList/:_id" element={<MovieDetails />} />
            <Route path="/NewReleaseList/:_id" element={<MovieDetails />} />
            <Route
              path="/NewReleaseList"
              element={<NewReleaseMovieRequest />}
            />
            <Route path="/Screens" element={<ScreensPage />} />
            <Route path="/Classification" element={<ClassificationPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path='/DiscussionBoard/*' element={<DiscussionBoard />} />
          </Routes>
        </BrowserRouter>
      </Auth0Provider>
=======
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/Attractions' element={<Attractions />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/CurrentMovieList' element={<MovieRequest />} />
          <Route path='/CurrentMovieList/:_id' element={<MovieDetails />} />
          <Route path='/NewReleaseList' element={<NewReleaseMovieRequest />} />
          <Route path='/NewReleaseList/:_id' element={<MovieDetails />} />
          <Route path='/screens' element={<ScreensPage />} />
          <Route path='/Classification' element={<ClassificationPage />} />
          <Route path='/DiscussionBoard' element={<BoardContainer />}/>

        <Route path="/DiscussionBoard/createTopic" element={<Create />} />
        <Route path="/DiscussionBoard/createComment" element={<CreateComment />} />
        <Route path="/DiscussionBoard/discussion/:id" element={<Discussion />} />
        <Route path="/DiscussionBoard/comments/:id" element={<CommentDetails />} />
        <Route path="/DiscussionBoard/boardDetails" element={<BoardDetails />} />
        <Route path="/DiscussionBoard/navBar" element={<NavBar />} />

          <Route path='/AboutPage' element={<AboutPage />} />
          <Route path='/openingTimes' element={<OpeningTimes />} />
        </Routes>
      </BrowserRouter>
>>>>>>> Stashed changes
    </div>
  );
}

App.propTypes = {
  authDomainURL: PropTypes.string.isRequired,
  authClientID: PropTypes.string.isRequired,
  stripeKey: PropTypes.string.isRequired,
};

export default App;

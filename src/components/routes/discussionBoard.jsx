<<<<<<< Updated upstream
import { Route, Routes } from "react-router-dom";
import NavBar from "../discussionComponents/discussionNavBar";
import Create from "../discussionComponents/createTopic";
import BoardContainer from "../discussionComponents/boardContainer";
import CreateComment from "../discussionComponents/createComment";
import Discussion from "../discussionComponents/discussion";
import Header from "../navigation/header/Header";
import Footer from "../navigation/footer/Footer";
import CommentDetails from "../discussionComponents/comments";
=======
import BoardContainer from "../discussionComponents/boardContainer";
import Header from "../Navigation/Header/Header";
import Footer from "../Navigation/Footer/Footer";
>>>>>>> Stashed changes

function DiscussionBoard() {
  return (
    <>
      <Header />
<<<<<<< Updated upstream
      <Routes>
        <Route exact path="/" element={<BoardContainer />} />
        <Route path="/DiscussionBoard/createTopic" element={<Create />} />
        <Route
          path="/DiscussionBoard/createComment"
          element={<CreateComment />}
        />
        <Route
          path="/DiscussionBoard/discussion/:id"
          element={<Discussion />}
        />
        <Route path="/DiscussionBoard/comments" element={<CommentDetails />} />
        <Route path="/DiscussionBoard/discussionNavBar" element={<NavBar />} />
        {/*<Route path="/aboutPage" element={<AboutPage />} />*/}
        {/*<Route path="/openingTimes" element={<OpeningTimes />} />*/}
      </Routes>
=======
      <BoardContainer />
>>>>>>> Stashed changes
      <Footer />
    </>
  );
}

export default DiscussionBoard;

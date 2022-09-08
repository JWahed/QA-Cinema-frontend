import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./navBar";
import Create from "./create";
import BoardContainer from "./boardContainer";
import CreateComment from "./createComment";
import Discussion from './discussion';
//import AboutPage from './aboutPage';
//import OpeningTimes from './openingTimes';
import CommentDetails from "./comments";


function DiscussionBoard() {
  return (
    <>
      <>
      </>

      <BrowserRouter>

        <Routes>

          <Route exact path="/" element={<BoardContainer />} />
            <Route path="/create" element={<Create />} />
            <Route path="/createComment" element={<CreateComment />} />
            <Route path="/discussion/:id" element={<Discussion />} />
            <Route path="/comments" element={<CommentDetails />} />
            <Route path="/navBar" element={<NavBar />} />
            {/*<Route path="/aboutPage" element={<AboutPage />} />*/}
            {/*<Route path="/openingTimes" element={<OpeningTimes />} />*/}



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default DiscussionBoard;

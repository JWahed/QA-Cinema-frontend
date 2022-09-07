import Board5 from "./Board5";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./NavBar";
import Create from "./create";
import CreateComment from "./createComment";
import Discussion from './topicDetails';
//import Comments from "./Comment/Comments";
import CommentDetails from "./commentDetails";
//import NotFound from './NotFound';
//import Comments from './Comments;'

function DiscussionBoard3() {
  return (
    <>
      <>
      </>

      <BrowserRouter>

        <Routes>

          <Route exact path="/" element={<Board5 />} />
            <Route path="/create" element={<Create />} />
            <Route path="/createComment" element={<CreateComment />} />
            <Route path="/discussion/:id" element={<Discussion />} />
            {/*<Route path="/comments/:id" element={<Comments />} />*/}
            <Route path="/commentDetails" element={<CommentDetails />} />
            <Route path="/NavBar" element={<NavBar />} />

            {/*<Route path="/Comments" element={<Comments />} />*/}


          {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default DiscussionBoard3;

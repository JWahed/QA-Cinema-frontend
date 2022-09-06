import Board5 from "./Board5";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./NavBar";
import Create from "./create";
import Discussion from './topicDetails';
import NotFound from './NotFound';
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
            <Route path="/discussion/:id" element={<Discussion />} />
            <Route exact path="/NavBar" element={<NavBar />} />
            {/*<Route path="/Comments" element={<Comments />} />*/}


          {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default DiscussionBoard3;

import useFetch from "./useFetch";
import BoardDetails from "./boardDetails";
<<<<<<< Updated upstream
import NavBar from "./discussionNavBar";
import "./discussionBoard.css";

const BoardContainer = () => {
=======
import NavBar from "./navBar";
import "./DiscussionBoard.css";

const Board = () => {
>>>>>>> Stashed changes
  const {
    error,
    isPending,
    data: topics,
  } = useFetch("http://localhost:5000/api/discussion");

  return (
<<<<<<< Updated upstream
    <div>
      <div>
        <NavBar />
      </div>
      <div className="top-bar">
        <br />
      </div>
=======
    <div className="boardBody">
      <div>
        <NavBar />
      </div>
      <div className="top-bar"></div>
>>>>>>> Stashed changes
      <div className="main">
        <ol>
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {topics && <BoardDetails topics={topics} />}
        </ol>
      </div>
    </div>
  );
};

<<<<<<< Updated upstream
export default BoardContainer;
=======
export default Board;
>>>>>>> Stashed changes

import useFetch from "./useFetch";
import BoardDetails from "./boardDetails";
import NavBar from "./discussionNavBar";
import "./discussionBoard.css";

const BoardContainer = () => {
  const {
    error,
    isPending,
    data: topics,
  } = useFetch("http://localhost:5000/api/discussion");

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="top-bar">
        <br />
      </div>
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

export default BoardContainer;

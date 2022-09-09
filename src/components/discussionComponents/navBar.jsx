import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>QA Film Board</h1>
        <div className="links">
          <Link to="/DiscussionBoard">Home</Link>
          <Link to="/DiscussionBoard/createTopic">New Topic</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

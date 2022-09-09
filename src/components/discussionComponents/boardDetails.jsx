import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BoardDetails = ({ topics }) => {
  return (
    <div className="discussion-list">
      {topics.map((discussion) => (
        <div className="topic-preview" key={discussion._id}>
          <Link to={`/discussion/${discussion._id}`}>
            <h2>{discussion.topic}</h2>
            <p>Topic Started by {discussion.topicAuthor}</p>
            <br />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default BoardDetails;

BoardDetails.propTypes = {
  topics: PropTypes.string.isRequired,
  map: PropTypes.object.isRequired,
};

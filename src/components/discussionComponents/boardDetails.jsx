import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BoardDetails = ({ topics }) => {
<<<<<<< Updated upstream
=======
  // const topics = props.topics;
  // const title = props.title;
  // console.log(topics);

>>>>>>> Stashed changes
  return (
    <div className="discussion-list">
      {topics.map((discussion) => (
        <div className="topic-preview" key={discussion._id}>
          <Link to={`/discussion/${discussion._id}`}>
<<<<<<< Updated upstream
            <h2>{discussion.topic}</h2>
            <p>Topic Started by {discussion.topicAuthor}</p>
            <br />
=======
            <ul className="tlistFormat">
              <li>
                <h2 className="topicHeader">{discussion.topic}</h2>
              </li>
              <br />
              <li>
                <p className="topicAuthor">
                  Topic Started by {discussion.topicAuthor}
                </p>
              </li>
            </ul>
>>>>>>> Stashed changes
          </Link>
        </div>
      ))}
    </div>
  );
};
<<<<<<< Updated upstream
export default BoardDetails;

BoardDetails.propTypes = {
  topics: PropTypes.string.isRequired,
  map: PropTypes.object.isRequired,
=======

export default BoardDetails;

BoardDetails.propTypes = {
  topics: PropTypes.object.isRequired,
>>>>>>> Stashed changes
};

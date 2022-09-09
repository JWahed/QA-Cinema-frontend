import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CreateComment from "./createComment";
import Comments from "./comments";
<<<<<<< Updated upstream
import NavBar from "./discussionNavBar";
=======
import NavBar from "./navBar";
>>>>>>> Stashed changes

const discussion = () => {
  const navigate = useNavigate();
  const [discussion, setDiscussion] = useState([]);
  const { id } = useParams();

  const getDiscussionReq = async () => {
    const url = "http://localhost:5000/api/discussion/" + id;
    const response = await axios.get(url);
    console.log(response.data);
    setDiscussion(response.data);
  };

  useEffect(() => {
    getDiscussionReq();
  }, []);

  const topicDelete = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/discussion/` + id)
      .then((res) => console.log("Deleted!!!!!!!", res))
      .catch((err) => console.log(err))
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="blog-details">
        {discussion && (
          <article>
            <h2>Topic {discussion.topic}</h2>
            <p>Written by {discussion.topicAuthor}</p>
            <br />
            <p>{discussion.comment}</p>
            <div> {discussion.body}</div>
            <button onClick={(e) => topicDelete(discussion._id, e)}>
              delete
            </button>
            {/*<Home />*/}
            <div>
              <CreateComment topicID={id} />
              <Comments topicID={id} />
            </div>
          </article>
        )}
      </div>
    </div>
  );
};

export default discussion;

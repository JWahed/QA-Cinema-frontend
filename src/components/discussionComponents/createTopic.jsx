import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [topic, setTopic] = useState("");
  const [topicAuthor, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const topics = { topic, topicAuthor, comment };

    fetch("http://localhost:5000/api/discussion/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(topics),
    }).then(() => {
      console.log(`new topic added`);

      navigate("/DiscussionBoard");
    });
  };

  return (
    <div className="create">
      <h2>Add New Topic</h2>
      <form onSubmit={handleSubmit}>
        <label>Topic:</label>
        <input
          type="text"
          required
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <label>Topic author:</label>
        <input
          type="text"
          required
          value={topicAuthor}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>Topic Comment:</label>
        <input
          type="text"
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button>Add Topic</button>
      </form>
    </div>
  );
};

export default Create;

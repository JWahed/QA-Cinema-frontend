import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateComment = () => {

  const [commentAuthor, setCommentAuthor] = useState('');
  const [comment, setNewComment] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentPost = { commentAuthor, comment };

    fetch("http://localhost:5000/api/comments/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentPost),
    }).then(() => {

      navigate.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add New Comment</h2>
      <form onSubmit={handleSubmit}>
        
        <label>Name:</label>
        <input
          type="text"
          required
          value={commentAuthor}
          onChange={(e) => setCommentAuthor(e.target.value)}
        />

        <label>Comment:</label>
        <input
          type="text"
          required
          value={comment}
          onChange={(e) => setNewComment(e.target.value)}
        />

        <button>Add Comment</button>
      </form>
    </div>
  );
};

export default CreateComment;
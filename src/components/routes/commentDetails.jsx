import { useParams } from "react-router-dom";
//import Fetch from REACT;
import useFetch from "./useFetch";
//import Home from "./Home";

const commentDetails = () => {
    const { id } = useParams();
    const { data: post, error, isPending } = useFetch('http://localhost:5000/api/comments/')
  
    return (
      <div className="comment-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { post && (
                <article>
                {/*<h2>{ discussion.title }</h2>*/}
                <p>Written by { post.commentAuthor }</p>
                <p>{ post.comment }</p>
                {/*<Home />*/}
                {post.map(comments => (
          <div className="comment" key={comments._id} >
     
            <p>Comment { comments.comment }</p>
            <p>Comment by { comments.commentAuthor }</p>
           
          </div>
        ))}

      
               
              </article>
      )}
      </div>
 
    );
  }

export default commentDetails;
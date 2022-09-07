import { useParams } from "react-router-dom";
//import Fetch from REACT;
import useFetch from "./useFetch";
import CreateComment from "./createComment";
import CommentDetails from "./commentDetails";
import NavBar from "./NavBar";
//import Home from "./Home";

const topicDetails = () => {
    const { id } = useParams();
    const { data: discussion, error, isPending } = useFetch('http://localhost:5000/api/discussion/' + id)
   
  
    return (
      <div>
      <div>
          <NavBar />
         </div>
      
      <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { discussion && (
                <article>
                <h2>Topic { discussion.topic}</h2>
                <p>Written by { discussion.topicAuthor }</p>
                <br />
                <p>{ discussion.comment }</p>
                {/*<Home />*/}
                <div>
          
          <CommentDetails />
          <CreateComment />


         </div>
               
              </article>
      )}
      </div>
      </div>
    );
  }



export default topicDetails;
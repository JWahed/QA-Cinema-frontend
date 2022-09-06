import { useParams } from "react-router-dom";
//import Fetch from REACT;
import useFetch from "./useFetch";
//import Home from "./Home";

const topicDetails = ({topics}) => {
    const { id } = useParams();
    const { data: discussion, error, isPending } = useFetch('http://localhost:5000/api/discussion/' + id)
  
    return (
      <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { discussion && (
                <article>
                {/*<h2>{ discussion.title }</h2>*/}
                <p>Written by { discussion.topicAuthor }</p>
                <p>{ discussion.comment }</p>
                {/*<Home />*/}
      
               
              </article>
      )}
      </div>
    );
  }

export default topicDetails;
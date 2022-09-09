import { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from "axios";
import CreateComment from "./createComment";
import Comments from "./comments";
import NavBar from "./navBar";



const discussionDetails = () => {
  const navigate = useNavigate();
  const [discussion, setDiscussion] = useState([]);
  const {id} = useParams();
  
  const getDiscussionReq = async() => {
      const url = ('http://localhost:5000/api/discussion/' + id);
      const response = await axios.get(url);
      console.log(response.data);
      setDiscussion(response.data);
    };
    
    useEffect(() => {
      getDiscussionReq();
    },[]);

    console.log(`http://localhost:5000/api/discussion/${id}`);
  
    const topicDelete = (id, e) => {
      e.preventDefault();
      axios.delete('http://localhost:5000/api/discussion/:id' + id)
      .then(res => console.log('Deleted!!!!!!!', res)).catch(err => console.log(err))
       .then(() => {
       navigate('/')
       })

    }
  
  


    return (
      <div>
      <div>
          <NavBar />
         </div>
      
      <div className="blog-details">

      { discussion && (
                <article>
                <h2>Topic { discussion.topic}</h2>
                <p>Written by { discussion.topicAuthor }</p>
                <br />
                <p>{ discussion.comment }</p>
                <div> {discussion.body}</div>
                <button onClick={(e) => topicDelete(discussion.id, e)}>delete</button>
                {/*<Home />*/}
                <div>
          <CreateComment topicID={id}/>
          <Comments topicID={id}/>
          


         </div>
               
              </article>
      )}
      </div>
      </div>
    );
  }



export default discussionDetails;
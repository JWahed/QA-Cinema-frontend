import { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from "axios";



const commentDetails = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const {id} = useParams();
  
  const getCommentsReq = async() => {
      const url = ('http://localhost:5000/api/comments/' + id);
      const response = await axios.get(url);
      console.log(response.data);
      setComments(response.data);
    };
    
    useEffect(() => {
      getCommentsReq();
    },[]);

    console.log(`http://localhost:5000/api/comments/${id}`);
  
    const commentDelete = (id, e) => {
      e.preventDefault();
      axios.delete('http://localhost:5000/api/comments/:id' + id)
      .then(res => console.log('Deleted!!!!!!!', res)).catch(err => console.log(err))
       .then(() => {
       navigate('/')
       })

    }
  
  


    return (
      <div>
 
      
      <div className="thread-comments">

      { comments && (
                <article>
                <h2>Topic { comments.topic}</h2>
                <p>Written by { comments.commentAuthor }</p>
                <br />
                <p>{ comments.comment }</p>
                <div> {comments.body}</div>
                <button onClick={(e) => commentDelete(comments.id, e)}>delete</button>

               
              </article>
      )}
      </div>
      </div>
    );
  }



export default commentDetails;
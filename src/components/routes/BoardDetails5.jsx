import { Link } from 'react-router-dom';

const BoardDetails5 = ({topics}) => {
 // const topics = props.topics;
  // const title = props.title;
  // console.log(topics);


  return (
    <div className="discussion-list">
      {topics.map(discussion => (
        <div className="topic-preview" key={discussion._id} >
          <Link to={`/discussion/${discussion._id}`}>
      
          <h2>{ discussion.topic }</h2>
          <p>Topic Started by { discussion.topicAuthor }</p>
          <br />
          </Link>
        </div>
      ))}
    </div>
  );

      }
export default BoardDetails5;
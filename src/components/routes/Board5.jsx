import useFetch from "./useFetch";
import BoardDetails5 from './BoardDetails5';
import NavBar from "./NavBar";
import "./DiscussionBoard.css"

    const Board5 = ({}) => {
       const { error, isPending, data: topics } = useFetch('http://localhost:5000/api/discussion')
        
        return (
     

   
        <div>
         <div>
          <NavBar />
         </div>
        <div className="top-bar">

          <br />

        </div>
        <div className="main">
          <ol>
          { error && <div>{ error }</div> }
           { isPending && <div>Loading...</div> }
          {topics && <BoardDetails5 topics={topics} />}
        </ol>
        </div>


      </div>

      

        );

        

        


 
}


export default Board5;
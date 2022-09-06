import useFetch from "./useFetch";
import BoardDetails5 from './BoardDetails5';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar";

//const Board5 = () => {
    //const current = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const Board5 = () => {
       const { error, isPending, data: topics } = useFetch('http://localhost:5000/api/discussion')
        
        return (
     

   
        <div>
         <div>
          <NavBar />
         </div>
        <div className="top-bar">
          <h1>
            QA Discussion Board
          </h1>

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
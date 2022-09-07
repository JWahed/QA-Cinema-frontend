import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ClassificationPage from './components/routes/ClassificationPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Classification" element={<ClassificationPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

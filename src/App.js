import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Classification from './pages/Classification';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Classification" element={<Classification/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

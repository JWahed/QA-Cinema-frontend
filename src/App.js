import './App.css';
import ScreensPage from './components/pages/ScreenPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/screens" element={<ScreensPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

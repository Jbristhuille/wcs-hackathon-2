import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';

import HomePage from "./components/HomePage/HomePage";
import QRCodePage from "./pages/QRCodePage/QRCodePage";
import ParksMapPage from "./pages/ParksMapPage/ParksMapPage";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cars" element={<HomePage />}/>
          <Route path="/qr" element={<QRCodePage />}/>
          <Route path="/parks" element={<ParksMapPage />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.scss';

import HomePage from "./pages/HomePage/HomePage";
import QRCodePage from "./pages/QRCodePage/QRCodePage";
import ParksMapPage from "./pages/ParksMapPage/ParksMapPage";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <div className="gradient top"></div>

      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>}/>
          <Route path="/cars" element={<HomePage />}/>
          <Route path="/qr" element={<QRCodePage />}/>
          <Route path="/parks" element={<ParksMapPage />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>

      <div className="gradient bottom"></div>
    </div>
  );
}


export default App;

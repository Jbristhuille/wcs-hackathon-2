import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';

import QRCodePage from "./pages/QRCodePage/QRCodePage";
import ParksMapPage from "./pages/ParksMapPage/ParksMapPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/qr" element={<QRCodePage />}/>
          <Route path="/parks" element={<ParksMapPage />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;

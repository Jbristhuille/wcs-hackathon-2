import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import HomePage from "./components/HomePage/HomePage";
import QRCodePage from "./pages/QRCodePage/QRCodePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cars" element={<HomePage />}/>
          <Route path="/qr" element={<QRCodePage />}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;

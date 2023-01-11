import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import QRCodePage from "./pages/QRCodePage/QRCodePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/qr" element={<QRCodePage />}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;

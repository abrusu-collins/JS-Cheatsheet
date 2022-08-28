import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/index.css";
import Home from "./components/Home";
import Allcheatsheets from "./components/Cheatsheets/Allcheatsheets";
import API from "./components/Cheatsheets/API/API";
import Array from "./components/Cheatsheets/Array/Array";
import DOM from "./components/Cheatsheets/DOM/DOM";
import String from "./components/Cheatsheets/String/String";
import RegExp from "./components/Cheatsheets/RegExp/RegExp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allcheatsheets" element={<Allcheatsheets />} />
        <Route path="/api" element={<API />} />
        <Route path="/array" element={<Array />} />
        <Route path="/dom" element={<DOM />} />
        <Route path="/string" element={<String />} />
        <Route path="/regexp" element={<RegExp />} />
      </Routes>
    </Router>
  );
}

export default App;

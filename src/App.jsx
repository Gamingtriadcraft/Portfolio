import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Bio from "./pages/Bio";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

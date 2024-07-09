import React from "react";
import "./App.css";
import GymBody from "./components/body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<GymBody />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

import Login from "./moneyPages/login";


export default App;

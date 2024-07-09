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
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

import Login from "./moneyPages/login";
import SignUp from "./moneyPages/signup";


export default App;

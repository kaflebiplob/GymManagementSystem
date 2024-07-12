import React from "react";
import "./App.css";
import GymBody from "./components/body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/gymbody" element={<GymBody />} />

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>} />
            
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/aboutme" element={<About />}/>
        </Routes>
      </div>
      {/* <About/> */}
      
    </Router>
  );
}

import Login from "./moneyPages/login";
import SignUp from "./moneyPages/signup";
import Home from "./pages/home";
import ContactUs from "./pages/contactus";
import About from "./pages/about";


export default App;

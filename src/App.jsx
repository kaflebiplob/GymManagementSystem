import React from "react";
import "./App.css";
import GymBody from "./components/body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/contactus";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/gymbody" element={<GymBody />} />

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />

          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
     
    </Router>
  );
}

import Login from "./moneyPages/login";
import SignUp from "./moneyPages/signup";
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import FooterPage from "./pages/footerpage";

export default App;

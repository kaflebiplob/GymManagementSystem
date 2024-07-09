import React from "react";
import { Link } from "react-router-dom";

function GymHeader() {
  return (
    <div className="header-section">
      <div className="headContainer">
        <div className="logo">Gym</div>
        <div className="signupContainer">
         
          <Link to={"/login"}>
          <button>sign up</button>
          </Link>
           
         
        </div>
      </div>
    </div>
  );
}
export default GymHeader;

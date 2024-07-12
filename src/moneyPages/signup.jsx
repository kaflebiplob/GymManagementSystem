import Membership from "../components/MembershipHeader";
import "./moneypage.css";
import React from "react";
import { useEffect } from "react";
import StickylogoforlS from "./stickylogoforcomponents";
import LoginSignHeader from "./Nextheader";
import GymFooter from "../components/footer";

function SignUp() {
  useEffect(() => {
    StickylogoforlS();
  }, []);

  return (
    <>
      

      <div className="login-section">
        <div className="loginContainer">
          <h1>SignUp</h1>
          <p>SignUpto get access of information</p>
          <form action="">
            <label htmlFor="first">Username:</label>
            <input type="email" placeholder="enter you username" required />
            <label htmlFor="first">New Password:</label>
            <input type="password" placeholder="Create new password" required />
            <label htmlFor="first">Re-type New Password:</label>
            <input type="password" placeholder="Retype new password" required />
            <button className="submitbtn">Sign Up</button>
          </form>
        </div>
      </div>
    
     
    
    </>
  );
}

export default SignUp;

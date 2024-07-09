import Membership from "../components/MembershipHeader";
import "./moneypage.css";
import React from "react";
import { useEffect } from "react";
import StickylogoforlS from "./stickylogoforcomponents";
import LoginSignHeader from "./Nextheader";
import GymFooter from "../components/footer";

function Login() {
    useEffect(() => {
        StickylogoforlS();
       
      }, []);
  

  return (
    <>
      {/* <div> */}
        <Membership />
        <hr />
        <LoginSignHeader/>
        <div className="login-section">
          <div className="loginContainer">
            <h1>Login</h1>
            <p>Login to get access of information</p>
            <form action="">
              <label htmlFor="first">Username:</label>
              <input type="email" placeholder="enter you username" required />
              <label htmlFor="first">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
              <button className="submitbtn">Login</button>
            </form>
            <p>
              Not registered? <a href="">Create an account</a>
            </p>
          </div>
        </div>
      {/* </div> */}
      <hr />
      <GymFooter/>
    </>
  );
}

export default Login;

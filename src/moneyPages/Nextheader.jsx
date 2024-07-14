import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function LoginSignHeader() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

const  toogleHamburger= ()=> {
    setHamburgerOpen(!hamburgerOpen);
  }
  // console.log(setHamburgerOpen)
  return (
    <div className="LSheader-section">
      <div className="LSheadContainer">
        <Link to={"/gymbody"}>
          <div className="logo">Gym</div>
        </Link>
       
        <div className={`services ${hamburgerOpen ? "show" : ""}`}>
          <ul>
            <li>
              <Link to={"/home"} className="nav-link" id="home">
                Home
              </Link>
            </li>

            <li>
              <Link to={"/aboutme"} id="about" className="nav-link">
                about
              </Link>
            </li>
            <li>
              <Link to={"/product"} id="product" className="nav-link">
                Product
                
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="nav-link" id="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toogleHamburger}>
          <div className="hamburger-arrow"></div>
          <div className="hamburger-arrow"></div>
          <div className="hamburger-arrow"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignHeader;

import { Link, NavLink } from "react-router-dom";


function LoginSignHeader() {

  return (
    <div className="LSheader-section">
      <div className="LSheadContainer">
        <Link to={"/gymbody"}>
          <div className="logo">Gym</div>
        </Link>

        <div className="services">
          <ul>
            <li>
            <Link to={"/home"}>
              <a href="/home" id="home" className="nav-link">
              Home
              </a>
            </Link>
              
              
            </li>

            <li>
              <Link to={"/aboutme"}>
              <a href="/aboutme" id="about"  className="nav-link">
              About
              </a>
            </Link>
              
              
            </li>
            <li>
            
              <a href="" id="product"  className="nav-link">
                {" "}
                Product
              </a>
            </li>
            <li>
              <Link to={"/contact"}>
              <a href="" id="contact"  className="nav-link">
                Contact
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LoginSignHeader;

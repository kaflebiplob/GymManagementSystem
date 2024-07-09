
import { Link } from "react-router-dom";

function LoginSignHeader() {
 
  

  return (

    <div className="LSheader-section">
      <div className="LSheadContainer">
        <Link to={"/"}>
        <div className="logo" >Gym</div>
        </Link>

        <div className="services">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LoginSignHeader;

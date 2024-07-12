import { Link } from "react-router-dom"
import About from "../pages/about"

function Membership(){

return(
    <div className="membership-section">
        
        <div className="membershiplogo">
            <h1>SADGYM</h1>
        </div>
        <div className="membershipbtn">
            <button> <Link to={"/aboutme"}>Membership </Link></button>
        </div>
   
    </div>
)
}
export default Membership
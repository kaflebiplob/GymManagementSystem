import { Link } from "react-router-dom"
function GymFooter(){
return(
    <div className="footer-section">
        <div className="footerContainer">
        <div className="subscription">
            <h2>Make Your Life Amazing Quickly</h2>
            <button className="buybtn"><Link to={"/aboutme"}> BUY SADGYM </Link> </button>
            
        </div>
        <div className="copygright">
          Copyright  &copy; - SAD PROJECT 2024
        </div>
        </div>
        {/* <div className="copygright">
            &copy;
        </div> */}
    </div>
)

}
export default GymFooter
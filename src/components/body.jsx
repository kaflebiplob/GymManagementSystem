import GymLowerBody from "./GymLowerBody";
import Membership from "./MembershipHeader";
import GymFooter from "./footer";
import GymHeader from "./header";

function GymBody() {
  function scrollfunction(btn) {
    const scrollbtn = document.querySelector(".Viewbtn");
    if (btn) {
      scrollbtn.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <Membership />
      <div className="">
        <div className="body-section image-section">
          <GymHeader />
          <div className="bodyContainer">
            <h1>SADGYM</h1>
            <h4>SADGYM - GYM & FITNESS CENTER</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
              eius!
            </p>
            <button
              className="Viewbtn"
              onClick={() => scrollfunction(<GymLowerBody />)}
            >
              Visit
            </button>
          </div>
        </div>
      </div>
      <GymLowerBody />
      <GymFooter />
    </>
  );
}
export default GymBody;
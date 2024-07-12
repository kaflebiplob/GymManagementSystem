import Membership from "../components/MembershipHeader";
import Aboutimg from "../images/home-page-second.webp";
import LoginSignHeader from "../moneyPages/Nextheader";
import GymFooter from "../components/footer"
function About() {
  return (
    <>
    <Membership/>
    <LoginSignHeader/>
    
    <section className="about-section">
      <div className="aboutcontainer">
        <div className="container">
          <div className="intro">
            <h1>
              {" "}
              <span>About</span> us
            </h1>
            <p>
              Gym is very important in our life Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Assumenda, explicabo?
            </p>
          </div>
          <div className="intro-img">
            <img src={Aboutimg} alt="" />
          </div>
        </div>
      </div>
      <div className="about-lower">
        <p style={{ color: "#d8a236" }}>Welcome to SADGYM</p>
        <h2>
          Best <span>Gym Management</span> for you
        </h2>
        <h2>
          We provide best <span>quality</span> trainers with{" "}
          <span>quality equipments</span>{" "}
        </h2>
        <h2>
          we proide <span>best</span> quality protine also
        </h2>
      </div>
      <hr />
      <div className="choosemembership">
        <h2>Choose your Membership</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          omnis vitae nesciunt perferendis reprehenderit eos.
        </p>
        <div className="membershipTypes">
          <div className="gymmembership">
          <h4>Basic</h4>
            <div className="intro">
            <h1>$80 </h1>
            <span>per month</span>
            </div>
            <ul>
              <li>6 hours access to gym</li>
              <li>can use upto 7 equipments</li>
              <li>3 classes per week</li>
              <li>one month membership</li>
              <li>unlimited water package</li>
              <li>one instructor</li>
            </ul>
            <button className="jointoday">Join Today</button>
          </div>
          <div className="gymmembership">
          <h4>Silver</h4>
          <div className="intro">
          <h1>$200</h1>
            <span>Six Month</span>
          </div>
            
            <ul>
              <li>unlimited access to gym</li>
              <li>can use up to 15 equipments</li>
              <li>5 classes per week</li>
              <li>6 month membership</li>
              <li>unlimited water package</li>
              <li>one personal instructor plus extras</li>
            </ul>
            <button className="jointoday">Join Today</button>
          </div>
          <div className="gymmembership">
          <h4>Gold</h4>
             <div className="intro">
          <h1>$320</h1>
            <span>One Year</span>

          </div>
            <ul>
              <li>unlimited access to gym </li>
              <li>can use all equipments</li>
              <li>7 classes per week</li>
              <li>unlimited water package</li>
              <li>one year membership</li>
              <li>can use upto five personal instructors</li>
            </ul>
            <button className="jointoday">Join Today</button>
          </div>
        </div>
      </div>
    </section>
    <GymFooter/>
    </>
  );
}
export default About;

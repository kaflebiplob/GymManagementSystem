import Membership from "../components/MembershipHeader";
import GymFooter from "../components/footer";
import contact from "../images/contact-me.webp";
import LoginSignHeader from "../moneyPages/Nextheader";
function ContactUs() {
  return (
    <>
      <Membership />
      <LoginSignHeader />

      <section className="contact-section">
        <div className="contactname">
          <div className="container">
            <div className="intro">
              <h1>
                <span>Contact</span> Us
              </h1>
              <p>
                We have very professional instructors and servives. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Totam, fuga.
              </p>
            </div>
            <div className="intro-img">
              <img src={contact} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="getintouch">
          <h1>
            Get in <span>Touch</span>
          </h1>
          <h5>Contact us if you need information</h5>
          <div className="contact-info">
            <div className="location">
              <p>kathmandu, Nepal</p>
              <p>St Lawrence</p>
            </div>
            <div className="phonenum">
              <p>9869000000</p>
              <p>9800000000</p>
            </div>
            <div className="email">
              <p>biplobkafle21@gmail.com</p>
              <p>test@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="sendmessage">
          <h1>Send Message</h1>
          <p>
            If you need any information, feel free to send me message I will try
            to answer your and give you proper tips about your message
          </p>
          <di v className="contactform">
            <form action="">
              <label for="fname">First Name</label>

              <input type="text" placeholder="your name ..." />
              <label for="lname">Last Name</label>

              <input type="text" placeholder="your lastname ..." />
              <label for="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Nepal</option>
                <option value="canada">India</option>
                <option value="usa">Pakistan</option>
              </select>
              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </di>
        </div>
      </section>
      <GymFooter />
    </>
  );
}
export default ContactUs;

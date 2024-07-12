import "./page.css";
import "../moneyPages/moneypage.css"
import homeImg from "../images/home-page-img.jpg";
import LoginSignHeader from "../moneyPages/Nextheader";
import { useEffect, useState } from "react";
import Membership from "../components/MembershipHeader";
import { Link } from "react-router-dom";

function Home() {
  const [scroll, setScroll] = useState(0);
  const testimonials = [
    {
      id: 1,
      text: "Nothing will work unless you do. - Maya Angelou",
    },
    {
      id: 2,
      text: "Don't count the days, make the days count.  - Muhammad Ali",
    },
    { id: 3, text: "No pain, no gain.  - Universal Truth" },
    {
      id: 4,
      text: "The only limit to the height of your achievements is the reach of your dreams and your willingness to work for them. - Michelle Obama",
    },
    {
      id: 5,
      text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can’t achieve it. - Jordan Belfort",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setScroll((prevScroll) => {
        // (prevScroll + 1) % testimonials.length);
        if (prevScroll === 0) {
          return testimonials.length - 1;
        } else {
          return prevScroll - 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <Membership/>
    < LoginSignHeader/>
      <section className="HOMESECTION">
        <div className="home-section">
          <div className="container">
            <div className="homeintro">
              <h1>
                <span>Time</span> to get <span>fit</span>
              </h1>
              <p>
                Gym is very important to maintain our health. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Sequi, a.
              </p>
              <button><Link to={"/contactus"} > Contact now</Link></button>
            </div>
            <div className="intro-img">
              <img src={homeImg} alt="" />
            </div>
          </div>
        </div>
        <div className="testimonialsContainer">
          <h1>
            <span>Testimonials</span>
          </h1>
          <p>Pepoles Thought's</p>
          <div className="testimonials">
            <div
              className="testimonials-wrapper"
              style={{ transform: `translateY(-${scroll * 100}px)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-part">
                  {testimonial.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;

import product from "../images/product-img.jpg";
import productone from "../images/product-1.jpg";
import producttwo from "../images/product-2.jpg";
import pulldownhandle from "../images/pulldown-handle.png";
import dumbell from "../images/dumbell-8kg.jpg";
import dumbelltwo from "../images/dumbell-200lbs.jpg";
import cycling from "../images/cycling.jpeg";

import skippingrope from "../images/skipping-5.jpg";
import Membership from "../components/MembershipHeader";
import LoginSignHeader from "../moneyPages/Nextheader";
import GymFooter from "../components/footer";
import FooterPage from "./footerpage";
function Product() {
  return (
    <>
      <Membership />
      <LoginSignHeader />

      <section className="product-section">
        <div className="product-container mainproductcontainer">
          <div className="container product-container">
            <h1>
              <span>Our</span> Product
            </h1>
            <p>
              Our products are quality products directly imported. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sequi quam autem,
              nulla odio facere perferendis!
            </p>
          </div>
        </div>
        <h2>On sale</h2>
        <div className="product-lists">
          <div className="lists">
            <a href="">
              <img src={productone} alt="" />

              <div className="details">
                <h4>Protine Powder</h4>
                <span>$30.00</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={producttwo} alt="" />

              <div className="details">
                <h4>Protine Powder</h4>
                <span>$22.00</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={skippingrope} alt="" />

              <div className="details">
                <h4>Skipping-Rope</h4>
                <span>$12.00</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={pulldownhandle} alt="" />

              <div className="details">
                <h4>Rope Pulling</h4>
                <span>$250.00</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={dumbell} alt="" style={{ background: "none" }} />
              <div className="details">
                <h4>Dumbell-4kg</h4>
                <span>$27.00</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={dumbelltwo} alt="" />

              <div className="details">
                <h4>Dumbell-200LBS</h4>
                <span>$40.00</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={cycling} alt="" />

              <div className="details">
                <h4>Cycling-Machine</h4>
                <span>$200.00</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <FooterPage/>
    </>
  );
}
export default Product;

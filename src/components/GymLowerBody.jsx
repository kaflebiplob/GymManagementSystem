import React from "react";
import dummyImg from "../images/dummy-img.jpg";
import { Link } from "react-router-dom";
import homepage from "../images/home-page-img.jpg";
import aboutme from "../images/home-page-second.webp";
import contact from "../images/contact-me.webp";
import product from "../images/product-img.jpg";

function GymLowerBody() {
  return (
    <div className="bottombody-section">
      <div className="lowerbodyContainer">
        <div className="gymDetails">
          <Link to={"/home"}>
            <div className="img-div">
              <a href="">
                <img src={homepage} alt="" style={{ height: 345 }} />
              </a>
            </div>
            <div className="subdetails">
              <p className="details-description">Home</p>
            </div>
          </Link>
        </div>
        <div className="gymDetails">
          <Link to={"/aboutme"}>
            <div className="img-div">
              <a href="">
                <img src={aboutme} alt="" style={{ height: 345 }} />
              </a>
            </div>
            <div className="subdetails">
              <p className="details-description">About</p>
            </div>
          </Link>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src={contact} alt="" style={{ height: 345 }} />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Services</p>
          </div>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src={dummyImg} alt=""  style={{height:345}}/>
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Traniees</p>
          </div>
        </div>

        <div className="gymDetails">
          <Link to={"/product"}>
            <div className="img-div">
              <a href="">
                <img src={product} alt="" style={{ height: 345 }} />
              </a>
            </div>
            <div className="subdetails">
              <p className="details-description">Product</p>
            </div>
          </Link>
        </div>

        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src={contact} alt="" style={{ height: 345 }} />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GymLowerBody;

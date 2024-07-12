import React from "react";
import dummyImg from '../images/dummy-img.jpg'
import { Link } from "react-router-dom";


function GymLowerBody() {
  return (
    <div className="bottombody-section">
      <div className="lowerbodyContainer">
        <div className="gymDetails">
            <Link to={"/home"}>
          <div className="img-div">
            <a href="">
              <img src={dummyImg} alt="" />
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
              <img src={dummyImg} alt="" />
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
              <img src={dummyImg} alt="" />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Services</p>
          </div>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src={dummyImg} alt="" />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Traniees</p>
          </div>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src={dummyImg} alt="" />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Traniees Details</p>
          </div>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src={dummyImg} alt="" />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Product</p>
          </div>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src={dummyImg} alt="" />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Product Details</p>
          </div>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src={dummyImg} alt="" />
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



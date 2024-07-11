import React from "react";
import dummyImg from '../images/dummy-img.jpg'


function GymLowerBody() {
  return (
    <div className="bottombody-section">
      <div className="lowerbodyContainer">
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src={dummyImg} alt="" />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Home</p>
          </div>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src={dummyImg} alt="" />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">About</p>
          </div>
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



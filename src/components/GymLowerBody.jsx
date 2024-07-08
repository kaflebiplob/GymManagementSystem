import React from "react";


function GymLowerBody() {
  return (
    <div className="bottombody-section">
      <div className="lowerbodyContainer">
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src="./src/images/dummy-img.jpg" alt="" />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Home</p>
          </div>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src="./src/images/dummy-img.jpg" alt="" />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">About</p>
          </div>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src="./src/images/dummy-img.jpg" alt="" />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Services</p>
          </div>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src="./src/images/dummy-img.jpg" alt="" />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Traniees</p>
          </div>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src="./src/images/dummy-img.jpg" alt="" />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Traniees Details</p>
          </div>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src="./src/images/dummy-img.jpg" alt="" />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Product</p>
          </div>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src="./src/images/dummy-img.jpg" alt="" />
            </a>
          </div>
          <div className="subdetails">
            <p className="details-description">Product Details</p>
          </div>
        </div>
        <div className="gymDetails">
          <div className="img-div">
            <a href="">
              <img src="./src/images/dummy-img.jpg" alt="" />
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

//     import React from "react";
// import dummyImg from"/src/images/dummy-img.jpg"

// function GymLowerBody() {
//   const GymDetails = ({ link, imgSrc, description}) => {
//     <div className="gymDetails">
//       <div className="img-div">
//         <a href={link}>
//           <img src={imgSrc} alt={description} />
//         </a>
//         <p className="details-description">{description}</p>
//       </div>
//     </div>;
//   };

//   const details = [
//     { link: "", imgSrc: dummyImg, description: "Home" },
//     { link: "", imgSrc: dummyImg, description: "About" },
//     { link: "", imgSrc: dummyImg, description: "Services" },
//     { link: "", imgSrc: dummyImg, description: "Trainers" },
//     { link: "", imgSrc: dummyImg, description: "Trainees Details" },
//     { link: "", imgSrc: dummyImg, description: "Product" },
//     { link: "", imgSrc: dummyImg, description: "Product Details" },
//     { link: "", imgSrc: dummyImg, description: "Contact" },
//   ];

//   return (

//     <div className="bottombody-section">
//       <div className="lowerbodyContainer">
//         {details.map((detail, index) => (
//           <GymDetails
//             key={index}
//             description={detail.description}
//             imgSrc={detail.imgSrc}
//             link={detail.link}
//           />
//         ))}
//       </div>
//     </div>

//   );

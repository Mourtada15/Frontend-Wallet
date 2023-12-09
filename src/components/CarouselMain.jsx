import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/carousel1.png";
import img2 from "../assets/carousel2.png";
import img3 from "../assets/carousel3.png";

export default function CarouselMain (){
  return (
    <div>
      <div className="container align-items-center justify-content-center">
        <div id="carouselExample" className="carousel slide"  data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* first card  */}
      
              <div className="container">
                <div className="row">
                  <div className="col-md-6 d-flex flex-column align-items-center justify-content-center ">
                    <h3 className=" card-title text-info "style={{ color: '#809baa' }} >Unlock a world of financial possibilities with PAYPlEX,
                    your all-in-one destination for secure digital transactions. Our platform merges 
                    innovation and convenience to redefine your financial experience.</h3>
                    <br></br><br></br>
                    <Link to={'/login'}><button className="btn btn-lg text-white bg-warning" type="submit">Sign In</button></Link>
                  </div>
                  <div className="col-md-6">
                    <img src={img1} className="img-fluid" alt="Image Description" width="500" height="500"/>
                  </div>
                </div>
                </div>

            {/* end of card 1 */}
            </div>
            <div className="carousel-item">
            <div className="container">
                <div className="row">
                  <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <h3 className="card-title text-info ">Experience the ease of seamless transactions with PAYPLEX. 
                    Say goodbye to the hassle of traditional banking
                     and embrace a digital solution that streamlines your payment processes. 
                    With PAYPLEX, you can send and receive funds effortlessly,
                     ensuring that your transactions are quick, reliable, and tailored to your needs.</h3>
                     <br></br><br></br>
                    <Link to={'/login'}><button className="btn btn-lg text-white bg-warning" type="submit">Sign In</button></Link>
                  </div>
                  <div className="col-md-6">
                    <img src={img2} className="img-fluid" alt="Image Description"  width="500" height="500"/>
                  </div>
                </div>
                </div>
            </div>
            <div className="carousel-item">
            <div className="container">
                <div className="row">
                  <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <h3 className="card-title text-info text-primary"> Our platform prioritizes the utmost security for your personal and financial information. 
                    Robust encryption measures and advanced security protocols ensure that your data remains confidential and protected. 
                    Trust PAYPLEX to secure your sensitive information, providing you with peace of mind for all your digital transactions.</h3>
                    <br></br><br></br>
                    <Link to={'/login'}><button className="btn btn-lg text-white bg-warning" type="submit">Sign In</button></Link>
                  </div>
                  <div className="col-md-6">
                    <img src={img3} className="img-fluid" alt="Image Description" width="500" height="500" />
                  </div>
                </div>
                </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};



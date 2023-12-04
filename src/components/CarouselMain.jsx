import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/carousel1.png";
import img2 from "../assets/carousel2.png";
import img3 from "../assets/carousel3.png";

const CarouselMain = () => {
  return (
    <div>
      <div className="container align-items-center justify-content-center">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* first card  */}
      
              <div className="container">
                <div className="row">
                  <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <h3 className="card-title text-info ">Unlock a world of financial possibilities with CoinConnect,
                    your all-in-one destination for secure digital transactions. Our platform merges 
                    innovation and convenience to redefine your financial experience.</h3>
                    
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
                    <h3 className="card-title text-info ">Unlock a world of financial possibilities with CoinConnect,
                    your all-in-one destination for secure digital transactions. Our platform merges 
                    innovation and convenience to redefine your financial experience.</h3>
                    
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
                    <h3 className="card-title text-info text-primary">Unlock a world of financial possibilities with CoinConnect,
                    your all-in-one destination for secure digital transactions. Our platform merges 
                    innovation and convenience to redefine your financial experience.</h3>
                    
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

export default CarouselMain;

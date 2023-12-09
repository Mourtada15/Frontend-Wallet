import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">

        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="">
              <img src={logo} alt="logo" width="190" height="70" />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex">
              <Link to={"/login"}>
                <button className="btn btn-outline-warning" type="submit">
                  Sign In
                </button>
              </Link>
              <Link to={"/registration"}>
              <button className="btn btn-outline-warning" type="submit">
                Register
              </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Header;

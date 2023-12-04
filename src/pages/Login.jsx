import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import imglogin from "../assets/carousel1.png";
import Footer from "../components/Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Login clicked with:", { username, password });
  };

  return (
    <>
      <Header />
      <div className="container d-flex align-items-center justify-content-center bg-secondary">
        <div className="row text-warning">
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img
              src={imglogin}
              className="img-fluid mx-auto d-block"
              alt="Image Description"
              width="700"
              height="700"
            />
          </div>
          <div className="col-md-6">
            <h2>Login </h2>
            <form>
              <div className="mb-3 ">
                <label htmlFor="InputEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                 
                />
                <div id="emailHelp" className="form-text">
                  Username{" "}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="InputPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="Check"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-lg text-white bg-warning">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;

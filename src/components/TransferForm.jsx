import React, { useState } from "react";
import imglogin from "../assets/carousel1.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { username, receiverEmail, amount });
  };

  return (
    <>
      <div className=" d-flex align-items-center  justify-content-center ">
        <div className="row-container text-warning">
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
            <div className="login-container">
            <h2>Transfer</h2>
            <br/>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="InputUsername" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputUsername"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="InputReceiverEmail" className="form-label">
                  Receiver Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="InputReceiverEmail"
                  onChange={(e) => setReceiverEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="InputAmount" className="form-label">
                  Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="InputAmount"
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-lg text-white bg-warning">
                Submit
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Login;

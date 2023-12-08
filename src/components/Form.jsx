import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";

export default function Form() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null); // Add state for error


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username: username, email: email, password: password, role: role };
    axios
      .post("http://localhost:8000/login/createUser", userData)
      .then((response) => {
        console.log(response.data);
        // Reset the form after successful registration
        setUserName("");
        setPassword("");
        setEmail("");
        setRole("");
        setError(null); // Clear any previous errors

      })
      .catch((error) => {
        console.error("There was an error!", error);
        if (error.response && error.response.status === 500) {
          // If the status code is 409 (Conflict), set the error state
          setError("Username already exists. Please choose a different one.");
        } else {
          // Handle other errors as needed
          setError("An unexpected error occurred. Please try again later.");
        }
      });
  };

  return (
    <MDBContainer fluid className="form-container">
      <MDBRow className="justify-content-left align-items-center m-5">
        <MDBCard className="custom-card">
          <MDBCardBody className="px-4">
            <h1 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h1>
            <form onSubmit={handleSubmit}>
            {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
              <MDBRow className="mb-4">
                <MDBCol md="6" lg="5">
                  <div className="mb-4">
                    <label htmlFor="form1" className="form-label custom-label">
                      UserName
                    </label>
                    <MDBInput
                      id="form1"
                      type="text"
                      size="lg"
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                      minLength={5}
                      maxLength={30}
                      
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-4">
                <MDBCol md="6" lg="5">
                  <div className="mb-4">
                    <label htmlFor="form4" className="form-label custom-label">
                      Email
                    </label>
                    <MDBInput
                      id="form4"
                      type="email"
                      size="lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      minLength={5}
                      maxLength={50}
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6" lg="5">
                  <div className="mb-4">
                    <label htmlFor="form5" className="form-label custom-label">
                      Password
                    </label>
                    <MDBInput
                      id="form5"
                      type="password"
                      size="lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-4">
                <MDBCol md="6" lg="5">
                  <div className="mb-4">
                    <label className="fw-bold custom-label">Role </label>
                    <br />
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio1"
                      value="User"
                      label="User"
                      inline
                      className="custom-radio"
                      labelClass="custom-label"
                      onChange={(e) => setRole(e.target.value)}
                      required
                      
                    />
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio2"
                      value="Merchant"
                      label="Merchant"
                      inline
                      className="custom-radio"
                      labelClass="custom-label"
                      onChange={(e) => setRole(e.target.value)}
                    />



      
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBBtn size="lg" className="button" type="submit">
                Sign up
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

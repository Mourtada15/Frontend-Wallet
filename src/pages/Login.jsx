import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import imglogin from "../assets/carousel1.png";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../app/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const {loading , error} = useSelector((state)=>state.users);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    let userCredential={username ,password}
    dispatch(loginUser(userCredential)).then((result)=>{
      if(result.payload){
        setUsername('');
        setPassword('');
        navigate('/')
      }
    })
  }

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
            <form onSubmit={handleLogin}>
              <div className="mb-3 ">
                <label htmlFor="username" className="form-label">
                 Username
                </label>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                 
                />
             
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
               
              </div>
              <button type="submit" className="btn btn-lg text-white bg-warning">
               {loading?'Loading...':'Login'}
              </button>
              {error&&(
                <div className="alert alert-danger" role="alert">{error}</div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;

import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <div className=''>
        <img src={logo} alt="logo" width="190" height="70"/>
        </div></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-warning fw-bold fs-3" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-warning fw-bold fs-3" href="#">Link</a>
        </li>
      </ul>
      <div className="d-flex" >
        <Link to={'./login'}><button className="btn btn-outline-warning" type="submit">Sign In</button></Link>
       <Link to={'/registration'}><button className="btn btn-outline-warning" type="submit">Register</button></Link> 
      </div>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Header

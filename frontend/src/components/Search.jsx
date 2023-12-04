import React from "react";
import { MDBCol} from "mdbreact";


export default function Search () {
  return (
    <MDBCol md="6" className="search-page">
      <form className="form-inline mt-4 mb-4">
    
   
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search by username or email"
          aria-label="Search"
        /> 
      
        <i class="fa fa-bell notification" aria-hidden="true"></i>
      </form>
  
    </MDBCol>
  );
}



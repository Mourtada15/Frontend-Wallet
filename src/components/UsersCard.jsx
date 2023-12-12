import { React, useState, useEffect } from "react";
import axios from "axios";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdb-react-ui-kit"; 

export default function Cards({usernumber, merchantnumber,adminnumber }) {


  return (

    <div className="the-card-container d-flex justify-content-center align-items-center">
          <div className="col ">
      <div className="row  ">
      <MDBCard className="the-card">
        <MDBCardBody className="the-cards-body">
          <MDBCardTitle className="the-card-titles">
            <i className="fas fa-users"></i> Users
          </MDBCardTitle >
          <MDBCardText className="the-cards-text">{usernumber}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className="the-card">
        <MDBCardBody className="the-cards-body">
          <MDBCardTitle className="the-card-titles">
            <i className="fas fa-users"></i> Merchants
          </MDBCardTitle >
          <MDBCardText className="the-cards-text">{merchantnumber}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className="the-card">
        <MDBCardBody className="the-cards-body">
          <MDBCardTitle className="the-card-titles">
            <i className="fas fa-users"></i> Admins
          </MDBCardTitle >
          <MDBCardText className="the-cards-text">{adminnumber}</MDBCardText>
        </MDBCardBody>
      </MDBCard>

    </div>
    </div>
    </div>
  );
}

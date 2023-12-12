
import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdb-react-ui-kit"; 

export default function Cards({Username, balanceusd , balanceusdT}) {
  return (

    <div className="the-card-container">
       <div className="col">
      <div className="row">
       
      <MDBCard className="the-card">
        <MDBCardBody className="the-cards-body">
          <MDBCardTitle className="the-card-titles">
            <i className="fas fa-users"></i> UserName
          </MDBCardTitle >
          <MDBCardText className="the-cards-text">{Username}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className="the-card">
        <MDBCardBody className="the-cards-body">
          <MDBCardTitle className="the-card-titles">
            <i className="fas fa-users"></i> USD
          </MDBCardTitle >
          <MDBCardText className="the-cards-text">{balanceusd}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className="the-card">
        <MDBCardBody className="the-cards-body">
          <MDBCardTitle className="the-card-titles">
            <i className="fas fa-users"></i>USDT
          </MDBCardTitle >
          <MDBCardText className="the-cards-text">{balanceusdT}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </div>
      </div>
    </div>
  
  );
}


import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdb-react-ui-kit"; 

export default function Cards() {
  return (

    <div className="the-card-container">
      <MDBCard className="the-card">
        <MDBCardBody className="the-cards-body">
          <MDBCardTitle className="the-card-titles">
            <i className="fas fa-users"></i> Users
          </MDBCardTitle >
          <MDBCardText className="the-cards-text">12,451</MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className="the-card">
        <MDBCardBody className="the-cards-body">
          <MDBCardTitle className="the-card-titles">
            <i className="fas fa-users"></i> Merchants
          </MDBCardTitle >
          <MDBCardText className="the-cards-text">2,451</MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className="the-card">
        <MDBCardBody className="the-cards-body">
          <MDBCardTitle className="the-card-titles">
            <i className="fas fa-users"></i> Admins
          </MDBCardTitle >
          <MDBCardText className="the-cards-text">51</MDBCardText>
        </MDBCardBody>
      </MDBCard>

    </div>
  
  );
}

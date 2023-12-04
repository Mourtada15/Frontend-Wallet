
import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdb-react-ui-kit"; 

export default function Cards() {
  return (

    <div className="card-container">
      <MDBCard className="card">
        <MDBCardBody>
          <MDBCardTitle>
            <i className="fas fa-users"></i> Users
          </MDBCardTitle>
          <MDBCardText >12,451</MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="card">
        <MDBCardBody>
          <MDBCardTitle>
            <i className="fas fa-store"></i> Merchants
          </MDBCardTitle>
          <MDBCardText>25,21</MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="card">
        <MDBCardBody>
          <MDBCardTitle>
            <i className="fas fa-user-shield"></i> Admins
          </MDBCardTitle>
          <MDBCardText>41</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  
  );
}

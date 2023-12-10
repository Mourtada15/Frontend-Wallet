import { React, useState, useEffect } from "react";
import axios from "axios";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdb-react-ui-kit"; 

export default function Cards() {
  //user info
  // const [userNumber, setUserNumber] = useState(null)

  // //merchant info
  // const [merchantNumber, setMerchantNumber] = useState(null)

  // //admin
  // const [adminsNumber, setAdminsNumber] = useState(null)

  // useEffect(() => {
  
  //   axios.get('/user/users')
  //     .then(res => {
    
  //       setUserNumber(res.data.userCount);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching user data:', error.message);
  //     });

  // }, []); 

  return (

    <div className="the-card-container d-flex justify-content-center align-items-center">
          <div className="col ">
      <div className="row  ">
      <MDBCard className="the-card">
        <MDBCardBody className="the-cards-body">
          <MDBCardTitle className="the-card-titles">
            <i className="fas fa-users"></i> Users
          </MDBCardTitle >
          <MDBCardText className="the-cards-text">1,244</MDBCardText>
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
    </div>
    </div>
  );
}

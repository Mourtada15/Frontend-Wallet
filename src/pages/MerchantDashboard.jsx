import React from 'react';
import Header from "../components/Header";
import MerchantSidebar from "../components/MerchantSidebar";
import Merchanttransaction from "../components/Merchanttransaction";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MerchantDashboard = () => {
  return (
    <>
      <Header/>
      <Container fluid>
        <Row>
          <Col md={3}>
            <MerchantSidebar/>
          </Col>
          <Col md={9}>
            <Merchanttransaction/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MerchantDashboard;
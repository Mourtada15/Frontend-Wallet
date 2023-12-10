import React from "react";
import UserSidebar from "../components/UserSidebar";
import Notification from "../components/Notification";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import UserTransactionTable from "../components/UserTransactionTable";
import { Form, Button } from 'react-bootstrap';



export default function UserDashboard() {

  const userId = localStorage.getItem('userId');
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/users/${userId}`);
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
   
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    sender_id: userId,
    receiver_id: '',
    amountType: '',
    amount: '',
    promotion_id: '',
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/transaction/addTransaction', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="user" md='12'>
    <UserSidebar /> 

    <div className="user-container">
      <Notification/>

      <Form onSubmit={handleSubmit}>
      

        <Form.Group className="mb-3">
          <Form.Label>Receiver ID</Form.Label>
          <Form.Control type="number" name="receiver_id" onChange={handleChange} />
        </Form.Group>


        <Form.Group className="mb-3">
  <Form.Label>Amount Type</Form.Label>
  <Form.Check 
    type="radio"
    label="USD"
    name="amountType"
    value="USD"
    onChange={handleChange}
  />
  <Form.Check 
    type="radio"
    label="USDT"
    name="amountType"
    value="USDT"
    onChange={handleChange}
  />
</Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" step="0.01" name="amount" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Promotion ID (optional)</Form.Label>
          <Form.Control type="number" name="promotion_id" onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Transaction
        </Button>
      </Form>

      <UserTransactionTable />
    </div>
  </div>
);
}

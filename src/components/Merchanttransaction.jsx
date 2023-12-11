import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Merchanttransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/transaction/user/${userId}`);
        setTransactions(response.data);
        console.log(response.data)
      } catch (err) {
        console.error(err);
      }
    };

    fetchTransactions();
  }, [userId]);

  const handleApprove = async (transactionId) => {
    try {
      const response = await axios.post(`http://localhost:8000/transaction/approve/${transactionId}`);
      console.log(response.data);
      setTransactions(transactions.map(transaction => 
        transaction.id === transactionId ? {...transaction, status: 'approved'} : transaction
      ));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDecline = async (transactionId) => {
    try {
      const response = await axios.post(`http://localhost:8000/transaction/decline/${transactionId}`);
      console.log(response.data);
      setTransactions(transactions.map(transaction => 
        transaction.id === transactionId ? {...transaction, status: 'declined'} : transaction
      ));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sender</th>
          <th>Amount-Type</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.sender}</td>
            <td>{transaction.amountType}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.date}</td>
            <td style={{ 
              backgroundColor: transaction.status === 'approved' ? 'green' : 'red', 
              color: 'white' 
            }}>
              {transaction.status}
            </td>
            <td>
              <Button variant="success" onClick={() => handleApprove(transaction.id)}>Approve</Button>
              <Button variant="danger" className="ml-2" onClick={() => handleDecline(transaction.id)}>Decline</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Merchanttransaction;
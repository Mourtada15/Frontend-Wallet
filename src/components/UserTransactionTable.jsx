import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function UserTable() {
  const userId = localStorage.getItem('userId');
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/transaction/users/${userId}`);
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);




  return (
  
      <table className="the-table">
        <thead className="the-thead-dark">
          <tr className="the-dark">
            <th scope="col">id</th>
            <th scope="col">Sender</th>
            <th scope="col">Amount-Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
        <tbody>
  {userData && userData.map(transaction => {
    return (
      <tr key={transaction.id}>
        <th scope="row">1</th>
        <td>{transaction.id}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.amountType}</td>
        <td>{transaction.date}</td>
      </tr>
    );
  })}
</tbody>

          
          
          
   
        </tbody>
      </table>
  
  );
}

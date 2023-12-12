import React, { useState, useEffect } from "react";
import Notification from "../components/Notification";
import CardTransaction from "../components/CardTransaction";
import axios from "axios";
import { useFetcher } from "react-router-dom";
import { useSelector } from "react-redux";
import UserBar from '../components/UserSidebar';

export default function Transaction() {
 

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



  return (
    <div className="transfer">
      <UserBar />
      <div className="transfer-container">
        <Notification />
        
      
        {userData && (
      <CardTransaction Username={userData.username} balanceusd={userData.balance_usd} balanceusdT={userData.balance_usdt} />
        )}
      </div>
    </div>
  );
}

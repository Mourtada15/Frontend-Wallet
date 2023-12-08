import React, { useState, useEffect } from "react";
import Notification from "../components/Notification";
import CardTransaction from "../components/CardTransaction";
import axios from "axios";
import { useFetcher } from "react-router-dom";

export default function Transaction() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/users/3`);
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
      <div className="transfer-container">
        <Notification />
        
      
        {userData && (
      <CardTransaction Username={userData.username} balanceusd={userData.balance_usd} balanceusdT={userData.balance_usdt} />
        )}
      </div>
    </div>
  );
}

import React from "react";
import UserSidebar from "../components/UserSidebar";
import Button from "../components/Buttons";
import Notification from "../components/Notification";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";



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


  return (

    <div className="user" md='12'>
      <UserSidebar /> 


      <div className="user-container">
        <Notification/>
    <Button/>

      </div>
    </div>
  );
}

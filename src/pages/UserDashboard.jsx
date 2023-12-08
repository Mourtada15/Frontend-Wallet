import React from "react";
import UserSidebar from "../components/UserSidebar";
import Button from "../components/Buttons";
import Notification from "../components/Notification";
export default function UserDashboard() {
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

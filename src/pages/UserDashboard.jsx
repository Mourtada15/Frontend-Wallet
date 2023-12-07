import React from "react";
import UserSidebar from "../components/UserSidebar";
import Button from "../components/Buttons";
export default function UserDashboard() {
  return (
    <div className="user" md='12'>
      <UserSidebar /> 

      <div className="User-container">
    <Button/>
      </div>
    </div>
  );
}

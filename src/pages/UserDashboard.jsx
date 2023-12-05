import React from "react";
import Sidebar from "../components/Sidebar";
import Button from "../components/Buttons";
export default function UserDashboard() {
  return (
    <div className="user" md='12'>
      <Sidebar /> 

      <div className="User-container">
    <Button/>
      </div>
    </div>
  );
}

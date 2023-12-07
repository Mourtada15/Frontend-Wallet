import React from "react";
import Sidebar from "../components/Sidebar";
import Button from "../components/Buttons";
export default function UserDashboard() {
  return (
    <div className="userdash" md='12'>
      <Sidebar /> 

      <div className="User-container">
    <Button/>
      </div>
    </div>
  );
}

import React from "react";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import UserCard from "../components/UsersCard";
import UserTable from "../components/UserTable";
import Notification from "../components/Notification";
export default function AdminDashboard() {
  return (
    <div className="admin" md='12'>
      <Sidebar /> 
   
      <div className="Admin-container">
      <Notification/>
        <Search />

        <UserCard />
        <UserTable/>
      </div>
    </div>
  );
}

import React from "react";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import UserCard from "../components/UsersCard";
import UserTable from "../components/UserTable";
export default function AdminDashboard() {
  return (
    <div className="admin" >
      <Sidebar /> 

      <div className="Admin-container">
      <i class=" notification fa fa-bell" aria-hidden="true" ></i>
        <Search />

        <UserCard />
        <UserTable/>
      </div>
    </div>
  );
}

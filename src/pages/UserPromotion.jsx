import React from "react";
import UserBar from "../components/UserSidebar";
import Search from "../components/Search";
import Table from "../components/PromotionTable";
import Notification from "../components/Notification";
export default function Transfer(){
    return(
      <div className="promotion">
        <UserBar /> 
  <div className="promotion-container">
  <Notification/>
    <Search/>
    <Table/>
  </div>
  
        </div>
    );
}

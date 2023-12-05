import React from "react";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import Table from "../components/PromotionTable";
export default function Transfer(){
    return(
      <div className="promotion">
        <Sidebar /> 
  <div className="promotion-container">
    <Search/>
    <Table/>
  </div>
  
        </div>
    );
}

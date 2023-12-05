import React from "react";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import Table from "../components/TransferTable";
export default function Transfer(){
    return(
      <div className="transfer">
        <Sidebar /> 
  
     <div className="transfer-container">
        <Search/>
        <Table/>
        
     </div>
        </div>
    );
}





import React from "react";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import Table from "../components/TransferTable";
import TransactionTable from "../components/TransactionTable";




export default function Transfer(){
    return(
      <div className="transfer">
        <Sidebar /> 
  
     <div className="wallet-container">
        <Search/>
       <TransactionTable/>
        
     </div>
        </div>
    );
}



// http://localhost:8000/promotion/addPromotion

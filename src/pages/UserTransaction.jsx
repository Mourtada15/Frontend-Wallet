import React from "react";
import UserBar from "../components/UserSidebar";
import Notification from "../components/Notification";
import CardTransaction from "../components/CardTransaction";
import UserTransactionTable from "../components/UserTransactionTable";
export default function Transaction(){
    return(
      <div className="transfer">
        <UserBar /> 
  
     <div className="transfer-container">
        <Notification/>
        <CardTransaction/>
     <UserTransactionTable/>
     </div>
        </div>
    );
}

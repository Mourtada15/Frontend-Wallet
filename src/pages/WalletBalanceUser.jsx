import React from "react";
import UserBar from "../components/UserSidebar";
import Notification from "../components/Notification";
import CardTransaction from "../components/CardTransaction";
import Chart from "../components/Chart";
export default function Transaction(){
    return(
      <div className="transfer">
        <UserBar /> 
  
     <div className="transfer-container">
        <Notification/>
        <CardTransaction/>
<Chart/>
     </div>
        </div>
    );
}

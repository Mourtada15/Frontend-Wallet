import React from "react";
import { NavLink } from "react-router-dom";
export default function Button() {
  return (
    <div className="my-3">
      {/* <button type="button" className="btn btn-primary btn-sm me-2">Deposit</button> */}
      <NavLink exact to="/moneyTransfer" activeClassName="activeClicked" >
      <button type="button" className="btn  btn-sm" style={{ marginLeft: '40px' , backgroundColor: '#ffd700', color: '#273384'}}>Transfer</button>
      </NavLink>
    </div>
  );
}

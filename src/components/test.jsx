import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/scss/bootstrap.scss"; // Import Bootstrap SASS
import "./Sidebar.scss"; // Import your custom SASS file

export default function Sidebar() {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  return (
    <div className="d-flex" style={{ height: "100vh", overflow: "scroll initial" }}>
      <div className="bg-light border-right" id="sidebar">
        <div className="sidebar-header">
          <h3>PAYPLEX</h3>
        </div>

        <div className="list-group list-group-flush">
          <NavLink exact to="/admin" activeClassName="active">
            <div className="list-group-item">Dashboard</div>
          </NavLink>
          <NavLink exact to="/transfer" activeClassName="active">
            <div className="list-group-item">Transaction</div>
          </NavLink>

          <div className="list-group-item" onClick={toggleUserDropdown}>
            <div className="d-flex justify-content-between align-items-center">
              <span>Users</span>
              <span>
                {showUserDropdown ? (
                  <i className="fas fa-chevron-up"></i>
                ) : (
                  <i className="fas fa-chevron-down"></i>
                )}
              </span>
            </div>
            {showUserDropdown && (
              <ul className="list-group list-group-flush">
                <NavLink exact to="/sub1" activeClassName="active">
                  <div className="list-group-item">user</div>
                </NavLink>
                <NavLink exact to="/sub2" activeClassName="active">
                  <div className="list-group-item">merchant</div>
                </NavLink>
                <NavLink exact to="/sub3" activeClassName="active">
                  <div className="list-group-item">admin</div>
                </NavLink>
              </ul>
            )}
          </div>

          <NavLink exact to="/promotion" activeClassName="active">
            <div className="list-group-item">Promotions</div>
          </NavLink>
        </div>

        <div className="sidebar-footer">
          <div className="p-3">log out</div>
        </div>
      </div>

      <div className="notification p-3">
        <i className="fa fa-bell" aria-hidden="true"></i>
      </div>
    </div>
  );
}

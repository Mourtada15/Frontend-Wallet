import React, { useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      
      <CDBSidebar textColor="#224FA8" backgroundColor="#ebedee">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            PAYPLEX
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/admin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" className="sidebar-menu-item">
                Dashboard
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/transfer" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table" className="sidebar-menu-item">
                Transaction
              </CDBSidebarMenuItem>
            </NavLink>
            <li>
              <div>
                <span
                  onClick={toggleUserDropdown}
                  style={{ cursor: "pointer" }}
                >
                  <CDBSidebarMenuItem
                    icon="user"
                    style={{ marginRight: "1.5rem" }}
                    className="sidebar-menu-item"
                  >
                    Users{" "}
                    {showUserDropdown ? (
                      <i className="fas fa-chevron-up"></i>
                    ) : (
                      <i className="fas fa-chevron-down"></i>
                    )}
                  </CDBSidebarMenuItem>
                </span>
                {showUserDropdown && (
                  <ul>
                    <NavLink exact to="/sub1" activeClassName="activeClicked">
                      <CDBSidebarMenuItem>user</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/sub2" activeClassName="activeClicked">
                      <CDBSidebarMenuItem>merchant</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/sub3" activeClassName="activeClicked">
                      <CDBSidebarMenuItem>admin</CDBSidebarMenuItem>
                    </NavLink>
                  </ul>
                )}
              </div>
            </li>
            {/* <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem
                icon="chart-line"
                className="sidebar-menu-item"
              >
                Transaction
              </CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink exact to="/promotion" activeClassName="activeClicked" >
              <CDBSidebarMenuItem
             icon="exclamation-circle"
                className="sidebar-menu-item"
              >
                Promotions
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            log out
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      <div className="notification">
      <i class="fa fa-bell " aria-hidden="true"></i>
        </div>
  
    </div>
  );
}

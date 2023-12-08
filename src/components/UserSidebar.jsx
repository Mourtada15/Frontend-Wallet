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
import Logo from "../assets/logo.png";
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
            <img src={Logo} width="150" height="50" />
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/user" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" className="sidebar-menu-item">
                Dashboard
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/WalletBalance" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table" className="sidebar-menu-item">
                Wallet Balance
              </CDBSidebarMenuItem>
            </NavLink>
          
            {/* <li>
              <div>
                <span
                  onClick={toggleUserDropdown}
                  style={{ cursor: "pointer" }}
                >
                  <CDBSidebarMenuItem icon="user" className="sidebar-menu-item">
                    <span style={{ marginRight: "2rem" }}>Money</span>
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
                      <CDBSidebarMenuItem>Send</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/sub2" activeClassName="activeClicked">
                      <CDBSidebarMenuItem>Received</CDBSidebarMenuItem>
                    </NavLink>
                  </ul>
                )}
              </div>
            </li> */}
      
            <NavLink
              exact
              to="/UserTransaction"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="chart-line"
                className="sidebar-menu-item"
              >
                Transaction History
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/userpromotion" activeClassName="activeClicked">
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
    </div>
  );
}

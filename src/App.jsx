import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from "./pages/Registration";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import TransferPage from "./pages/TransferPage";
import PromotionPage from"./pages/PromotionPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TableUsers from "./components/TableUsers";
import "./styles.scss";
import TableAdmin from "./components/TableAdmin";
import TransactionTable from "./components/TransactionTable";

const App =()=>{
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/registration' element={<Registration />} />
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/user" element={<UserDashboard/>}/>
        <Route path="/transfer" element={<TransferPage/>}/>
        <Route path="/promotion" element={<PromotionPage/>}/>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/tableadmin" element={<TableAdmin/>}/>
        <Route path="/tableuser" element={<TableUsers/>}/>
        <Route path="/transaction" element={<TransactionTable />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

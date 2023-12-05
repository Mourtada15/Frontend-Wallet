<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx';
import Sidebar from "./components/Sidebar.jsx";
import '../styles.scss'
import  TableAdmin  from "./components/TableAdmin.jsx";
import TableUsers from "./components/TableUsers.jsx";
import TransactionTable from "./components/TransactionTable.jsx";

function App() {
  
=======
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from "./pages/Registration";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import TransferPage from "./pages/TransferPage";
import PromotionPage from"./pages/PromotionPage";
import "./styles.scss";
>>>>>>> main

const App =()=>{
  return (
    <div className="app">
      <BrowserRouter>
<<<<<<< HEAD
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/table" element={<TableAdmin/>} />
            <Route path="/tableuser" element={<TableUsers/>} />
            <Route path="/transaction" element={<TransactionTable/>} />




            
          </Routes>
          
=======
        <Routes>
          <Route path='/registration' element={<Registration />} />
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/user" element={<UserDashboard/>}/>
        <Route path="/transfer" element={<TransferPage/>}/>
        <Route path="/promotion" element={<PromotionPage/>}/>
        </Routes>
>>>>>>> main
      </BrowserRouter>
    </div>
  );
};

export default App;

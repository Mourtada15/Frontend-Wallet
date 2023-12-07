import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import TransferPage from "./pages/TransferPage";
import PromotionPage from "./pages/PromotionPage";
import Chart from "./components/Chart";
import TransferMoney from "./pages/TransferMoney";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BarChart from "./components/BarChart";
import UserPromotion from "./pages/UserPromotion";
import UserTransaction from "./pages/UserTransaction";
import WalletBalance from "./pages/WalletBalanceUser";

import "./styles.scss";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/promotion" element={<PromotionPage />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/moneyTransfer" element={<TransferMoney />} />
          <Route path="/login" element={<Login />} />
          <Route path="/barchart" element={<BarChart />} />
          <Route path="/usertransaction" element={<UserTransaction />} />
          <Route path="/userpromotion" element={<UserPromotion />} />
          <Route path="//WalletBalance" element={<WalletBalance/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

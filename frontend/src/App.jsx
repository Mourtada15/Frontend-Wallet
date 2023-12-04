import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from "./pages/Registration";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import TransferPage from "./pages/TransferPage";

import "./styles.scss";

const App =()=>{
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/registration' element={<Registration />} />
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/user" element={<UserDashboard/>}/>
<Route path="/transfer" element={<TransferPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
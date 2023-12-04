import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from "./pages/Registration";
import AdminDashboard from "./pages/AdminDashboard";
import UserTable from "./components/UserTable";

import "./styles.scss";

const App =()=>{
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/registration' element={<Registration />} />
        <Route path="/admin" element={<AdminDashboard/>}/>
         <Route path="/table" element={<UserTable/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
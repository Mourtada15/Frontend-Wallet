import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from "./pages/Registration";

import "./styles.scss";

const App =()=>{
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/registration' element={<Registration />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
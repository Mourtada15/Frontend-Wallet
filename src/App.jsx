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
  

  return (
    <>


      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/table" element={<TableAdmin/>} />
            <Route path="/tableuser" element={<TableUsers/>} />
            <Route path="/transaction" element={<TransactionTable/>} />




            
          </Routes>
          
      </BrowserRouter>
      
      
    </>
  )
}

export default App

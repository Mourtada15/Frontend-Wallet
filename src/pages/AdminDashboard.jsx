import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import UserCard from "../components/UsersCard";
import Notification from "../components/Notification";
import TableUsers from "../components/TableUsers"
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../app/userSlice'; // import the action

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users); // get users from redux state

  const [numberOfAdmins, setNumberOfAdmins] = useState(0);
  const [numberOfMerchants, setNumberOfMerchants] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/justusers');
        dispatch(getUser(response.data));

        const adminResponse = await axios.get('http://localhost:8000/user/admins');
        setNumberOfAdmins(adminResponse.data.length);

        const merchantResponse = await axios.get('http://localhost:8000/user/merchants');
        setNumberOfMerchants(merchantResponse.data.length);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [dispatch]);

  const numberOfUsers = users.length;

  return (
    <div className="admin" md='12'>
      <Sidebar /> 
      <div className="Admin-container">
        <Notification/>
        <Search />
        <UserCard usernumber={numberOfUsers} adminnumber={numberOfAdmins} merchantnumber={numberOfMerchants} />
        <TableUsers/>
      </div>
    </div>
  );
}
// adminnumber
// merchantnumber

// http://localhost:8000/user/admins
// http://localhost:8000/user/merchants
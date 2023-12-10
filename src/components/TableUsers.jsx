import React, { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../app/userSlice';
import UpdateUser from './UpdateUser';

const TableUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/justusers');
        dispatch(getUser(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/user/users/${userId}`);
      console.log(response.data);
      const usersResponse = await axios.get('http://localhost:8000/user/justusers');
      dispatch(getUser(usersResponse.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setShowUpdateUser(true);
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Balance USD</th>
            <th>Balance USDT</th>
            <th>Email</th>
            <th>Username</th>
            <th>Status</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.balance_usd}</td>
              <td>{user.balance_usdt}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.status}</td>
              <td>{user.role}</td>
              <td>
                <button className='btn btn-sm btn-danger' onClick={() => handleDelete(user.id, 'delete')}>Delete</button>
                <button className='btn btn-sm btn-primary ml-2' onClick={() => handleUpdate(user)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showUpdateUser && <UpdateUser user={selectedUser} onHide={() => setShowUpdateUser(false)} />}
    </div>
  );
};

export default TableUsers;

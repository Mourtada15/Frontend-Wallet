import { useState } from 'react';
import axios from 'axios';

const UpdateUser = ({ user }) => {
  const [userData, setUserData] = useState({ ...user });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.patch(`http://localhost:8000/user/users/${user.id}`, userData);
        console.log(response);
      } catch (error) {
        console.error('Axios Error:', error.message);
        console.error('Response Data:', error.response?.data);
      }}

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <label className="form-label">Balance USD:</label>
        <input type="number" className="form-control" name="balance_usd" value={userData.balance_usd} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Balance USDT:</label>
        <input type="number" className="form-control" name="balance_usdt" value={userData.balance_usdt} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input type="email" className="form-control" name="email" value={userData.email} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Username:</label>
        <input type="text" className="form-control" name="username" value={userData.username} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Status:</label>
        <input type="text" className="form-control" name="status" value={userData.status} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Role:</label>
        <input type="text" className="form-control" name="role" value={userData.role} onChange={handleInputChange} />
      </div>
      <button type="submit" className="btn btn-primary">Update User</button>
    </form>
  );
};

export default UpdateUser;

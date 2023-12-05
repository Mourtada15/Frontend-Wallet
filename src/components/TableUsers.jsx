import  { useEffect , useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useDispatch , useSelector } from 'react-redux';
import { getUser } from '../app/userSlice';





const TableUsers = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    console.log(useSelector(state => state.users.users)
    )

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response = await axios.get('http://localhost:8000/user/getalluser');
                dispatch(getUser(response.data));
                return response.data
            }catch(err){
                console.log(err)
            }
        }
        fetchData();
    
    },[])


  return (
    <div>
     <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th>ID</th>
          <th>Balance USD</th>
          <th>Balance USDT</th>
          <th>Email</th>
          <th>Username </th>
          <th>Password</th>
          <th>Status</th>
          <th>Role</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {users.map(user =>{
            return(
             <tr>
             <td>{user.id}</td>
             <td>{user.balance_usd}</td>
             <td>{user.balance_usdt}</td>
             <td>{user.email}</td>
             <td>{user.username}</td>
             <td>{user.password}</td>
             <td>{user.status}</td>
             <td>{user.role}</td>
             <td>
                <button className='btn btn-sm btn-danger'>Delete</button>
                <button className='btn btn-sm btn-success'>Update</button>

             </td>

           </tr>
            )

        })}
         {/* id: user.id, 
                        balance_usd: user.balanceUsd,
                        balance_usdt : user.balanceUsdt,
                        email : user.email,
                        username : user.username,
                        password : user.password,
                        status : user.status,
                        role: user.role, */}
  
      </tbody>
    </Table>
    
    </div>
  )
}

export default TableUsers

import axios from "axios";
import { useEffect } from "react";







export default function UserTable() {

 
  useEffect(()=>{
    const fetchData=async()=>{
        try{
            const response = await axios.get(`http://localhost:8000/user/userId/${id}`);
            dispatch(getUser(response.data));
            return response.data
        }catch(err){
            console.log(err)
        }
    }
    fetchData();

},[])

  return (


    
  
      <table className="the-table">
        <thead className="the-thead-dark">
          <tr className="the-dark">
            <th scope="col">id</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Date</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Mark@gmail.com</td>
            <td>9/7/200</td>
            <td>merchant</td>
          </tr>
          
          <tr>
            <th scope="row">3</th>
            <td>Mark</td>
            <td>Mark@gmail.com</td>
            <td>9/7/2002</td>
            <td>merchant</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mark</td>
            <td>Mark@gmail.com</td>
            <td>9/7/2003</td>
            <td>merchant</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Mark</td>
            <td>Mark@gmail.com</td>
            <td>9/7/2006</td>
            <td>merchant</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Mark</td>
            <td>Mark@gmail.com</td>
            <td>9/7/2004</td>
            <td>merchant</td>
          </tr>
        </tbody>
      </table>
  
  );
}

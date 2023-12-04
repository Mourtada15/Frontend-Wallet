import React from "react";
export default function UserTable() {
  return (
  
      <table class="table">
        <thead class="thead-dark">
          <tr className="dark">
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
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Mark@gmail.com</td>
            <td>9/7/2002</td>
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

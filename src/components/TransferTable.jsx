import React from "react";
export default function UserTable() {
  return (
  
      <table className="the-table">
        <thead className="the-thead-dark">
          <tr className="the-dark">
            <th scope="col">id</th>
            <th scope="col">sender</th>
            <th scope="col">Receiver</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Amount Type</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>hadil</td>
            <td>9/7/200</td>
            <td>461$</td>
            <td>usd</td>
            <td>pending</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>hadil</td>
            <td>9/7/200</td>
            <td>461$</td>
            <td>usd</td>
            <td>pending</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mark</td>
            <td>hadil</td>
            <td>9/7/200</td>
            <td>461$</td>
            <td>usdt</td>
            <td>completed</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mark</td>
            <td>hadil</td>
            <td>9/7/200</td>
            <td>461$</td>
            <td>usdt</td>
            <td>completed</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Mark</td>
            <td>hadil</td>
            <td>9/7/200</td>
            <td>461$</td>
            <td>usd</td>
            <td>failed</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Mark</td>
            <td>hadil</td>
            <td>9/7/200</td>
            <td>461$</td>
            <td>usdt</td>
            <td>failed</td>
          </tr>
        </tbody>
      </table>
  
  );
}

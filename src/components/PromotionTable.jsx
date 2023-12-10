import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UserTable() {
  const [data, setData] = useState([]); // Initialize data as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/promotion/allPromotion');
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <table className="the-table">
      <thead className="the-thead-dark">
        <tr className="the-dark">
          <th scope="col">id</th>
          <th scope="col">User ID</th>
          <th scope="col">Promotion description</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Promotion Amount</th>
          <th scope="col">Promo code</th>
        </tr>
      </thead>
      <tbody>
        {data.map((promotion) => (
          <tr key={promotion.id}>
            <th scope="row">{promotion.id}</th>
            <td>{promotion.user_id}</td>
            <td>{promotion.promotion_description}</td>
            <td>{promotion.start_date}</td>
            <td>{promotion.end_date}</td>
            <td>{promotion.promotion_amount}</td>
            <td>{promotion.promo_code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';

export default function Chart (){
  const [data] = useState({
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Amount (USD)',
        backgroundColor: 'rgba(39, 51, 132, 0.5)',
        borderColor: 'rgb(39, 51, 132)',
        data: [1000, 1200, 800, 1000, 1300, 1100, 900, 1000, 1200, 800, 1500, 1300],
      },
      {
        label: 'Amount (USDT)',
        backgroundColor: 'rgba(128, 155, 170, 0.5)',
        borderColor: 'rgb(128, 155, 170)',
        data: [800, 1000, 600, 1200, 1100, 900, 700, 800, 1000, 600, 1200, 1100],
      },
    ],
  });

  return (
    <CDBContainer>
      <h3 className="mt-5">Amount Type</h3>
      <Line data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

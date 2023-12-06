import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  // Dummy data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [12, 19, 3, 5, 2],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: false,
      },
    ],
  };

  // Configuration options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;

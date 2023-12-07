
import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdb-react-ui-kit"; 

export default function BarChart() {
  const data = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: "Transactions",
        data: [100, 500, 600, 700, 300, 300, 400],
        backgroundColor: "#ebedee",
        borderWidth: 1,
        borderColor: "#273384",
      },
    ],
  };

  return (
    <div className="bar-chart">
      <MDBContainer>
        <Bar data={data} style={{ maxHeight: '600px' }} />
      </MDBContainer>
    </div>
  );
}


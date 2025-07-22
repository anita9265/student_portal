import React, { useEffect, useState } from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,PointElement,LineElement,ArcElement} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const DashboardWithChartJS = () => {
  const [student, setStudent] = useState(null);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("studentdata"));
    if (stored) {
      setStudent(stored);
      const subjects = stored.subject;

      const labels = Object.keys(subjects).map((sub) => sub.toUpperCase());
      const data = Object.values(subjects);

      setChartData({
        labels,
        datasets: [
          {
            label: "Marks",
            data: data,
            backgroundColor: "#007ACC",
            borderRadius: 5,

          },
        ],
      });
    }
  }, []);

  if (!student) return <p>Loading... </p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      <h3 style={{ marginTop: "30px" }}>📊 Subject-wise Marks</h3>
      <div style={{ maxWidth: "600px", marginTop: "20px" }}>
        <Doughnut 
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Marks by Subject" },
                    backgroundColor: ["#007ACC", "#FF6384", "#FFCE56", "#4BC0C0", "#9966FF"]

            },
          }}
        />
      </div>
    </div>
  );
};

export default DashboardWithChartJS;

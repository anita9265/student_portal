import React from "react";
import Calendar from "react-calendar";
import { Line, Doughnut } from "react-chartjs-2";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css"; // Make sure this contains the custom styles

const DashboardMain = ({ student, chartData, attendanceChartData, activepage }) => {
  return (
     <main className="dashboard-main bg-dark text-light p-4" style={{ minHeight: "100vh" }}>
  {/* Top Welcome Header */}
  <div className="d-flex justify-content-between align-items-center flex-wrap mb-4 p-3 rounded shadow-sm" style={{ background: "#1f1f2e", border: "1px solid #333" }}>
    <h2 className="mb-0 text-light"> Welcome to the Dashboard</h2>
    <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
      <img
        src={require("../image/user.png")}
        alt="Admin"
        style={{
          width: "40px",
          height: "40px",
          objectFit: "cover",
          borderRadius: "50%",
          border: "2px solid #05C46B",
          backgroundColor:"white"
        }}
      />
      <span className="fw-bold text-success">
        Hello, {student?.name?.split(" ")[0] || "User"}
      </span>
    </div>
  </div>

  {/* Dashboard Cards */}
  <div className="row g-4">
    <div className="col-md-3 col-sm-6">
      <div className="card text-white bg-primary shadow h-100">
        <div className="card-body">
          <h6 className="card-title">Total Subjects</h6>
          <h3 className="card-text">5</h3>
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      <div className="card text-white bg-danger shadow h-100">
        <div className="card-body">
          <h6 className="card-title">Percentage</h6>
          <h3 className="card-text">{student.percentage}%</h3>
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      <div className="card text-white bg-warning shadow h-100">
        <div className="card-body">
          <h6 className="card-title">Course</h6>
          <h3 className="card-text">{student.course}</h3>
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      <div className="card text-white bg-success shadow h-100">
        <div className="card-body">
          <h6 className="card-title">Result</h6>
          <h3 className="card-text">{student.result}</h3>
        </div>
      </div>
    </div>
  </div>

  {/* Charts Section */}
  <div className="row mt-5">
    {/* Subject-wise Chart */}
    {chartData?.datasets?.length > 0 && (
      <div className="col-md-6 mb-4">
        <div className="bg-secondary p-3 rounded shadow">
          <h4 className="text-white mb-3">📈 Subject-wise Marks</h4>
          <Line
            data={chartData}
            options={{
              plugins: {
                legend: { position: "top" },
                title: { display: true, text: "Marks by Subject" },
              },
              scales: {
                y: {
                  min: 0,
                  max: 100,
                  ticks: { stepSize: 10 },
                  title: { display: true, text: "Marks" },
                },
              },
            }}
          />
        </div>
      </div>
    )}

    {/* Attendance Chart */}
    {attendanceChartData && (
      <div className="col-md-6 mb-4">
        <div className="bg-secondary p-3 rounded shadow">
          <h4 className="text-white mb-3">📊 Attendance Summary</h4>
          <Doughnut data={attendanceChartData} />
        </div>
      </div>
    )}
  </div>

  {/* Academic Calendar */}
  <div className="bg-secondary p-3 rounded shadow mt-4">
    <h4 className="text-white mb-3">📅 Academic Calendar</h4>
    <Calendar className="calendar" />
  </div>
</main>

  );
};

export default DashboardMain;

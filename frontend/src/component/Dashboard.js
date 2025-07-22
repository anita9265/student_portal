import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import "./style.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Dashboard() {
  const [student, setStudent] = useState(null);
  const [studentResult, setStudentResult] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [attendanceChartData, setAttendanceChartData] = useState(null);
  const [subjectList, setSubjectList] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("No session found. Please login again.");
          navigate("/login");
          return;
        }
        const response = await axios.get("http://localhost:3030/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const studentData = response.data.studentdata;
        setStudent(studentData);
        setSubjectList(studentData.subjects || []);

        console.log("get student record :", student);

        //  Generate chart from `subjects` array
        if (studentData.subjects && studentData.subjects.length > 0) {
          const labels = studentData.subjects.map((sub) => sub.subjectName);
          const values = studentData.subjects.map((sub) => sub.marks);

          setChartData({
            labels,
            datasets: [
              {
                label: "Marks",
                data: values,
                backgroundColor: "rgba(0, 122, 204, 0.3)",
                borderColor: "#007ACC",
                pointBackgroundColor: "#007ACC",
                borderWidth: 2,
                fill: true,
                tension: 0.3,
              },
            ],
          });

          const resultRes = await axios.post(
            "http://localhost:3030/result",
            { email: studentData.email },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setStudentResult(resultRes.data);

          const attendanceRes = await axios.post(
            "http://localhost:3030/getchartdata",
            { email: studentData.email },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          const { present, absent } = attendanceRes.data;

          setAttendanceChartData({
            labels: ["Present", "Absent"],
            datasets: [
              {
                label: "Attendance Summary",
                data: [present, absent],
                backgroundColor: ["#457a12ff", "#801a13ff"],
                borderWidth: 0,
              },
            ],
          });
        } else {
          setChartData(null); // No data
        }
      } catch (err) {
        alert("Session expired . Please login again.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div className="content p-3">
      {/* Cards */}
      {student && studentResult && (
        <div className="row g-3 mb-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card bg-dark text-white shadow p-3 d-flex flex-row align-items-center h-100">
              <i className="bi bi-book-half fs-2 text-primary me-3"></i>
              <div>
                <p className="mb-1 fw-bold">Total Subjects</p>
                <p className="mb-0">{student.subjects.length}</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card bg-dark text-white shadow p-3 d-flex flex-row align-items-center h-100">
              <i className="bi bi-bar-chart-line-fill fs-2 text-danger me-3"></i>
              <div>
                <p className="mb-1 fw-bold">Percentage</p>
                <p className="mb-0">{studentResult.percentage}%</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card bg-dark text-white shadow p-3 d-flex flex-row align-items-center h-100">
              <i className="bi bi-mortarboard fs-2 text-warning me-3"></i>
              <div>
                <p className="mb-1 fw-bold">Course</p>
                <p className="mb-0">{student.course}</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card bg-dark text-white shadow p-3 d-flex flex-row align-items-center h-100">
              <i className="bi bi-award-fill fs-2 text-success me-3"></i>
              <div>
                <p className="mb-1 fw-bold">Result</p>
                <p className="mb-0">{studentResult.result}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Charts */}
      <div className="row g-4">
        {chartData?.datasets?.length > 0 && (
          <div className="col-lg-6">
            <div className="bg-dark text-white p-3 rounded shadow">
              <h5>Subject-wise Marks</h5>
              <Line data={chartData} />
            </div>
          </div>
        )}

        {attendanceChartData && (
          <div className="col-lg-6">
            <div
              className="bg-dark text-white py-4 px-4 rounded shadow"
              style={{ height: "310px" }}
            >
              <h5>Attendance Summary</h5>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "250px" }}
              >
                <div style={{ width: "250px", height: "250px" }}>
                  <Doughnut data={attendanceChartData} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Calendar + Subject Table */}
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="bg-dark text-white p-4 rounded shadow h-100">
            <h5>Academic Calendar</h5>
            <Calendar className="calendar" />
          </div>
        </div>

        <div className="col-md-8">
          <div className="bg-dark text-white p-4 rounded shadow h-100 overflow-auto">
            <h5>Subject Marks</h5>
            {subjectList.length > 0 ? (
              <table className="table table-dark table-striped mt-3">
                <thead>
                  <tr>
                    <th>Subject Name</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {subjectList.map((subj, index) => (
                    <tr key={index}>
                      <td>{subj.subjectName}</td>
                      <td>{subj.marks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No subjects found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

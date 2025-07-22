import React, { useState, useEffect } from "react";
import axios from "axios";

function Attandance() {
  const [student, setStudent] = useState({});
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [attendanceList, setAttendanceList] = useState([]);
  const [monthlyAttendance, setMonthlyAttendance] = useState([]);
  const [rangeMessage, setRangeMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("http://localhost:3030/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setStudent(res.data.studentdata))
      .catch((err) => {
        console.error("Profile fetch error:", err);
      });
  }, []);

  const handleDateRangeSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:3030/filterdate",
        {
          email: student.email,
          from,
          to,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setAttendanceList(res.data.data || []);
      setRangeMessage(res.data.message || "");
    } catch (err) {
      console.error("Fetch error:", err);
      setAttendanceList([]);
      setRangeMessage("No data found");
    }
  };

  const handleMonthlySubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:3030/monthlyDisplay",
        {
          email: student.email,
          month,
          year,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMonthlyAttendance(res.data.attendance || []);
      setError("");
    } catch (err) {
      console.error("Monthly fetch error:", err);
      setMonthlyAttendance([]);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container mt-5 text-white">
      {/* Date Range Section */}
      <div className="attendance-range-container bg-dark text-white p-4 rounded-4 shadow-lg mb-5">
        <h3 className="mb-4 text-success fw-bold text-center">
          View Attendance by Date Range
        </h3>

        <form
          className="d-flex flex-column flex-md-row gap-3 align-items-md-end justify-content-center"
          onSubmit={handleDateRangeSubmit}
        >
          <div>
            <label className="form-label text-light">From Date</label>
            <input
              type="date"
              className="form-control bg-dark text-white border border-secondary"
              value={from}
              max={new Date().toISOString().substring(0, 10)}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="form-label text-light">To Date</label>
            <input
              type="date"
              className="form-control bg-dark text-white border border-secondary"
              value={to}
              max={new Date().toISOString().substring(0, 10)}
              onChange={(e) => setTo(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-success px-4 py-2 fw-bold shadow-sm"
          >
            Search
          </button>
        </form>

        {rangeMessage && (
          <div className="mt-4 text-center text-success border rounded-3 p-2">
            {rangeMessage}
          </div>
        )}

        {attendanceList.length > 0 && (
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            {attendanceList.map((record, index) => (
              <div
                key={index}
                className={`p-3 rounded-3 text-center attendance-card ${
                  record.status === "present" ? "bg-success" : "bg-danger"
                } text-white`}
                style={{ minWidth: "160px", fontWeight: "bold" }}
              >
                <div>{record.date}</div>
                <div>{record.status.toUpperCase()}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Monthly Section */}
      <div className="bg-dark text-white p-4 rounded-4 shadow-lg">
        <h3 className="text-success fw-bold text-center mb-4">
          Monthly Attendance Viewer
        </h3>
        <form
          className="d-flex flex-wrap justify-content-center align-items-end gap-3"
          onSubmit={handleMonthlySubmit}
        >
          <div>
            <label className="form-label text-light">Month</label>
            <select
              className="form-select bg-dark text-white border border-secondary"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
            >
              <option value="">Select Month</option>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((m, i) => (
                <option key={i} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label text-light">Year</label>
            <select
              className="form-select bg-dark text-white border border-secondary"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            >
              <option value="">Select Year</option>
              {[2023, 2024, 2025].map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-outline-success px-4 fw-bold">
            View
          </button>
        </form>

        {/* Monthly Results */}
        {error && <div className="text-danger mt-4 text-center">{error}</div>}

        {monthlyAttendance.length > 0 && (
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            {monthlyAttendance.map((record, index) => (
              <div
                key={index}
                className={`p-3 rounded-3 text-center ${
                  record.status === "present" ? "bg-success" : "bg-danger"
                } text-white`}
                style={{ minWidth: "160px", fontWeight: "bold" }}
              >
                <div>{record.date}</div>
                <div>{record.status.toUpperCase()}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Attandance;

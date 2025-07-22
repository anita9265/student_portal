import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

function Resultstu() {
  const [student, setStudent] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login");
        return;
      }

      try {
        const res = await axios.get("http://localhost:3030/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const studentData = res.data.studentdata;
        setStudent(studentData);

        const resultRes = await axios.post(
          "http://localhost:3030/result",
          { email: studentData.email },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setResult(resultRes.data);
      } catch (err) {
        console.error("Error fetching result:", err);
        alert("Session expired");
        localStorage.removeItem("token");
      }
    };

    fetchResult();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-success mb-4">
        <i className="bi bi-graph-up-arrow me-2"></i>Student Result
      </h3>

      <div className="table-responsive">
        <table className="table table-dark table-bordered table-striped">
          <thead className="table-secondary text-dark">
            <tr>
              <th>Subject</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {student?.subjects?.length > 0 ? (
              student.subjects.map((subj, idx) => (
                <tr key={idx}>
                  <td>{subj.subjectName}</td>
                  <td>{subj.marks}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center">
                  No subjects available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {result && (
        <div className="row text-white mt-4">
          <div className="col-md-6 fw-bold">
            <p>Total: {result.total}</p>
            <p>Min Marks: {result.min}</p>
            <p>Max Marks: {result.max}</p>
          </div>
          <div className="col-md-6 fw-bold">
            <p>
              Percentage:{" "}
              <span className="text-info">{result.percentage}%</span>
            </p>
            <p>
              Result:{" "}
              <span
                className={`badge px-3 py-2 ${
                  result.result === "Pass"
                    ? "bg-success"
                    : result.result === "ATKT"
                    ? "bg-danger"
                    : "bg-secondary"
                }`}
              >
                {result.result}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Resultstu;

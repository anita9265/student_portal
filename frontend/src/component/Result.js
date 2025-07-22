import React, { useEffect, useState } from "react";
import axios from "axios";

const ResultPage = ({ student }) => {
  const [studentResult, setStudentResult] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      if (student?.email) {
        try {
          const token = localStorage.getItem("token");
          const res = await axios.post(
            "http://localhost:3030/result",
            { email: student.email },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setStudentResult(res.data);
        } catch (err) {
          console.error("Error fetching result:", err);
          alert("Failed to load result");
        }
      }
    };

    fetchResult();
  }, [student]);

  return (
    <div className="container mt-4">
      {studentResult && (
        <div className="bg-dark text-white p-4 rounded shadow">
          <h4 className="mb-4 border-bottom pb-2">
            <i className="bi bi-clipboard-data text-success me-2"></i>
            Student Result
          </h4>

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-dark table-striped table-bordered border-secondary text-center">
              <thead className="table-secondary text-dark">
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {studentResult.subjects.map((s, i) => (
                  <tr key={i}>
                    <td>{s.subjectName}</td>
                    <td>{s.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="row mt-4">
            <div className="col-md-6">
              <p>
                <strong>Total:</strong> {studentResult.total}
              </p>
              <p>
                <strong>Min Marks:</strong> {studentResult.min}
              </p>
              <p>
                <strong>Max Marks:</strong> {studentResult.max}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong>Percentage:</strong> {studentResult.percentage}%
              </p>
              <p>
                <strong>Result:</strong>{" "}
                <span
                  className={`badge px-3 py-2 text-uppercase ${
                    studentResult.result === "Pass"
                      ? "bg-success"
                      : studentResult.result === "Atkt"
                      ? "bg-warning text-dark"
                      : "bg-danger"
                  }`}
                >
                  {studentResult.result}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultPage;

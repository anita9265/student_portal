import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

function Viewallsubject() {
  const [student, setStudent] = useState({});
  const [subjects, setSubjects] = useState([]);

  const fetchSubjects = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get("http://localhost:3030/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = res.data.studentdata;
      setStudent(data);
      setSubjects(data.subjects || []);
    } catch (err) {
      console.error("Profile fetch error:", err);
      alert("Session expired");
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-info mb-4">
        <i className="bi bi-journal-text me-2"></i>All Subjects
      </h3>

      <div className="table-responsive">
        <table className="table table-dark table-bordered table-striped">
          <thead className="table-secondary text-dark">
            <tr>
              <th>No</th>
              <th>Subject Name</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {subjects.length > 0 ? (
              subjects.map((subj, index) => (
                <tr key={subj._id || index}>
                  <td>{index + 1}</td>
                  <td>{subj.subjectName}</td>
                  <td>{subj.marks}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No subjects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Viewallsubject;

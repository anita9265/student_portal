import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

function Deletesubject() {
  const [student, setStudent] = useState({});
  const [subjects, setSubjects] = useState([]);

  // Fetch student profile and subject list
  const fetchSubjects = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:3030/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setStudent(res.data.studentdata);
      setSubjects(res.data.studentdata.subjects || []);
    } catch (err) {
      console.error("Profile fetch error:", err);
      alert("Session expired");
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  // Handle subject deletion
  const handleDelete = async (subjectId) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.delete(
        `http://localhost:3030/${student.email}/${subjectId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message || "Subject deleted successfully");
      fetchSubjects();
    } catch (error) {
      alert("Error deleting subject");
      console.error("Delete error", error);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-success mb-4">
        <i className="bi bi-trash-fill me-2"></i>Delete Subjects
      </h3>

      <div className="table-responsive">
        <table className="table table-dark table-striped table-bordered">
          <thead className="table-secondary text-dark">
            <tr>
              <th>No</th>
              <th>Subject Name</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subjects.length > 0 ? (
              subjects.map((subj, index) => (
                <tr key={subj._id || index}>
                  <td>{index + 1}</td>
                  <td>{subj.subjectName}</td>
                  <td>{subj.marks}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDelete(subj._id)}
                    >
                      <i className="bi bi-trash me-1"></i> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
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

export default Deletesubject;

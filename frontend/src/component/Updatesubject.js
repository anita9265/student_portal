import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"; // Assuming dark theme styles are here

function Updatesubject() {
  const [editSubject, setEditSubject] = useState({
    subjectName: "",
    newMarks: "",
  });

  const [student, setStudent] = useState({});
  const [subjectOptions, setSubjectOptions] = useState([]);

  useEffect(() => {
    const fetchStudent = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login");
        return;
      }

      try {
        const res = await axios.get("http://localhost:3030/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setStudent(res.data.studentdata);
        setSubjectOptions(res.data.studentdata.subjects || []);
      } catch (err) {
        console.error("Profile fetch error:", err);
        alert("Session expired");
        localStorage.removeItem("token");
      }
    };

    fetchStudent();
  }, []);

  const handleUpdateMarks = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:3030/updatemarks",
        {
          email: student.email,
          subjectName: editSubject.subjectName,
          newMarks: Number(editSubject.newMarks),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert(res.data.message);
      setEditSubject({ subjectName: "", newMarks: "" });

      // Optional: Refresh subjects if needed
      const refresh = await axios.get("http://localhost:3030/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSubjectOptions(refresh.data.studentdata.subjects);
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update marks");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-success mb-4">
        Edit Subject Marks
      </h3>

      <form
        onSubmit={handleUpdateMarks}
        className="bg-dark text-white p-4 rounded shadow"
      >
        {/* Select Subject */}
        <div className="mb-3">
          <label htmlFor="subjectSelect" className="form-label">
            Select Subject
          </label>
          <select
            id="subjectSelect"
            className="form-select bg-secondary text-white border-0"
            value={editSubject.subjectName}
            onChange={(e) =>
              setEditSubject({ ...editSubject, subjectName: e.target.value })
            }
            required
          >
            <option value="">-- Select Subject --</option>
            {subjectOptions.map((sub, index) => (
              <option key={index} value={sub.subjectName}>
                {sub.subjectName}
              </option>
            ))}
          </select>
        </div>

        {/* New Marks */}
        <div className="mb-3">
          <label htmlFor="newMarks" className="form-label">
            New Marks
          </label>
          <input
            type="number"
            className="form-control bg-secondary text-white border-0"
            id="newMarks"
            value={editSubject.newMarks}
            min={0}
            max={100}
            onChange={(e) =>
              setEditSubject({ ...editSubject, newMarks: e.target.value })
            }
            required
          />
        </div>

        {/* Buttons */}
        <div className="d-flex gap-3 mt-4">
          <button type="submit" className="btn btn-success w-100">
            <i className="bi bi-check-circle me-2"></i> Update Marks
          </button>
          <button
            type="button"
            className="btn btn-outline-light w-100"
            onClick={() =>
              setEditSubject({ subjectName: "", newMarks: "" })
            }
          >
            <i className="bi bi-arrow-clockwise me-2"></i> Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Updatesubject;

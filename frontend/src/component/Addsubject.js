import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Addsubject() {
  const [student, setStudent] = useState({});
  const [singleSubject, setSingleSubject] = useState({
    subjectName: "",
    marks: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    // Fetch student data
    axios
      .get("http://localhost:3030/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setStudent(res.data.studentdata);
      })
      .catch((err) => {
        console.error("Profile fetch error:", err);
        alert("Session expired");
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  const handleSubmitSingle = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:3030/addsubject",
        {
          email: student.email,
          subjectName: singleSubject.subjectName,
          marks: Number(singleSubject.marks),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Subject added successfully");
      setSingleSubject({ subjectName: "", marks: "" });
    } catch (error) {
      console.error("Add Subject Error:", error);
      alert("Failed to add subject");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-success mb-4">Add New Subject</h2>

      <form
        onSubmit={handleSubmitSingle}
        className="bg-dark text-white p-4 rounded shadow"
      >
        {/* Student Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Student Email
          </label>
          <input
            type="email"
            className="form-control bg-secondary text-white border-0"
            id="email"
            value={student.email || ""}
            readOnly
          />
        </div>

        {/* Subject Name */}
        <div className="mb-3">
          <label htmlFor="subjectName" className="form-label">
            Subject Name
          </label>
          <input
            type="text"
            className="form-control bg-secondary text-white border-0"
            id="subjectName"
            name="subjectName"
            value={singleSubject.subjectName}
            onChange={(e) =>
              setSingleSubject({
                ...singleSubject,
                subjectName: e.target.value,
              })
            }
            required
          />
        </div>

        {/* Marks */}
        <div className="mb-3">
          <label htmlFor="marks" className="form-label">
            Marks
          </label>
          <input
            type="number"
            className="form-control bg-secondary text-white border-0"
            id="marks"
            name="marks"
            min={0}
            max={100}
            value={singleSubject.marks}
            onChange={(e) =>
              setSingleSubject({
                ...singleSubject,
                marks: e.target.value,
              })
            }
            required
          />
        </div>

        {/* Actions */}
        <div className="d-flex gap-3 mt-4">
          <button type="submit" className="btn btn-success w-100">
            <i className="bi bi-plus-circle me-2"></i> Add Subject
          </button>
          <button
            type="button"
            className="btn btn-secondary w-100"
            onClick={() => setSingleSubject({ subjectName: "", marks: "" })}
          >
            <i className="bi bi-x-circle me-2"></i> Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addsubject;

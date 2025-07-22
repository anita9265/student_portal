import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Manageaccount() {
  const [student, setStudent] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    state: "",
    dateOfBirth: "",
  });

  const [image, setImage] = useState(null); // preview image
  const [profileImage, setProfileImage] = useState(""); // existing image

  // Fetch student data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3030/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStudent(res.data.studentdata);
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
    };
    fetchProfile();
  }, []);

  // Autofill on student.email available
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `http://localhost:3030/studentemail/${student.email}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const data = res.data.data;
        setFormData({
          name: data.name,
          email: data.email,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          address: data.address,
          state: data.state,
          dateOfBirth: data.dateOfBirth?.substring(0, 10) || "",
        });
        setProfileImage(data.photo); // assuming you return photo
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    };
    if (student?.email) fetchData();
  }, [student?.email]);

  // Input handler
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Image handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // Submit
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => form.append(key, value));
      form.append("email", student.email);
      if (image) form.append("photo", image);

      const res = await axios.post("http://localhost:3030/studentmanage", form, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Profile updated successfully!");
      setImage(null);
    } catch (error) {
      console.error("Update failed:", error);
      alert("Update failed!");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-info mb-4">Manage Account</h2>

      <form
        onSubmit={handleUpdate}
        className="bg-dark text-white p-4 rounded shadow"
        encType="multipart/form-data"
      >
        
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">First Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control bg-secondary text-white border-0"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="form-control bg-secondary text-white border-0"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="form-control bg-secondary text-white border-0"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            className="form-control bg-secondary text-white border-0"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* State */}
        <div className="mb-3">
          <label htmlFor="state" className="form-label">State</label>
          <input
            type="text"
            placeholder="Enter State"
            className="form-control bg-secondary text-white border-0"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        {/* DOB */}
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control bg-secondary text-white border-0"
            id="dob"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        {/* Actions */}
        <div className="d-flex gap-3 mt-4">
          <button type="submit" className="btn btn-info w-100 fw-bold">
            <i className="bi bi-arrow-repeat me-2"></i> Update
          </button>
          <button
            type="button"
            className="btn btn-secondary w-100"
            onClick={() =>
              setFormData({
                name: "",
                email: "",
                lastName: "",
                phoneNumber: "",
                address: "",
                state: "",
                dateOfBirth: "",
              })
            }
          >
            <i className="bi bi-x-circle me-2"></i> Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Manageaccount;

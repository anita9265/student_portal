// src/components/Topbar.jsx
import React, { useEffect, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

function Topbar({ toggleSidebar }) {

    const fileInputRef = useRef(null);
  
    const defaultImage = require("../image/user.png");
    const [profileImage, setProfileImage] = useState(defaultImage);
  
    // Load image from localStorage on component mount
    useEffect(() => {
      const storedImage = localStorage.getItem("profileImage");
      if (storedImage) {
        setProfileImage(storedImage);
      }
    }, []);
  
    const handleImageClick = () => {
      fileInputRef.current.click();
    };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setProfileImage(base64Image);
        localStorage.setItem("profileImage", base64Image); // Save to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="topbar d-flex justify-content-between align-items-center p-3 bg-white shadow-sm sticky-top">
      <button className="btn btn-outline-success" onClick={toggleSidebar}>
        <i className="bi bi-list"></i>
      </button>
      <h4 className="mb-0 ms-3">Student Dashboard</h4>
      <div className="ms-auto">
        {/* <i className="bi bi-person-circle fs-4 text-primary"></i> */}
           <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              style={{ display: "none" }}
            />

            <img
              src={profileImage}
              alt="Admin"
              onClick={handleImageClick}
              style={{
                cursor: "pointer",
                width: "40px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid #05C46B",
                backgroundColor: "#44a879",
              }}
            />
        

      </div>
    </div>
  );
}

export default Topbar;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3030/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.studentdata.email) {
          setEmail(res.data.studentdata.email);
        } else {
          alert("Login expired. Please login again.");
          navigate("/login");
        }
      } catch (error) {
        alert("Session expired or error fetching profile");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post( "http://localhost:3030/changepassword",
        {
          email,
          oldpassword: oldPassword,
          newpassword: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);
      navigate("/dashboard2");
    } catch (error) {
      alert(error.response?.data?.message || "Password change failed");
      console.log(error.response?.data);
    }
  };

  return (
    // <div className="login-container">

    //     <form className="login-form" onSubmit={handleSubmit}>
          
    //     <h2 className="login-title">Change Password</h2>
    //     <input type="email" placeholder="Email" value={email} readOnly />
    //     <input type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
    //     <input type="password" placeholder="New Password"  value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required/>
    //     <input type="password"  placeholder="Confirm New Password" value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)} required/>

    //     <button type="submit">Change Password</button>

    //     <p className="register-link">
    //       Back to <a href="/dashboard">Dashboard</a>
    //     </p>
    //   </form>
    // </div>


    <div className="d-flex justify-content-center align-items-center vh-100  change_passbg" style={{backgroundColor:'#101828'}}>
  <div className="login-container p-5 " style={{ maxWidth: "420px", width: "100%" ,boxShadow:'2px 0px 9px rgba(253, 248, 248, 0.9)'}}>
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-title text-success text-center mb-4 fw-bold"> Change Password</h2>

      <input
        type="email"
        className="form-control bg-secondary text-white border-0 mb-3"
        placeholder="Email"
        value={email}
        readOnly
      />
      <input
        type="password"
        className="form-control bg-secondary text-white border-0 mb-3"
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        required
      />
      <input
        type="password"
        className="form-control bg-secondary text-white border-0 mb-3"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <input
        type="password"
        className="form-control bg-secondary text-white border-0 mb-4"
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <button type="submit" className="btn btn-success w-100 fw-bold py-2 shadow">
        Change Password
      </button>

      <p className="text-center mt-3 text-light">
         <a href="/dashboard2" className="text-decoration-none text-white"><i class="bi bi-arrow-left pe-3"></i>Back to Dashboard</a>
      </p>
    </form>
  </div>
</div>

  );
}

export default ChangePassword;

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerImage from "../image/slider2.webp";

function Register() {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const [lastName, setLastName] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [address, setAddress] = useState("");
const [state, setState] = useState("");
const [dateOfBirth, setDateOfBirth] = useState("");


  function submit(e) {
    e.preventDefault();
    console.log("name =" + name);
    console.log("email =" + email);
    console.log("password =" + password);
    console.log("conpassword =" + conpassword);

    if (password !== conpassword) {
      alert("password do not match...");
      return;
    }

   const userdata = {
  name,
  lastName,
  email,
  password,
  phoneNumber,
  address,
  state,
  dateOfBirth,
};


    axios
      .post("http://localhost:3030/register", userdata)
      .then((res) => {
        console.log("Data submitted:", res.data);
        alert("Registered successfully!");

        setname("");
        setemail("");
        setpassword("");
        setconpassword("");
        setLastName("");
setPhoneNumber("");
setAddress("");
setState("");
setDateOfBirth("");

        navigate("/login");
      })

      .catch((err) => {
        if (err.response && err.response.status === 400) {
          alert(err.response.data.message); // "User is already registered."
        } else {
          console.error("Error submitting data:", err);
          alert("Something went wrong during registration.");
        }
      });
  }

  return (
    <>
      {/* <div className="register-container">
       <form className="register-form" onSubmit={submit} >
         <h2 className="register-title">Register</h2>

        
         <input type="text" placeholder="Full Name"  value={name}  onChange={(e) => setname(e.target.value)} required />
         <input type="email" placeholder="Email Address"  value={email} onChange={(e)=>setemail(e.target.value)} required />
         <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} required />
         <input type= "password" placeholder="confirm Password" value={conpassword}  onChange={(e)=>setconpassword(e.target.value)} required />
         <button type="submit">Register</button>
         
         <p className="login-link" >
           Already have an account? <Link to="/login">Login</Link>
         </p>

       </form>
   </div>  */}
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{backgroundColor:"#101828"}}>
        <div
          className="row shadow-lg overflow-hidden w-100"
          style={{ maxWidth: "1000px" }}
        >
          {/* Left - Image and Text */}
          <div
            className="col-md-6 d-none d-md-flex flex-column justify-content-center text-white p-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${registerImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="fw-bold display-6 text-success">Join Our Student Portal</h2>
            <p className="lead text-success">
              Register now and take control of your academic journey.
            </p>
          </div>

          {/* Right - Form */}
          <div className="col-md-6 col-12  p-5 register_right">
            <div className="register-container">
              {/* <form className="register-form" onSubmit={submit}>
                <h2 className="register-title mb-4 text-center fw-bold text-success">
                  Create Account
                </h2>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
  <input
    type="text"
    className="form-control form-control-lg"
    placeholder="Last Name"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    required
  />
</div>

<div className="mb-3">
  <input1
    type="text"
    className="form-control form-control-lg"
    placeholder="Phone Number"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
    required
  />
</div>

<div className="mb-3">
  <input
    type="text"
    className="form-control form-control-lg"
    placeholder="Address"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    required
  />
</div>

<div className="mb-3">
  <input
    type="text"
    className="form-control form-control-lg"
    placeholder="State"
    value={state}
    onChange={(e) => setState(e.target.value)}
    required
  />
</div>

<div className="mb-4">
  <label className="text-white mb-1">Date of Birth</label>
  <input
    type="date"
    className="form-control form-control-lg"
    value={dateOfBirth}
    onChange={(e) => setDateOfBirth(e.target.value)}
    required
  />
</div>


                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    value={conpassword}
                    onChange={(e) => setconpassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success btn-lg w-100">
                  Register
                </button>

                <p className="text-center text-white mt-3 ">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="fw-bold "
                    style={{ color: "#05C46B" }}
                  >
                    Login
                  </Link>
                </p>
              </form> */}

<form className="register-form" onSubmit={submit}>
  <h2 className="register-title mb-4 text-center fw-bold text-success">
    Create Account
  </h2>

  <div className="row">
    <div className="mb-3 col-md-6">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="First Name"
        value={name}
        onChange={(e) => setname(e.target.value)}
        required
      />
    </div>

    <div className="mb-3 col-md-6">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
    </div>

    <div className="mb-3 col-md-6">
      <input
        type="email"
        className="form-control form-control-lg"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        required
      />
    </div>

    <div className="mb-3 col-md-6">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
    </div>

    <div className="mb-3 col-md-6">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
    </div>

    <div className="mb-3 col-md-6">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
        required
      />
    </div>

    <div className="mb-3 col-md-12">
      <label className="text-white mb-1">Date of Birth</label>
      <input
        type="date"
        className="form-control form-control-lg"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        required
      />
    </div>
    <div className="mb-3 col-md-6">
      <input
        type="password"
        className="form-control form-control-lg"
        placeholder="Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        required
      />
    </div>

    <div className="mb-4 col-md-6">
      <input
        type="password"
        className="form-control form-control-lg"
        placeholder="Confirm Password"
        value={conpassword}
        onChange={(e) => setconpassword(e.target.value)}
        required
      />
    </div>
  </div>

  <button type="submit" className="btn btn-success btn-lg w-100">
    Register
  </button>

  <p className="text-center text-white mt-3 ">
    Already have an account?{" "}
    <Link
      to="/login"
      className="fw-bold "
      style={{ color: "#05C46B" }}
    >
      Login
    </Link>
  </p>
</form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

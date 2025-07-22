import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sliderImage from '../image/slider2.webp';

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  function submit(e) {
    e.preventDefault();

    const userdata = { email, password };

      axios.post("http://localhost:3030/login", userdata)
        .then((res) => {
          alert("Login successful");
          localStorage.setItem("token", res.data.token);
          // sessionStorage.setItem("email",userdata.email);
          setemail('');
          setpassword('');
        navigate('/dashboard2');
      })
      .catch((err) => {
        alert(err.response?.data?.message || "Login failed");
      });

  }

  return (


  <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center login_bg" style={{backgroundColor:"#101828"}}>
      <div className="row w-100 login_shadow" style={{ maxWidth: '1000px' }}>
        
        {/* Left Panel - Login Form */}
        <div className="col-md-6 col-12 p-5 login_left">
          <div className="d-flex justify-content-between mb-3">
            <Link to="/" className="text-white">&larr;</Link>
            <Link to="/register" className="regi_link fw-bold">Register</Link>
          </div>

          <h2 className="fw-bold text-success text-center pb-4 fs-2">Login</h2>
          <p className=" text-white">Welcome! Please fill username and password to sign in into your account.</p>

          <form onSubmit={submit}>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Type your email"
                value={email} onChange={(e) => setemail(e.target.value)} required />
            </div>

            <div className="mb-2">
              <input type="password" className="form-control" placeholder="Type your password"
                value={password} onChange={(e) => setpassword(e.target.value)} required />
            </div>


            {/* <button type="submit" className="btn  w-100 bg-primary"  >Login Now</button> */}
          <button type="submit" className="btn w-100 text-white mt-3" style={{ backgroundColor: '#05C46B' }}>Login Now</button>

          
          </form>

          <div className="text-center mt-4 text-white">
            <p className="text-white mb-2">You can also login with:</p>
            <div>
              <i className="bi bi-facebook fs-4 mx-2"></i>
              <i className="bi bi-google fs-4 mx-2"></i>
              <i className="bi bi-twitter fs-4 mx-2"></i>
            </div>
          </div>
        </div>

        {/* Right Panel - Image and Text */}
        <div className="col-md-6 d-none d-md-flex flex-column justify-content-center text-white p-4"
          style={{
        backgroundImage: `linear-gradient(rgba(0,0,0, 0.8), rgba(0,0,0,0.8)),url(${sliderImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          <h2 className="fw-bold  text-success">Your Academic Journey Begins Now</h2>
          <p className='text-success'>Easily manage your subjects, attendance, results & more.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;

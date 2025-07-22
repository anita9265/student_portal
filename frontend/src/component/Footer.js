import React from 'react'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";


function Footer() {
  return (
    <div><footer className="bg-dark text-white pt-5  footer_fam">
  <div className="container">
    <div className="row gy-4 text-center text-md-start align-items-start">
      {/* Logo & About */}
      <div className="col-lg-3 col-md-6">
        <img
          src={require("../image/logo2.png")}
          alt="Logo"
          style={{ width: "60px", marginBottom: "15px" }}
        />
        <h2 className='fs-4'>topcodex</h2>
        <h5 className="fw-bold mb-3 fs-5">Student Management Portal</h5>
        <p className="text-light">
          Empowering education with smart solutions for students, subjects, and results.
        </p>
      </div>

      {/* Menu */}
      <div className="col-lg-3 col-md-6">
        <h5 className="fw-bold mb-4 fs-4">Quick Links</h5>
        <ul className="list-unstyled fs-6">
          <li className="mb-2 ">
            <a href="#" className="footer-link ">Dashboard</a>
          </li>
          <li className="mb-2 ">
            <a href="#" className="footer-link">Subjects</a>
          </li>
          <li className="mb-2 ">
            <a href="#" className="footer-link">Results</a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div className="col-lg-3 col-md-6">
        <h5 className="fw-bold mb-4 fs-4">Contact Us</h5>
        <p className="mb-2 fs-6"><i className="bi bi-person-fill"></i> Vala Anita</p>
        <p className="mb-2 fs-6" ><i className="bi bi-envelope-fill"></i> valaanita@example.com</p>
        <p className="mb-2 fs-6" ><i className="bi bi-geo-alt-fill"></i> Gujarat, India</p>
      </div>

      {/* Social Media */}
      <div className="col-lg-3 col-md-6">
        <h5 className="fw-bold mb-4 fs-4">Follow Us</h5>
        <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-4">
          <a href="https://facebook.com" className="text-light footer-icon"><FaFacebookSquare /></a>
          <a href="https://twitter.com" className="text-light footer-icon"><FaTwitterSquare /></a>
          <a href="https://linkedin.com" className="text-light footer-icon"><FaLinkedin /></a>
          <a href="https://github.com" className="text-light footer-icon"><FaGithub /></a>
        </div>
      </div>
    </div>

    {/* Bottom line */}
    {/* <hr className="border-light mt-4 " /> */}
   
  </div>

   <div className="text-center  bg-black  py-3  mt-5">
      © 2025 Student Dashboard | Developed by <strong>Vala Anita</strong>
    </div>
</footer>

    </div>
  )
}

export default Footer
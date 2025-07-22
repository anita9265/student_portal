import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import { useEffect } from "react";
import axios from "axios";

function Sidebar({ isSidebarCollapsed, toggleSidebar }) {
  const [isSubjectMenuOpen, setIsSubjectMenuOpen] = useState(false);
  const navigate = useNavigate();
const [student, setStudent] = useState({});

  const location = useLocation();

  const toggleSubMenu = () => setIsSubjectMenuOpen((prev) => !prev);

  const isActive = (path) => location.pathname === path;

useEffect(() => {
  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const res = await axios.get("http://localhost:3030/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStudent(res.data.studentdata);
    } catch (err) {
      alert("Session expired");
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  fetchProfile();
}, [navigate]);

const handleLinkClick = () => {
  if (window.innerWidth < 768 && !isSidebarCollapsed) {
    toggleSidebar(); // Auto-close sidebar on small screen
  }
};



   const handleLogout = () => {
    axios
      .post("http://localhost:3030/logout", { email: student.email })
      .then(() => {
        localStorage.removeItem("token");
        navigate("/"); // Redirect to homepage
      })
      .catch((err) => alert("Logout failed: " + err.message));
  };

  return (
    <div className={`sidebar bg-dark text-white ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header d-flex justify-content-between align-items-center px-3 py-2">
        {!isSidebarCollapsed && <h6 className="mb-0">Hi, {student.name}</h6>}
        <button className="btn btn-sm btn-success" onClick={toggleSidebar}>
          <i className={`bi ${isSidebarCollapsed ? "bi-chevron-right" : "bi-chevron-left"}`}></i>
        </button>
      </div>

      <div className="sidebar-menu overflow-auto px-2">
        <ul className="nav flex-column">

          {/* Dashboard */}
          <li className="nav-item mb-2">
            <Link
              onClick={handleLinkClick}

              to="/dashboard2"
              className={`nav-link d-flex align-items-center ${isActive("/dashboard2") ? "active-link" : "text-white"}`}
            >
              <i className="bi bi-house-door me-2"></i>
              Dashboard       
            </Link>


          </li>

          {/* Sub Management */}
          <li className="nav-item mb-2">
            <div
              className="nav-link text-white d-flex justify-content-between align-items-center"
              onClick={toggleSubMenu}
              style={{ cursor: "pointer" }}
            >
              <span className="d-flex align-items-center">
                <i className="bi bi-journal-text me-2"></i>
                Sub Management
              </span>
                <i className={`bi ${isSubjectMenuOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
              
            </div>

            {isSubjectMenuOpen && !isSidebarCollapsed && (
              <ul className="nav flex-column ms-4 mt-1">
                <li className="nav-item mb-1">
                 <Link


              onClick={handleLinkClick}

                          to="/subject/add"
                          className={`nav-link d-flex align-items-center ${
                            isActive("/subject/add") ? "active-link" : "text-white"
                          }`}
                        >
                          <i className="bi bi-file-plus me-2"></i> Add Subjects
                        </Link>

                </li>
                <li className="nav-item mb-1">
                  <Link
              onClick={handleLinkClick}

                    to="/subject/edit"
                    className={`nav-link d-flex align-items-center ${isActive("/subject/edit") ? "active-link" : "text-white"}`}
                  >
                    <i className="bi bi-pen me-2"></i> Edit Marks
                  </Link>
                </li>
                <li className="nav-item mb-1">
                  <Link
              onClick={handleLinkClick}

                    to="/subject/delete"
                    className={`nav-link d-flex align-items-center ${isActive("/subject/delete") ? "active-link" : "text-white"}`}
                  >
                    <i className="bi bi-trash3-fill me-2"></i> Delete Subjects
                  </Link>
                </li>
                <li className="nav-item mb-1">
                  <Link
              onClick={handleLinkClick}

                    to="/subject/view"
                    className={`nav-link d-flex align-items-center ${isActive("/subject/view") ? "active-link" : "text-white"}`}
                  >
                    <i className="bi bi-book-fill me-2"></i> View All
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Other Links */}
          <li className="nav-item mb-2">
            <Link
              onClick={handleLinkClick}

             to="/result" className={`nav-link d-flex align-items-center ${isActive("/result") ? "active-link" : "text-white"}`}>
              <i className="bi bi-graph-up-arrow me-2"></i> {!isSidebarCollapsed && "Result Report"}
            </Link>

            
          </li>

          <li className="nav-item mb-2">
            <Link
              onClick={handleLinkClick}

             to="/calendar" className={`nav-link d-flex align-items-center ${isActive("/calendar") ? "active-link" : "text-white" }`}>
              <i className="bi bi-calendar-event me-2"></i> {!isSidebarCollapsed && "Calendar"}
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              onClick={handleLinkClick}

             to="/attendance" className={`nav-link d-flex align-items-center ${isActive("/attendance") ? "active-link" :"text-white"}`}>
              <i className="bi bi-clipboard-check me-2"></i> {!isSidebarCollapsed && "Attendance"}
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              onClick={handleLinkClick}

             to="/changepassword" className={`nav-link d-flex align-items-center ${isActive("/changepassword") ? "active-link" : "text-white"}`}>
              <i className="bi bi-lock-fill me-2"></i> {!isSidebarCollapsed && "Change Password"}
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              onClick={handleLinkClick}

             to="/manageaccount" className={`nav-link d-flex align-items-center ${isActive("/manageaccount") ? "active-link" : "text-white"}`}>
              <i className="bi bi-person-gear me-2"></i> {!isSidebarCollapsed && "Manage Account"}
            </Link>
          </li>

          <li className="nav-item mb-2">
            
            <Link
              onClick={handleLinkClick}

             to="/chat" className={`nav-link d-flex align-items-center ${isActive("/chat") ? "active-link" : "text-white"}`}>
              <i className="bi bi-chat-right-dots me-2"></i> {!isSidebarCollapsed && "chat"}
            </Link>
          </li>

<li className="nav-item nav-link mb-2 sidebar-item text-danger" onClick={handleLogout} style={{ cursor: "pointer" }}>
  <i className="bi bi-box-arrow-right me-2"></i>
  {!isSidebarCollapsed && "Logout"}
</li>

        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

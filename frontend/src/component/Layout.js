// src/components/Layout.jsx
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./style.css";

function Layout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarCollapsed(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className={`dashboard-container d-flex flex-column flex-md-row`}>
  <Sidebar
    isSidebarCollapsed={isSidebarCollapsed}
    toggleSidebar={toggleSidebar}
  />

  <div className={`main-content flex-grow-1 ${isSidebarCollapsed ? 'expanded' : ''}`}>
    <Topbar toggleSidebar={toggleSidebar} />

    <div className="p-3">
      <Outlet />
    </div>
  </div>
</div>

  );
}

export default Layout;

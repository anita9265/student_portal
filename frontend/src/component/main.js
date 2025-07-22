//         <main className="dashboard-main">

  
//           Dashboard Top Header Section
//         <div
//           className="d-flex justify-content-between align-items-center flex-wrap"
//           style={{ background: "#f8f9fa", padding: "20px", borderRadius: "10px" }}
//         >
//           {/* Left: Welcome Title */}
//           <h2 className="mb-0 text-dark">Welcome to the Dashboard</h2>

//           {/* Right: Admin Icon + User Name */}
//           <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
//             <img
//               src={require("../image/user.png")}
//               alt="Admin"
//               style={{
//                 width: "40px",
//                 height: "40px",
//                 objectFit: "cover",
//                 borderRadius: "50%",
//                 border: "2px solid #007bff",
//               }}
//             />
//             <span className="fw-bold text-primary">
//               Hello, {student?.name?.split(" ")[0] || "User"}
//             </span>
//           </div>
//         </div>

//           {activepage === "home" && (
//             <>

//               <div className="stats">
//                 <div className="card blue">
//                   <p>Total Subjects</p>
//                   <h2>5</h2>
//                 </div>
//                 <div className="card red">
//                   <p>Percentage</p>
//                   <h2>{student.percentage}%</h2>
//                 </div>
//                 <div className="card orange">
//                   <p>Course</p>
//                   <h2>{student.course}</h2>
//                 </div>
//                 <div className="card green">
//                   <p>Result</p>
//                   <h2>{student.result}</h2>
//                 </div>
//               </div>

//               {/* Chart + Calendar */}
//               {/* <div style={{ display: "flex", gap: "30px", marginTop: "40px" }}>
//                 {chartData?.datasets?.length > 0 && (
//                   <div style={{ flex: 1 }}>
//                     <h3>📊 Subject-wise Marks</h3>
//                     <Line
//                       data={chartData}
//                       options={{
//                         plugins: {
//                           legend: { position: "top" },
//                           title: { display: true, text: "Marks by Subject" },
//                         },
//                         scales: {
//                           y: {
//                             min: 0,
//                             max: 100,
//                             ticks: { stepSize: 10 },
//                             title: { display: true, text: "Marks" },
//                           },
//                         },
//                       }}
//                     />
//                   </div>
//                 )}
  

//               Attendance charts
//               {attendanceChartData && (
//                 <div style={{ flex: 1  }} className="chartdata">
//                   <h3>Attendance Summary</h3>
//                   <Pie data={attendanceChartData} />
//                 </div>
//               )}

              
//               </div>
              
//                 <div style={{ flex: 1 }}>
//                   <h3> Academic Calendar</h3>
//                   <Calendar className="calendar" />
//                 </div> */}

//               {/* Chart Row (Subject Marks + Attendance Pie) */}
//               <div
//                 style={{
//                   display: "flex",
//                   gap: "30px",
//                   marginTop: "40px",
//                   flexWrap: "wrap",
//                 }}
//               >
//                 {/* Subject-wise Marks Line Chart */}
//                 {chartData?.datasets?.length > 0 && (
//                   <div
//                     style={{ flex: 1, minWidth: "300px" }}
//                     className="markchart"
//                   >
//                     <h3>Subject-wise Marks</h3>
//                     <Line
//                       data={chartData}
//                       options={{
//                         plugins: {
//                           legend: { position: "top" },
//                           title: { display: true, text: "Marks by Subject" },
//                         },
//                         scales: {
//                           y: {
//                             min: 0,
//                             max: 100,
//                             ticks: { stepSize: 10 },
//                             title: { display: true, text: "Marks" },
//                           },
//                         },
//                       }}
//                     />
//                   </div>
//                 )}

//                 {/* Attendance Pie Chart */}

//                 {attendanceChartData && (
//                   <div style={{ flex: 1 }} className="chartdata">
//                     <div>
//                       <h3> Attendance Summary</h3>
//                       <Doughnut data={attendanceChartData} />
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Calendar (Full width below the charts) */}
//               <div style={{ marginTop: "40px" }} className="cleader">
//                 <div className="cal_box">
//                   <h3> Academic Calendar</h3>
//                   <Calendar className="calendar" />
//                 </div>
//               </div>
//             </>
//           )}

//           {activepage === "subject" && subjectSubpage === "add" && (
//             <>
//             <h2>add subject</h2>
//             <div className="vertical-form">
//               <h2>Add New Subject</h2>
//               <form onSubmit={handleSubmitSingle}>
//                 <div className="form-group">
//                   <label>Student Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={student.email}
//                     readOnly
//                     className="form-input"
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Subject Name</label>
//                   <input
//                     type="text"
//                     name="subjectName"
//                     value={singleSubject.subjectName}
//                     onChange={(e) =>
//                       setSingleSubject({
//                         ...singleSubject,
//                         subjectName: e.target.value,
//                       })
//                     }
//                     className="form-input"
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Marks</label>
//                   <input
//                     type="number"
//                     name="marks"
//                     min={0}
//                     max={100}
//                     value={singleSubject.marks}
//                     onChange={(e) =>
//                       setSingleSubject({
//                         ...singleSubject,
//                         marks: e.target.value,
//                       })
//                     }
//                     className="form-input"
//                     required
//                   />
//                 </div>

//                 <div className="form-actions">
//                   <button type="submit" className="btn green">
//                     Add Subject
//                   </button>
//                   <button
//                     type="button"
//                     className="btn gray"
//                     onClick={() =>
//                       setSingleSubject({ subjectName: "", marks: "" })
//                     }
//                   >
//                     Reset
//                   </button>
//                 </div>
//               </form>
//             </div>
//             </>
//           )}

//           {activepage === "subject" && subjectSubpage === "edit" && (
//             <div className="vertical-form">
//               <h2> Edit Subject Marks</h2>
//               <form onSubmit={handleUpdateMarks}>
//                 <div className="form-group">
//                   <label>Select Subject</label>
//                   <select
//                     name="subjectName"
//                     value={editSubject.subjectName}
//                     onChange={(e) =>
//                       setEditSubject({
//                         ...editSubject,
//                         subjectName: e.target.value,
//                       })
//                     }
//                     className="form-input"
//                     required
//                   >
//                     <option value="">-- Select Subject --</option>
//                     {dropdownSubjects.map((subj, idx) => (
//                       <option key={idx} value={subj.subjectName}>
//                         {subj.subjectName}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="form-group">
//                   <label>New Marks</label>
//                   <input
//                     type="number"
//                     min="0"
//                     max="100"
//                     value={editSubject.newMarks}
//                     onChange={(e) =>
//                       setEditSubject({
//                         ...editSubject,
//                         newMarks: e.target.value,
//                       })
//                     }
//                     className="form-input"
//                     required
//                   />
//                 </div>

//                 <div className="form-actions">
//                   <button type="submit" className="btn green">
//                     Update Marks
//                   </button>
//                   <button
//                     type="button"
//                     className="btn gray"
//                     onClick={() =>
//                       setEditSubject({ subjectName: "", newMarks: "" })
//                     }
//                   >
//                     Reset
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}

//           {activepage === "subject" && subjectSubpage === "delete" && (
//             <>
//               <div className="delete_wrap">
//                 <h2 className="section-title"> Delete Subjects</h2>
//                 <div className="custom-table-container">
//                   <table className="custom-subject-table">
//                     <thead>
//                       <tr>
//                         <th>No</th>
//                         <th>Subject Name</th>
//                         <th>Marks</th>
//                         <th>Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {subjectList.length > 0 ? (
//                         subjectList.map((subject, index) => (
//                           <tr key={subject._id}>
//                             <td>{index + 1}</td>
//                             <td>{subject.subjectName}</td>
//                             <td>{subject.marks}</td>
//                             <td>
//                               <button
//                                 className="delete-btn"
//                                 onClick={() => handleDelete(subject._id)}
//                               >
//                                 Delete
//                               </button>
//                             </td>
//                           </tr>
//                         ))
//                       ) : (
//                         <tr>
//                           <td colSpan="4" className="no-data-cell">
//                             No subjects found.
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </>
//           )}

//           {activepage === "subject" && subjectSubpage === "view" && (
//             <div className="subject-list-container">
//               <h2> View All subject</h2>

//               {subjectList.length > 0 ? (
//                 <table className="subject-table">
//                   <thead>
//                     <tr>
//                       <th>Subject Name</th>
//                       <th>Marks</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {subjectList.map((subj, index) => (
//                       <tr key={index}>
//                         <td>{subj.subjectName}</td>
//                         <td>{subj.marks}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               ) : (
//                 <p>No subjects found.</p>
//               )}
//             </div>
//           )}

//           {/* ========== RESULT ========== */}

//           {activepage === "result" && studentResult && (
//             <div className="result-container">
//               <h2>Student Result</h2>

//               <table className="table table-bordered">
//                 <thead>
//                   <tr>
//                     <th>Subject</th>
//                     <th>Marks</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {studentResult.subjects.map((s, i) => (
//                     <tr key={i}>
//                       <td>{s.subjectName}</td>
//                       <td>{s.marks}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               <div className="result-summary mt-3">
//                 <p>
//                   <strong>Total:</strong> {studentResult.total}
//                 </p>
//                 <p>
//                   <strong>Min Marks:</strong> {studentResult.min}
//                 </p>
//                 <p>
//                   <strong>Max Marks:</strong> {studentResult.max}
//                 </p>
//                 <p>
//                   <strong>Percentage:</strong> {studentResult.percentage}%
//                 </p>
//                 <p>
//                   <strong>Result:</strong>
//                   <span
//                     className={`status-${studentResult.result.toLowerCase()}`}
//                   >
//                     {studentResult.result}
//                   </span>
//                 </p>
//               </div>
//             </div>
//           )}

//           {/*==========  manage account =============*/}

//           {activepage === "Menageaccount" && (
//             <div>
//               <h3>Manage Account</h3>
//             </div>
//           )}

//           {/* ========== CALENDAR ========== */}
//           {activepage === "calendar" && (
//             <>
//               <h2> Academic Calendar</h2>
//               <Calendar className="calendar" />
//             </>
//           )}

//           {/* ===========Attendance============== */}
//           {activepage === "Attendance" && (
//             <>
//               <div className="attendance-range-container">
//                 <h3 className="attendance-title">
//                   View Attendance by Date Range
//                 </h3>

//                 <form
//                   className="attendance-form-box"
//                   onSubmit={handleDateRangeSubmit}
//                 >
//                   <div className="attendance-row">
//                     <div className="attendance-field">
//                       <label>From Date</label>
//                       <input
//                         type="date"
//                         value={from}
//                         max={new Date().toISOString().substring(0, 10)}
//                         onChange={(e) => setFrom(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <div className="attendance-field">
//                       <label>To Date</label>
//                       <input
//                         type="date"
//                         value={to}
//                         max={new Date().toISOString().substring(0, 10)}
//                         onChange={(e) => setTo(e.target.value)}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <button type="submit" className="attendance-search-btn">
//                     Search Attendance
//                   </button>
//                 </form>

//                 {rangemesage && (
//                   <div className="attendance-message-box">{rangemesage}</div>
//                 )}

//                 {attendanceList.length > 0 && (
//                   <div className="attendance-box-wrapper">
//                     {attendanceList.map((record, index) => (
//                       <div
//                         className={`attendance-box ${
//                           record.status === "present" ? "present" : "absent"
//                         }`}
//                         key={index}
//                       >
//                         {record.date}
//                         <div>{record.status}</div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </>
//           )}

//           {activepage === "Attendance" && (
//             <>
//               <div className="">
//                 <h2 className="attendance-title">Monthly Attendance Viewer</h2>

//                 <div className="attendance-form-card">
//                   <form onSubmit={monthlydate} className="attendance-form">
//                     <div className="form-row-custom">
//                       <div className="form-group-custom">
//                         <label>Month</label>
//                         <input
//                           type="number"
//                           placeholder="MM"
//                           value={month}
//                           onChange={(e) => setMonth(e.target.value)}
//                           required
//                           min="1"
//                           max="12"
//                         />
//                       </div>

//                       <div className="form-group-custom">
//                         <label>Year</label>
//                         <input
//                           type="number"
//                           placeholder="YYYY"
//                           value={year}
//                           onChange={(e) => setYear(e.target.value)}
//                           required
//                         />
//                       </div>

//                       <div className="form-group-custom btn-wrapper">
//                         <button type="submit">View</button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>

//                 {/* Error message */}
//                 {error && <div className="errro_month">{error}</div>}

//                 {/* Attendance Table */}
//                 {attendance.length > 0 && (
//                   <div className="attendance-box-wrapper">
//                     {attendance.map((record, index) => (
//                       <div
//                         className={`attendance-box ${
//                           record.status === "absent"
//                             ? "absent-box"
//                             : "present-box"
//                         }`}
//                         key={index}
//                       >
//                         <p className="attendance-date">{record.date}</p>
//                         <p className="attendance-status">{record.status}</p>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </main>




// // home==========================================================================

//           {activepage === "home" && (
//             <>

//               <div className="stats">
//                 <div className="card blue">
//                   <p>Total Subjects</p>
//                   <h2>5</h2>
//                 </div>
//                 <div className="card red">
//                   <p>Percentage</p>
//                   <h2>{student.percentage}%</h2>
//                 </div>
//                 <div className="card orange">
//                   <p>Course</p>
//                   <h2>{student.course}</h2>
//                 </div>
//                 <div className="card green">
//                   <p>Result</p>
//                   <h2>{student.result}</h2>
//                 </div>
//               </div>

//               {/* Chart Row (Subject Marks + Attendance Pie) */}
//               <div
//                 style={{
//                   display: "flex",
//                   gap: "30px",
//                   marginTop: "40px",
//                   flexWrap: "wrap",
//                 }}
//               >
//                 {/* Subject-wise Marks Line Chart */}
//                 {chartData?.datasets?.length > 0 && (
//                   <div
//                     style={{ flex: 1, minWidth: "300px" }}
//                     className="markchart"
//                   >
//                     <h3>Subject-wise Marks</h3>
//                     <Line
//                       data={chartData}
//                       options={{
//                         plugins: {
//                           legend: { position: "top" },
//                           title: { display: true, text: "Marks by Subject" },
//                         },
//                         scales: {
//                           y: {
//                             min: 0,
//                             max: 100,
//                             ticks: { stepSize: 10 },
//                             title: { display: true, text: "Marks" },
//                           },
//                         },
//                       }}
//                     />
//                   </div>
//                 )}

//                 {/* Attendance Pie Chart */}

//                 {attendanceChartData && (
//                   <div style={{ flex: 1 }} className="chartdata">
//                     <div>
//                       <h3> Attendance Summary</h3>
//                       <Doughnut data={attendanceChartData} />
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Calendar (Full width below the charts) */}
//               <div style={{ marginTop: "40px" }} className="cleader">
//                 <div className="cal_box">
//                   <h3> Academic Calendar</h3>
//                   <Calendar className="calendar" />
//                 </div>
//               </div>
//             </>
//           )}



//           // aside==========================================================================================================


          
//                   <aside className="dashboard-sidebar">
//                     <div className="user-profile">
//                       <img
//                         src={require("../image/user3.jpg")}
//                         alt="User"
//                         className="profile-pic"
//                       />
          
//                       <p className="username">Hi, {student.name}</p>
//                     </div>
          
//                     <ul className="sidebar-menu">
//                       {/* DASHBOARD */}
//                       <li
//                         className={activepage === "home" ? "active" : ""}
//                         onClick={() => {
//                           setactivepage("home");
//                           setSubjectSubpage(""); // close subject submenu
//                         }}
//                       >
//                         Dashboard
//                       </li>
          
//                       {/* SUBJECT MANAGEMENT (TOGGLEABLE) */}
//                       <li
//                         className={activepage === "subject" ? "active" : ""}
//                         onClick={() => {
//                           if (activepage === "subject") {
//                             // setactivepage("home");
//                             setactivepage("");
//                           } else {
//                             setactivepage("subject");
//                           }
//                         }}
//                       >
//                         Subject Management
//                       </li>
          
//                       {/* SUBJECT SUBMENU */}
//                       {activepage === "subject" && (
//                         <ul className="sub-menu">
//                           <li
//                             className={subjectSubpage === "add" ? "active" : ""}
//                             onClick={() => setSubjectSubpage("add")}
//                           >
//                             Add Subjects
//                           </li>
//                           <li
//                             className={subjectSubpage === "edit" ? "active" : ""}
//                             onClick={() => setSubjectSubpage("edit")}
//                           >
//                             Edit Marks
//                           </li>
//                           <li
//                             className={subjectSubpage === "delete" ? "active" : ""}
//                             onClick={() => setSubjectSubpage("delete")}
//                           >
//                             Delete Subjects
//                           </li>
//                           <li
//                             className={subjectSubpage === "view" ? "active" : ""}
//                             onClick={() => setSubjectSubpage("view")}
//                           >
//                             View All Subjects
//                           </li>
//                         </ul>
//                       )}
          
//                       {/* RESULT REPORT */}
//                       <li
//                         className={activepage === "result" ? "active" : ""}
//                         onClick={() => {
//                           setactivepage("result");
//                           setSubjectSubpage(""); // collapse submenu
//                         }}
//                       >
//                         {" "}
//                         Result Report
//                       </li>
          
//                       {/* CALENDAR */}
//                       <li
//                         className={activepage === "calendar" ? "active" : ""}
//                         onClick={() => {
//                           setactivepage("calendar");
//                           setSubjectSubpage(""); // collapse submenu
//                         }}
//                       >
//                         Calendar
//                       </li>
//                       <li
//                         className={activepage === "Attendance" ? "active" : ""}
//                         onClick={() => {
//                           setactivepage("Attendance");
//                           setSubjectSubpage(""); // collapse submenu
//                         }}
//                       >
//                         Attendance
//                       </li>
          
//                       {/* change password */}
          
//                       <li>
//                         <Link to="/changepassword" className="link_change">
//                           Change Password
//                         </Link>
//                       </li>
          
//                       <li
//                         className={activepage === "Menageaccount" ? "active" : ""}
//                         onClick={() => {
//                           setactivepage("Menageaccount");
//                           setSubjectSubpage(""); // collapse submenu
//                         }}
//                       >
//                         Manageaccount
//                       </li>
          
//                       {/* LOGOUT */}
//                       <li onClick={handleLogout}>
//                         <MdLogout className="logout_i" /> Logout
//                       </li>
//                     </ul>
//                   </aside>




// // aside 2222222222222222222222222222222222222222222222
// // /*<aside className="dashboard-sidebar bg-dark text-white p-3">
//   {/* User Profile */}
//   <div className="text-center mb-4">
//     <img
//       src={require("../image/user3.jpg")}
//       alt="User"
//       className="rounded-circle mb-2"
//       style={{ width: "80px", height: "80px", objectFit: "cover", border: "3px solid #6c5ce7" }}
//     />
//     <h6 className="mb-0">Hi, {student.name}</h6>
//   </div>

//   {/* Menu */}
//   <ul className="list-unstyled sidebar-menu">
//     <li
//       className={`sidebar-item ${activepage === "home" ? "active" : ""}`}
//       onClick={() => {
//         setactivepage("home");
//         setSubjectSubpage("");
//       }}
//     >
//       <i className="bi bi-house-door me-2"></i> Dashboard
//     </li>

//     {/* Subject Management Toggle */}
//     <li
//       className={`sidebar-item d-flex justify-content-between align-items-center ${activepage === "subject" ? "active" : ""}`}
//       onClick={() => {
//         setactivepage("subject");
//         setIsSubjectMenuOpen((prev) => !prev);
//         if (!isSubjectMenuOpen) setSubjectSubpage("add");
//       }}
//     >
//       <span>
//         <i className="bi bi-journal-text me-2"></i> Subject Management
//       </span>
//       <i className={`bi ${isSubjectMenuOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
//     </li>

//     {/* Subject Submenu */}
//     {activepage === "subject" && isSubjectMenuOpen && (
//       <ul className="list-unstyled ps-3 submenu">
//         <li
//           className={subjectSubpage === "add" ? "active" : ""}
//           onClick={() => setSubjectSubpage("add")}
//         >
//           ➕ Add Subjects
//         </li>
//         <li
//           className={subjectSubpage === "edit" ? "active" : ""}
//           onClick={() => setSubjectSubpage("edit")}
//         >
//           ✏️ Edit Marks
//         </li>
//         <li
//           className={subjectSubpage === "delete" ? "active" : ""}
//           onClick={() => setSubjectSubpage("delete")}
//         >
//           ❌ Delete Subjects
//         </li>
//         <li
//           className={subjectSubpage === "view" ? "active" : ""}
//           onClick={() => setSubjectSubpage("view")}
//         >
//           📖 View All
//         </li>
//       </ul>
//     )}

//     {/* Other Menu Items */}
//     <li
//       className={`sidebar-item ${activepage === "result" ? "active" : ""}`}
//       onClick={() => {
//         setactivepage("result");
//         setSubjectSubpage("");
//       }}
//     >
//       <i className="bi bi-graph-up-arrow me-2"></i> Result Report
//     </li>

//     <li
//       className={`sidebar-item ${activepage === "calendar" ? "active" : ""}`}
//       onClick={() => {
//         setactivepage("calendar");
//         setSubjectSubpage("");
//       }}
//     >
//       <i className="bi bi-calendar-event me-2"></i> Calendar
//     </li>

//     <li
//       className={`sidebar-item ${activepage === "Attendance" ? "active" : ""}`}
//       onClick={() => {
//         setactivepage("Attendance");
//         setSubjectSubpage("");
//       }}
//     >
//       <i className="bi bi-clipboard-check me-2"></i> Attendance
//     </li>

//     <li>
//       <Link to="/changepassword" className="text-white text-decoration-none sidebar-item">
//         <i className="bi bi-lock-fill me-2"></i> Change Password
//       </Link>
//     </li>

//     <li
//       className={`sidebar-item ${activepage === "Menageaccount" ? "active" : ""}`}
//       onClick={() => {
//         setactivepage("Menageaccount");
//         setSubjectSubpage("");
//       }}
//     >
//       <i className="bi bi-person-gear me-2"></i> Manage Account
//     </li>

//     <li className="sidebar-item text-danger" onClick={handleLogout}>
//       <i className="bi bi-box-arrow-right me-2"></i> Logout
//     </li>
//   </ul>
// </aside>
//  */








// // subject nathi avta

// // Sidebar.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./Sidebar.css"; // custom styles here

// const Sidebar = ({ student, activepage, setactivepage, subjectSubpage, setSubjectSubpage, handleLogout }) => {
//   const [isSubjectMenuOpen, setIsSubjectMenuOpen] = useState(true);
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   return (
//     <aside className={`dashboard-sidebar bg-dark text-white p-3 ${isSidebarCollapsed ? "collapsed" : ""}`}>
//       {/* Toggle Button */}
//       <div className="text-center mb-4">
//         <button
//           className="btn btn-outline-light mb-2"
//           onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
//         >
//           <i className="bi bi-list"></i>
//         </button>
//         {!isSidebarCollapsed && (
//           <>
//             <img
//               src={require("../image/user3.jpg")}
//               alt="User"
//               className="rounded-circle mb-2"
//               style={{ width: "80px", height: "80px", objectFit: "cover", border: "3px solid #6c5ce7" }}
//             />
//             <h6 className="mb-0">Hi, {student.name}</h6>
//           </>
//         )}
//       </div>

//       <ul className="list-unstyled sidebar-menu">
//         <li
//           className={`sidebar-item ${activepage === "home" ? "active" : ""}`}
//           onClick={() => {
//             setactivepage("home");
//             setSubjectSubpage("");
//           }}
//         >
//           <i className="bi bi-house-door me-2"></i>
//           {!isSidebarCollapsed && <span>Dashboard</span>}
//         </li>

//         <li
//           className={`sidebar-item d-flex justify-content-between align-items-center ${
//             activepage === "subject" ? "active" : ""
//           }`}
//           onClick={() => {
//             setactivepage("subject");
//             setIsSubjectMenuOpen((prev) => !prev);
//             if (!isSubjectMenuOpen) setSubjectSubpage("add");
//           }}
//         >
//           <span>
//             <i className="bi bi-journal-text me-2"></i>
//             {!isSidebarCollapsed && "Sub Management"}
//           </span>
//           {!isSidebarCollapsed && (
//             <i
//               className={`bi ${
//                 isSubjectMenuOpen ? "bi-chevron-up" : "bi-chevron-down"
//               }`}
//             ></i>
//           )}
//         </li>

//         {activepage === "subject" && isSubjectMenuOpen && (
//           <ul
//             className={`list-unstyled ${
//               isSidebarCollapsed ? "collapsed-submenu" : "ps-3 ms-3 fs-6"
//             }`}
//           >
//             <li
//               className={subjectSubpage === "add" ? "active" : ""}
//               onClick={() => setSubjectSubpage("add")}
//             >
//               <i className="bi bi-file-plus me-2"></i>
//               {!isSidebarCollapsed && <span>Add Subjects</span>}
//             </li>
//             <li
//               className={subjectSubpage === "edit" ? "active" : ""}
//               onClick={() => setSubjectSubpage("edit")}
//             >
//               <i className="bi bi-pen me-2"></i>
//               {!isSidebarCollapsed && <span>Edit Marks</span>}
//             </li>
//             <li
//               className={subjectSubpage === "delete" ? "active" : ""}
//               onClick={() => setSubjectSubpage("delete")}
//             >
//               <i className="bi bi-trash3-fill me-2"></i>
//               {!isSidebarCollapsed && <span>Delete Subjects</span>}
//             </li>
//             <li
//               className={subjectSubpage === "view" ? "active" : ""}
//               onClick={() => setSubjectSubpage("view")}
//             >
//               <i className="bi bi-book-fill me-2"></i>
//               {!isSidebarCollapsed && <span>View All</span>}
//             </li>
//           </ul>
//         )}

//         {/* Other Static Menu Items */}
//         <li
//           className={`sidebar-item ${activepage === "result" ? "active" : ""}`}
//           onClick={() => {
//             setactivepage("result");
//             setSubjectSubpage("");
//           }}
//         >
//           <i className="bi bi-graph-up-arrow me-2"></i>
//           {!isSidebarCollapsed && <span>Result Report</span>}
//         </li>
//         <li
//           className={`sidebar-item ${activepage === "calendar" ? "active" : ""}`}
//           onClick={() => {
//             setactivepage("calendar");
//             setSubjectSubpage("");
//           }}
//         >
//           <i className="bi bi-calendar-event me-2"></i>
//           {!isSidebarCollapsed && <span>Calendar</span>}
//         </li>
//         <li
//           className={`sidebar-item ${activepage === "Attendance" ? "active" : ""}`}
//           onClick={() => {
//             setactivepage("Attendance");
//             setSubjectSubpage("");
//           }}
//         >
//           <i className="bi bi-clipboard-check me-2"></i>
//           {!isSidebarCollapsed && <span>Attendance</span>}
//         </li>

//         <li className="sidebar-item text-danger" onClick={handleLogout}>
//           <i className="bi bi-box-arrow-right me-2"></i>
//           {!isSidebarCollapsed && <span>Logout</span>}
//         </li>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;


// // 444444444444444444444444444444444444444
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./ManageAccount.css"; // Dark theme styles here

// const ManageAccount = ({ token, userEmail }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     address: "",
//     state: "",
//     dateOfBirth: "",
//     password: "",
//   });

//   // GET student data on mount
//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const res = await axios.get(`/studentemail/${userEmail}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setFormData(res.data.data);
//       } catch (error) {
//         console.error("Error fetching student:", error);
//       }
//     };
//     fetchStudent();
//   }, [userEmail, token]);

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // PUT update student data
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.put(`/studentemail/${userEmail}`, formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("Account updated successfully!");
//     } catch (error) {
//       alert("Failed to update. Try again.");
//     }
//   };

//   return (
//     <div className="manage-container">
//       <h2>Manage Account</h2>
//       <form className="manage-form" onSubmit={handleUpdate}>
//         <div className="form-group">
//           <label>First Name</label>
//           <input name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Last Name</label>
//           <input name="lastName" value={formData.lastName} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Email (read-only)</label>
//           <input name="email" value={formData.email} readOnly />
//         </div>
//         <div className="form-group">
//           <label>Phone Number</label>
//           <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input name="address" value={formData.address} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>State</label>
//           <input name="state" value={formData.state} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Date of Birth</label>
//           <input
//             type="date"
//             name="dateOfBirth"
//             value={formData.dateOfBirth?.substring(0, 10)}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input name="password" value={formData.password} onChange={handleChange} />
//         </div>
//         <button type="submit" className="update-btn">Update Account</button>
//       </form>
//     </div>
//   );
// };

// export default ManageAccount;



// // Sidebar//////////////////////////////////////////////////////////////////////
//  <aside
//           className={`dashboard-sidebar bg-dark text-white p-3 ${
//             isSidebarCollapsed ? "collapsed" : ""
//           }`}
//           style={{
//             minWidth: isSidebarCollapsed ? "60px" : "220px",
//             height: "100vh",
//             display: "flex",
//             flexDirection: "column",
//             zIndex: 1000,
//           }}
//         >
//           {/* User Profile */}
//           {!isSidebarCollapsed && (
//             <div className="text-center mb-4">
//               <h6 className="mb-0">Hi, {student.name}</h6>
//             </div>
//           )}

//           {/* Menu */}
//           <div
//             className="sidebar-scroll"
//             style={{ overflowY: "auto", paddingRight: "4px" }}
//           >
//             <ul className="list-unstyled sidebar-menu">
//               <li
//                 className={`sidebar-item ${
//                   activepage === "home" ? "active" : ""
//                 }`}
//                 onClick={() => {
//                   setactivepage("home");
//                   setSubjectSubpage("");
//                   handleMobileSidebarClose();
//                 }}
//               >
//                 <i className="bi bi-house-door "></i>
//                 {!isSidebarCollapsed && "Dashboard"}
//               </li>

//               {/* 3333333333333333333333333333333333333333333 */}
//               {/* Subject Management Parent Item */}
//               <li
//                 className={`sidebar-item d-flex justify-content-between align-items-center ${
//                   activepage === "subject" ? "active" : ""
//                 }`}
//                 onClick={() => {
//                   setactivepage("subject");

//                   // If sidebar is not collapsed, toggle submenu
//                   if (!isSidebarCollapsed) {
//                     setIsSubjectMenuOpen((prev) => {
//                       const nextState = !prev;
//                       if (nextState) setSubjectSubpage("add"); // Set default subpage
//                       return nextState;
//                     });
//                   } else {
//                     // If sidebar is collapsed, still set subject page & default subpage
//                     setSubjectSubpage("add");
//                   }
//                 }}
//               >
//                 <span>
//                   <i className="bi bi-journal-text me-2"></i>
//                   {!isSidebarCollapsed && "Sub Management"}
//                 </span>

//                 {/* Chevron Icon only when expanded */}
//                 {!isSidebarCollapsed && (
//                   <i
//                     className={`bi ${
//                       isSubjectMenuOpen ? "bi-chevron-up" : "bi-chevron-down"
//                     }`}
//                   ></i>
//                 )}
//               </li>
//               {activepage === "subject" && isSubjectMenuOpen && (
//                 <ul
//                   className={`list-unstyled ${
//                     isSidebarCollapsed ? "collapsed-submenu" : "ps-3 ms-3 fs-6"
//                   }`}
//                 >
//                   <li
//                     className={`sidebar-item d-flex align-items-center ${
//                       subjectSubpage === "add" ? "active" : ""
//                     }`}
//                     onClick={() => setSubjectSubpage("add")}
//                   >
//                     <i className="bi bi-file-plus me-2"></i>
//                     {!isSidebarCollapsed && <span>Add Subjects</span>}
//                   </li>

//                   <li
//                     className={`sidebar-item d-flex align-items-center ${
//                       subjectSubpage === "edit" ? "active" : ""
//                     }`}
//                     onClick={() => setSubjectSubpage("edit")}
//                   >
//                     <i className="bi bi-pen me-2"></i>
//                     {!isSidebarCollapsed && <span>Edit Marks</span>}
//                   </li>

//                   <li
//                     className={`sidebar-item d-flex align-items-center ${
//                       subjectSubpage === "delete" ? "active" : ""
//                     }`}
//                     onClick={() => setSubjectSubpage("delete")}
//                   >
//                     <i className="bi bi-trash3-fill me-2"></i>
//                     {!isSidebarCollapsed && <span>Delete Subjects</span>}
//                   </li>

//                   <li
//                     className={`sidebar-item d-flex align-items-center ${
//                       subjectSubpage === "view" ? "active" : ""
//                     }`}
//                     onClick={() => setSubjectSubpage("view")}
//                   >
//                     <i className="bi bi-book-fill me-2"></i>
//                     {!isSidebarCollapsed && <span>View All</span>}
//                   </li>
//                 </ul>
//               )}

//               {/* Other Menu Items */}
//               <li
//                 className={`sidebar-item ${
//                   activepage === "result" ? "active" : ""
//                 }`}
//                 onClick={() => {
//                   setactivepage("result");
//                   setSubjectSubpage("");
//                   handleMobileSidebarClose();
//                 }}
//               >
//                 <i className="bi bi-graph-up-arrow me-2"></i>
//                 {!isSidebarCollapsed && "Result Report"}
//               </li>

//               <li
//                 className={`sidebar-item ${
//                   activepage === "calendar" ? "active" : ""
//                 }`}
//                 onClick={() => {
//                   setactivepage("calendar");
//                   setSubjectSubpage("");
//                   handleMobileSidebarClose();
//                 }}
//               >
//                 <i className="bi bi-calendar-event me-2"></i>

//                 {!isSidebarCollapsed && "  Calendar"}
//               </li>

//               <li
//                 className={`sidebar-item ${
//                   activepage === "Attendance" ? "active" : ""
//                 }`}
//                 onClick={() => {
//                   setactivepage("Attendance");
//                   setSubjectSubpage("");
//                   handleMobileSidebarClose();
//                 }}
//               >
//                 <i className="bi bi-clipboard-check me-2"></i>
//                 {!isSidebarCollapsed && "  Attendance"}
//               </li>

//               <li>
//                 <Link
//                   to="/changepassword"
//                   className="text-white text-decoration-none sidebar-item"
//                 >
//                   <i className="bi bi-lock-fill me-2"></i>

//                   {!isSidebarCollapsed && "Change Password"}
//                 </Link>
//               </li>

//               <li
//                 className={`sidebar-item ${
//                   activepage === "Menageaccount" ? "active" : ""
//                 }`}
//                 onClick={() => {
//                   setactivepage("Menageaccount");
//                   setSubjectSubpage("");
//                   handleMobileSidebarClose();
//                 }}
//               >
//                 <i className="bi bi-person-gear me-2"></i>

//                 {!isSidebarCollapsed && "Manage Account"}
//               </li>

//               <li className="sidebar-item text-white">
//                 <i class="bi bi-chat-right-dots me-2"></i>

//                 {!isSidebarCollapsed && "chat"}
//               </li>
//               <li className="sidebar-item text-danger" onClick={handleLogout}>
//                 <i className="bi bi-box-arrow-right me-2"></i>

//                 {!isSidebarCollapsed && "Logout"}
//               </li>
//             </ul>
//           </div>
//         </aside>





// ==========================dashboard2 all css / html in external sidebar page==============================================

import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Doughnut, Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Dashboard from "./Dashboard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard2() {
  const [student, setStudent] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [activepage, setactivepage] = useState("home");
  const [subjectSubpage, setSubjectSubpage] = useState("add"); 
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [attendanceList, setAttendanceList] = useState([]);
  const [rangemesage, setrangemessage] = useState();

  // monthlu display
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [attendance, setAttendance] = useState([]);
  const [error, setError] = useState("");

  // add  single subject
  const [singleSubject, setSingleSubject] = useState({
    subjectName: "",
    marks: "",
  });

  // mothly data chart

  const [attendanceChartData, setAttendanceChartData] = useState(null);

  // atravtive design mate
  //
  const [isSubjectMenuOpen, setIsSubjectMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  // const [isSubjectMenuOpen, setIsSubjectMenuOpen] = useState(false);

  // result get

  const [studentResult, setStudentResult] = useState(null);

  // add subject marks

  const navigate = useNavigate();

  // edit ,deelete, view

  const [subjectList, setSubjectList] = useState([]);
  const [editSubject, setEditSubject] = useState({
    subjectName: "",
    newMarks: "",
  });
  const [dropdownSubjects, setDropdownSubjects] = useState([]);

  // manage account

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    state: "",
    dateOfBirth: "",
  });

  // ========================================================

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("No session found. Please login again.");
          navigate("/login");
          return;
        }
        const response = await axios.get("http://localhost:3030/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const studentData = response.data.studentdata;
        setStudent(studentData);
        console.log("get student record :", student);

        //  Generate chart from `subjects` array
        if (studentData.subjects && studentData.subjects.length > 0) {
          const labels = studentData.subjects.map((sub) => sub.subjectName);
          const values = studentData.subjects.map((sub) => sub.marks);

          setChartData({
            labels,
            datasets: [
              {
                label: "Marks",
                data: values,
                backgroundColor: "rgba(0, 122, 204, 0.3)",
                borderColor: "#007ACC",
                pointBackgroundColor: "#007ACC",
                borderWidth: 2,
                fill: true,
                tension: 0.3,
              },
            ],
          });
        } else {
          setChartData(null); // No data
        }
      } catch (err) {
        alert("Session expired . Please login again.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  useEffect(() => {
    const fetchAttendanceChart = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.post(
          "http://localhost:3030/getchartdata",
          { email: student.email },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const { present, absent } = res.data;

        setAttendanceChartData({
          labels: ["Present", "Absent"],
          datasets: [
            {
              label: "Attendance Summary",
              data: [present, absent],
              backgroundColor: ["#9E49F5", "#24A4DC"],
              borderWidth: 0, 
            },
          ],
        });
      } catch (err) {
        console.error("Attendance Chart Error", err);
      }
    };

    if (student) {
      fetchAttendanceChart();
    }
  }, [student]);

  // colllaps in small screen

  const handleMobileSidebarClose = () => {
    if (window.innerWidth < 768) {
      setIsSidebarCollapsed(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true); //  collapse on small screen
      }
    };

    // Run once on mount to check screen size
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // view all subject
  useEffect(() => {
    const fetchSubjectList = async () => {
      if (!student?.email) return;

      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `http://localhost:3030/getsubjects/${student.email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSubjectList(res.data); //  expect array of subjects
      } catch (err) {
        console.error("Error fetching subject list", err);
        setSubjectList([]);
      }
    };

    fetchSubjectList();
  }, [activepage, subjectSubpage, student]);

  // update marks
  const fetchSubjects = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `http://localhost:3030/getsubjects/${student.email}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSubjectList(res.data); //  expected array
      setDropdownSubjects(res.data || []); //  assumes res.data is subject array
    } catch (err) {
      console.error("Error fetching subjects", err);
    }
  };

  //  Update marks and refresh data
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

      await fetchSubjects();
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update marks");
    }
  };

  useEffect(() => {
    if (
      activepage === "subject" &&
      subjectSubpage === "edit" &&
      student?.email
    ) {
      fetchSubjects(); //  Load dropdown when page is ready
    }
  }, [activepage, subjectSubpage, student]);

  // delete subject
  useEffect(() => {
    console.log("Subjects fetched for delete page:", subjectList);
  }, [subjectList]);

  useEffect(() => {
    if (
      activepage === "subject" &&
      subjectSubpage === "delete" &&
      student?.email
    ) {
      fetchSubjects(); // 🔁 Load subjects when delete tab is opened
    }
  }, [activepage, subjectSubpage, student]);

  const handleDelete = async (subjectId) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.delete(
        `http://localhost:3030/${student.email}/${subjectId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(res.data.message || "Subject deleted successfully"); //  USE res here

      alert("Subject deleted successfully");
      fetchSubjects(); //  Refresh updated subject list
    } catch (error) {
      alert("Error deleting subject");
      console.error("Delete error", error);
    }
  };

  // Result get
  useEffect(() => {
    const fetchResult = async () => {
      if (student?.email) {
        try {
          const token = localStorage.getItem("token");
          const res = await axios.post(
            "http://localhost:3030/result",
            { email: student.email },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setStudentResult(res.data); // store result
        } catch (err) {
          console.error("Error fetching result:", err);
          alert("Failed to load result");
        }
      }
    };

    fetchResult();
  }, [student]);

  const handleLogout = () => {
    axios
      .post("http://localhost:3030/logout", { email: student.email })
      .then(() => {
        localStorage.removeItem("token");
        navigate("/"); // Redirect to homepage
      })
      .catch((err) => alert("Logout failed: " + err.message));
  };

  const handleSubmitSingle = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
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

      // Optionally clear form
      setSingleSubject({ email: "", subjectName: "", marks: "" });
    } catch (error) {
      console.error("Add Subject Error:", error);
      alert("Failed to add subject");
    }
  };

  const handleDateRangeSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:3030/filterdate",
        {
          email: student.email,
          from,
          to,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAttendanceList(res.data.data);
      setrangemessage(res.data.message);
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Fetch error:", err);
      // setRangeMessage(err.response?.data?.message || "Error fetching data");
      setAttendanceList([]);
    }
  };

  const monthlydate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:3030/monthlyDisplay",
        {
          email: student.email,
          month,
          year,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAttendance(res.data.attendance);
      console.log("attendance ", attendance);
      setError("");
    } catch (err) {
      setAttendance([]);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  // manage account

  // Autofill on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `http://localhost:3030/studentemail/${student.email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("manage account get data:", res.data);

        setFormData({
          name: res.data.data.name,
          email: res.data.data.email,
          lastName: res.data.data.lastName,
          phoneNumber: res.data.data.phoneNumber,
          address: res.data.data.address,
          state: res.data.data.state,
          dateOfBirth: res.data.data.dateOfBirth?.substring(0, 10) || "",

          // set other fields as needed
        });
        console.log("name : ", res.data.data.email);
        // assuming response has exact keys
      } catch (error) {
        console.error("Failed to load profile:", error);
      }
    };

    if (student?.email) fetchData();
  }, [student?.email]);

  // Input change handler
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Form submit handler
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const updatedFormData = {
        ...formData,
        email: student.email, // or localStorage.getItem("email")
      };
      const res = await axios.post(
        "http://localhost:3030/studentmanage",
        updatedFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Profile updated successfully!");
      setFormData({
        name: "",
        email: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        state: "",
        dateOfBirth: "",

        // set other fields as needed
      });
    } catch (error) {
      console.error("Update failed:", error);
      alert("Update failed!");
    }
  };

  // image set in icon

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

  if (!student) return <p>Loading...</p>;

  // ************************************** main part*************************************************
  return (
    <div className="dashboard-container main_bg">
      <div className="topbar d-flex align-items-center justify-content-between px-3 py-2">
        {/* Left: Logo and Toggle */}
        <div className="d-flex align-items-center">
          <img
            src={require("../image/logo.jpg")}
            alt="Logo"
            className="rounded-circle me-2"
            style={{ width: "35px", height: "35px" }}
          />
          <button
            className="btn btn-link text-white fs-3"
            onClick={() => {
              setIsSidebarCollapsed((prev) => !prev);
            }}
          >
            <i className="bi bi-list"></i> {/* ☰ icon */}
          </button>
        </div>

        {/* Right: Search and Icons */}
        <div className="d-flex align-items-center gap-3">
          <div className="search-box d-none d-md-flex align-items-center bg-white rounded px-2">
            <i className="bi bi-search text-secondary me-1"></i>
            <input
              type="text"
              placeholder="Search..."
              className="form-control border-0 shadow-none"
              style={{ background: "transparent", width: "150px" }}
            />
          </div>

          <i className="bi bi-bell text-white fs-5"></i>
          {/* <i className="bi bi-person-circle text-white fs-5"></i> */}
          <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
            {/* file type */}
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
      </div>

      {/* Body */}
      <div className="dashboard-body d-flex">
        {/* Sidebar */}

        <Sidebar
          student={student}
          activepage={activepage}
          subjectSubpage={subjectSubpage}
          setactivepage={setactivepage}
          setSubjectSubpage={setSubjectSubpage}
          handleLogout={handleLogout}
          isSidebarCollapsed={isSidebarCollapsed}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
          isSubjectMenuOpen={isSubjectMenuOpen}
          setIsSubjectMenuOpen={setIsSubjectMenuOpen}
          handleMobileSidebarClose={handleMobileSidebarClose}
        />

        <main
          className="dashboard-main main_bg flex-grow-1 p-4"
          style={{
            overflowY: "auto",
            height: "100vh",
          }}
        >
          {/* Dashboard Top Header Section */}
          <div
            className="d-flex justify-content-between align-items-center flex-wrap p-2 mb-4 "
            style={{ borderRadius: "10px", backgroundColor: "#232525" }}
          >
            {/* Left: Welcome Title */}
            <h2 className="mb-0 text-light fs-5 ">Welcome Dashboard</h2>

            {/* Right: Admin Icon + User Name */}
            <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
              <div>
                <span className="fw-bold text-success">
                  Hello, {student?.name?.split(" ")[0] || "User"}
                </span>
              </div>
            </div>
          </div>

          {/* home */}
          {activepage === "home" && (
            <>
              <div className="row g-3">
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="card bg-dark text-white shadow h-100 d-flex flex-row align-items-center p-4">
                    <i className="bi bi-book-half fs-2 text-primary me-3"></i>
                    <div className="text-left">
                      <p className="mb-1 fw-bolder">Total Subjects</p>
                      <p className="mb-0">{student.subjects.length}</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                  <div className="card bg-dark text-white shadow h-100 d-flex flex-row align-items-center p-4">
                    <i className="bi bi-bar-chart-line-fill fs-2 text-danger me-3"></i>

                    <div>
                      <p className="mb-1 fw-bolder">Percentage</p>
                      {/* <p className="mb-0">{studentResult.percentage}%</p> */}
                      {studentResult && studentResult.percentage + "%"}
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                  <div className="card bg-dark text-white shadow h-100 d-flex flex-row align-items-center p-4">
                    <i className="bi bi-mortarboard fs-2 text-warning me-3"></i>
                    <div>
                      <p className="mb-1 fw-bolder">Course</p>
                      <p className="mb-0">{student.course}</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                  <div className="card bg-dark text-white shadow h-100 d-flex flex-row align-items-center p-4">
                    <i className="bi bi-award-fill fs-2 text-success me-3"></i>
                    <div>
                      <p className="mb-1 fw-bolder">Result</p>
                      {studentResult && studentResult.result}

                      {/* <p className="mb-0">{studentResult.result}</p> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts Row */}
              <div className="row mt-1 g-4">
                {chartData?.datasets?.length > 0 && (
                  <div className="col-lg-6">
                    <div className="bg-dark text-white p-3 rounded shadow">
                      <h5> Subject-wise Marks</h5>
                      <Line
                        data={chartData}
                        options={{
                          plugins: {
                            legend: { position: "top" },
                            title: { display: true, text: "Marks by Subject" },
                          },
                          scales: {
                            y: {
                              min: 0,
                              max: 100,
                              ticks: { stepSize: 10 },
                              title: { display: true, text: "Marks" },
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                )}

                {attendanceChartData && (
                  <div className="col-lg-6">
                    <div
                      className="bg-dark text-white py-4 px-4 rounded shadow"
                      style={{ height: "310px" }}
                    >
                      <h5 className="">Attendance Summary</h5>

                      {/* Only chart centered */}
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: "250px" }}
                      >
                        <div style={{ width: "250px", height: "250px" }}>
                          <Doughnut data={attendanceChartData} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Calendar Section
              <div className="mt-5 bg-dark text-white p-4 rounded shadow">
                <h5> Academic Calendar</h5>
                <Calendar className="calendar" />
              </div> */}

              <div className="row mt-3">
                {/* Calendar Section (Left Side) */}

                <div className="col-md-4">
                  <div className="bg-dark text-white p-4 rounded shadow h-100">
                    <h5> Academic Calendar</h5>
                    <Calendar className="calendar" />
                  </div>
                </div>

                {/* Subject Table Section (Right Side) */}
                <div className="col-md-8">
                  <div className="bg-dark text-white p-4 rounded shadow h-100 overflow-auto">
                    <h5>Subject Marks</h5>
                    {subjectList.length > 0 ? (
                      <table className="table table-dark table-striped mt-3">
                        <thead>
                          <tr>
                            <th>Subject Name</th>
                            <th>Marks</th>
                          </tr>
                        </thead>
                        <tbody>
                          {subjectList.map((subj, index) => (
                            <tr key={index}>
                              <td>{subj.subjectName}</td>
                              <td>{subj.marks}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p>No subjects found.</p>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {activepage === "subject" && subjectSubpage === "add" && (
            <>
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
                      value={student.email}
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
                      onClick={() =>
                        setSingleSubject({ subjectName: "", marks: "" })
                      }
                    >
                      <i className="bi bi-x-circle me-2"></i> Reset
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}

          {activepage === "subject" && subjectSubpage === "edit" && (
            <div className="container mt-4">
              <div className="bg-dark text-white p-4 rounded shadow w-100">
                <h4 className="mb-4  pb-2 text-success">Edit Subject Marks</h4>
                <form onSubmit={handleUpdateMarks}>
                  <div className="mb-3">
                    <label className="form-label">Select Subject</label>
                    <select
                      name="subjectName"
                      value={editSubject.subjectName}
                      onChange={(e) =>
                        setEditSubject({
                          ...editSubject,
                          subjectName: e.target.value,
                        })
                      }
                      className="form-select bg-dark text-white border-secondary"
                      required
                    >
                      <option value="">-- Select Subject --</option>
                      {dropdownSubjects.map((subj, idx) => (
                        <option key={idx} value={subj.subjectName}>
                          {subj.subjectName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">New Marks</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={editSubject.newMarks}
                      onChange={(e) =>
                        setEditSubject({
                          ...editSubject,
                          newMarks: e.target.value,
                        })
                      }
                      className="form-control bg-dark text-white border-secondary"
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-between mt-4">
                    <button type="submit" className="btn btn-success">
                      <i className="bi bi-check-circle me-2"></i>Update Marks
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      onClick={() =>
                        setEditSubject({ subjectName: "", newMarks: "" })
                      }
                    >
                      <i className="bi bi-arrow-counterclockwise me-2"></i>Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activepage === "subject" && subjectSubpage === "delete" && (
            <>
              <div className="container mt-4">
                <div className="bg-dark text-white p-4 rounded shadow">
                  <h4 className="mb-4  pb-2 text-success">
                    <i className="bi bi-trash3-fill me-2 "></i>Delete Subjects
                  </h4>

                  <div className="table-responsive">
                    <table className="table table-dark table-hover table-bordered border-secondary text-center align-middle">
                      <thead className="table-secondary text-dark">
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Subject Name</th>
                          <th scope="col">Marks</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {subjectList.length > 0 ? (
                          subjectList.map((subject, index) => (
                            <tr key={subject._id}>
                              <td>{index + 1}</td>
                              <td>{subject.subjectName}</td>
                              <td>{subject.marks}</td>
                              <td>
                                <button
                                  className="btn btn-outline-danger btn-sm"
                                  onClick={() => handleDelete(subject._id)}
                                >
                                  <i className="bi bi-trash3 me-1"></i>Delete
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td
                              colSpan="4"
                              className="text-muted text-center py-3"
                            >
                              <i className="bi bi-info-circle me-2"></i>No
                              subjects found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}

          {activepage === "subject" && subjectSubpage === "view" && (
            <div className="container mt-4">
              <div className="bg-dark text-white p-4 rounded shadow">
                <h4 className="mb-4 border-bottom pb-2">
                  <i className="bi bi-book-half me-2 text-white"></i>View All
                  Subjects
                </h4>

                {subjectList.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-dark table-hover table-bordered border-secondary text-center align-middle">
                      <thead className="table-secondary text-dark">
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Subject Name</th>
                          <th scope="col">Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subjectList.map((subj, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{subj.subjectName}</td>
                            <td>{subj.marks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-muted">
                    <i className="bi bi-info-circle me-2"></i>No subjects found.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* ========== RESULT ========== */}

          {activepage === "result" && studentResult && (
            <div className="container mt-4">
              <div className="bg-dark text-white p-4 rounded shadow">
                <h4 className="mb-4 border-bottom pb-2">
                  <i className="bi bi-clipboard-data text-success me-2"></i>
                  Student Result
                </h4>

                <div className="table-responsive">
                  <table className="table table-dark table-striped table-bordered border-secondary text-center">
                    <thead className="table-secondary text-dark">
                      <tr>
                        <th>Subject</th>
                        <th>Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentResult.subjects.map((s, i) => (
                        <tr key={i}>
                          <td>{s.subjectName}</td>
                          <td>{s.marks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Summary Section */}
                <div className="row mt-4">
                  <div className="col-md-6">
                    <p>
                      <strong>Total:</strong> {studentResult.total}
                    </p>
                    <p>
                      <strong>Min Marks:</strong> {studentResult.min}
                    </p>
                    <p>
                      <strong>Max Marks:</strong> {studentResult.max}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      <strong>Percentage:</strong> {studentResult.percentage}%
                    </p>
                    <p>
                      <strong>Result:</strong>{" "}
                      <span
                        className={`badge px-3 py-2 text-uppercase ${
                          studentResult.result === "Pass"
                            ? "bg-success"
                            : studentResult.result === "Atkt"
                            ? "bg-warning text-dark"
                            : "bg-danger"
                        }`}
                      >
                        {studentResult.result}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/*==========  manage account =============*/}

          {activepage === "Menageaccount" && (
            <>
              <div className="container mt-4">
                <h2 className="text-info mb-4">Manage Account</h2>

                <form
                  onSubmit={handleUpdate}
                  className="bg-dark text-white p-4 rounded shadow"
                >
                  {/* Name */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      First Name
                    </label>
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
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Email"
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
                    <label htmlFor="phoneNumber" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter PhoneNumber"
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
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Enter address"
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
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="Enter state"
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
                    <label htmlFor="dob" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      placeholder="Enter date"
                      className="form-control bg-secondary text-white border-0"
                      id="dob"
                      name="dateOfBirth"
                      value={formData.dateOfBirth?.substring(0, 10)}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-3 mt-4">
                    <button
                      type="submit"
                      className="btn btn-info w-100 fw-bold"
                    >
                      <i className="bi bi-arrow-repeat me-2"></i>Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary w-100"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          name: "",
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
            </>
          )}


          {/* ==================================chat================================== */}

          {activepage === "chat" && (
            <>
              <h2 className="text-white mb-4"> Academic Calendar</h2>
              <Calendar className="calendar" />
            </>
          )}


          {/* ========== CALENDAR ========== */}
          {activepage === "calendar" && (
            <>
              <h2 className="text-white mb-4"> Academic Calendar</h2>
              <Calendar className="calendar" />
            </>
          )}

          {/* ===========Attendance============== */}
          {activepage === "Attendance" && (
            <>
              <div className="attendance-range-container bg-dark text-white p-4 rounded-4 shadow-lg ">
                <h3 className="mb-4 text-success fw-bold text-center">
                  View Attendance by Date Range
                </h3>

                {/* Form */}
                <form
                  className="d-flex flex-column flex-md-row gap-3 align-items-md-end justify-content-center"
                  onSubmit={handleDateRangeSubmit}
                >
                  <div>
                    <label className="form-label text-light">From Date</label>
                    <input
                      type="date"
                      className="form-control bg-dark text-white border border-secondary"
                      value={from}
                      max={new Date().toISOString().substring(0, 10)}
                      onChange={(e) => setFrom(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label text-light">To Date</label>
                    <input
                      type="date"
                      className="form-control bg-dark text-white border border-secondary"
                      value={to}
                      max={new Date().toISOString().substring(0, 10)}
                      onChange={(e) => setTo(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-outline-success px-4 py-2 fw-bold shadow-sm"
                  >
                    Search
                  </button>
                </form>

                {/* Message */}
                {rangemesage && (
                  <div className=" mt-4 text-center text-success border border-bottom rounded-3">
                    {rangemesage}
                  </div>
                )}

                {/* Attendance Result */}
                {attendanceList.length > 0 && (
                  <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                    {attendanceList.map((record, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-3 text-center   attendance-card  ${
                          record.status === "present" ? "bg-success" : "bg-dark"
                        } text-white`}
                        style={{ minWidth: "160px", fontWeight: "bold" }}
                      >
                        <div>{record.date}</div>
                        <div>{record.status.toUpperCase()}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          {activepage === "Attendance" && (
            <>
              <div className="monthly-attendance-container mt-5 bg-dark text-white p-4 rounded-4 shadow-lg border border-secondary">
                <h2 className="text-center text-success mb-4 fw-bold">
                  Monthly Attendance Viewer
                </h2>

                {/* Form Card */}
                <div className="bg-dark p-4 rounded-3 shadow-sm border border-secondary">
                  <form
                    onSubmit={monthlydate}
                    className="d-flex flex-column flex-md-row gap-3 align-items-end justify-content-center"
                  >
                    <div className="form-group">
                      <label className="form-label text-light">Month</label>
                      <select
                        className="form-control bg-secondary text-white border-0"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        required
                      >
                        <option value="">Select Month</option>
                        {[...Array(12)].map((v, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label text-light">Year</label>
                      <select
                        className="form-control bg-secondary text-white border-0"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                      >
                        <option value="">Select Year</option>
                        {[...Array(10)].map((_, i) => {
                          const currentYear = new Date().getFullYear();
                          const yearOption = currentYear - i;
                          return (
                            <option key={yearOption} value={yearOption}>
                              {yearOption}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-outline-success fw-bold px-4 py-2 shadow-sm"
                      >
                        View
                      </button>
                    </div>
                  </form>
                </div>

                {/* Error Message */}
                {error && (
                  <div className=" text-danger mt-3 text-center rounded-3">
                    {error}
                  </div>
                )}

                {/* Attendance Result */}
                {attendance.length > 0 && (
                  <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
                    {attendance.map((record, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-3 text-center   attendance-card ${
                          record.status === "present" ? "bg-success" : "bg-dark"
                        } text-white`}
                        style={{ minWidth: "160px", fontWeight: "bold" }}
                      >
                        <div>{record.date}</div>
                        <div>{record.status.toUpperCase()}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard2;

// image top bar in Dashboard=========================================================================================================
      <div className="topbar d-flex align-items-center justify-content-between px-3 py-2">
        {/* Left: Logo and Toggle */}
        <div className="d-flex align-items-center">
          <img
            src={require("../image/logo.jpg")}
            alt="Logo"
            className="rounded-circle me-2"
            style={{ width: "35px", height: "35px" }}
          />
          <button
            className="btn btn-link text-white fs-3"
            onClick={() => {
              setIsSidebarCollapsed((prev) => !prev);
            }}
          >
            <i className="bi bi-list"></i> {/* ☰ icon */}
          </button>
        </div>

        {/* Right: Search and Icons */}
        <div className="d-flex align-items-center gap-3">
          <div className="search-box d-none d-md-flex align-items-center bg-white rounded px-2">
            <i className="bi bi-search text-secondary me-1"></i>
            <input
              type="text"
              placeholder="Search..."
              className="form-control border-0 shadow-none"
              style={{ background: "transparent", width: "150px" }}
            />
          </div>

          <i className="bi bi-bell text-white fs-5"></i>
          {/* <i className="bi bi-person-circle text-white fs-5"></i> */}
          <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
            {/* file type */}
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
      </div>

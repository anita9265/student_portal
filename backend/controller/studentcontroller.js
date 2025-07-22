const { application } = require("express");
const student = require("../model/studentmodel");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "your_secret_key";

// post register student
exports.register = async (req, res) => {
  const {
    name,
    lastName,
    email,
    password,
    phoneNumber,
    address,
    state,
    dateOfBirth,
  } = req.body;

  try {
    const alreadystudent = await student.findOne({ email });
    if (alreadystudent) {
      return res.status(400).json({
        message: "student already register...??",
      });
    }
    const newStudent = new student({
      name,
      lastName,
      email,
      password,
      phoneNumber,
      address,
      state,
      dateOfBirth,
    });
    await newStudent.save();
    res.json({
      message: "student registered successfully",
      allrecord: newStudent,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

// Get methode all student
exports.getallregister = async (req, res) => {
  try {
    const students = await student.find();
    res.status(200).json({
      totalrecord: students.length,
      all: students,
    });
  } catch (err) {
    res.status(400).json({ message: "Server error" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    console.log("Decoded user from token:", req.user);

    const studentdata = await student.findById(req.user.id);
    res.status(200).json({ studentdata });
  } catch (err) {
    console.error("Fetch error:", err.message);
    res.status(500).json({ message: "Error fetching student data" });
  }
};

// login post methode
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  try {
    // student login

    const foundstudent = await student.findOne({ email });
    if (!foundstudent) {
      return res
        .status(400)
        .json({ message: "Email not found .please register first..." });
    }

    if (foundstudent.password !== password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    //  already logged in
    const activestudent = await student.findOne({ isLoggedIn: true });
    if (activestudent && activestudent.email !== email) {
      return res.status(400).json({
        message: `Another  ${activestudent.name} user is already logged in`,
      });
    }

    foundstudent.isLoggedIn = true;
    await foundstudent.save();

    // Generate token
    const token = jwt.sign(
      { id: foundstudent._id, email: foundstudent.email },
      SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      // student:foundstudent
    });
  } catch (err) {
    res.status(500).json({ "Login error": err.message });
  }
};

// logout post methode

exports.logout = async (req, res) => {
  const { email } = req.body;

  try {
    const activeStudent = await student.findOne({ isLoggedIn: true });
    if (!activeStudent) {
      return res
        .status(400)
        .json({ message: "No user is currently logged in." });
    }

    // Someone else is trying to logout
    if (activeStudent.email !== email) {
      return res
        .status(400)
        .json({ message: `Only ${activeStudent.name} can log out.` });
    }

    const foundstudent = await student.findOne({ email });

    if (!foundstudent) {
      return res.status(404).send("Student not found");
    }

    foundstudent.isLoggedIn = false;
    await foundstudent.save();

    res.status(200).send("Logout successful");
  } catch (err) {
    res.status(500).send("Logout error");
  }
};

// add subject student post methode
exports.addsubject = async (req, res) => {
  const { email, subject } = req.body;

  if (!email || !subject) {
    return res
      .status(400)
      .json({ message: "Email and subject data are required" });
  }

  try {
    // 1. Find existing student
    const foundStudent = await student.findOne({ email });

    if (!foundStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    // 2. Extract marks from subject object
    const clanguage = Number(subject.clanguage);
    const javascript = Number(subject.javascript);
    const java = Number(subject.java);
    const php = Number(subject.php);
    const python = Number(subject.python);

    const total = clanguage + javascript + java + php + python;
    const percentage = total / 5;
    const min = Math.min(clanguage, javascript, java, php, python);
    const max = Math.max(clanguage, javascript, java, php, python);

    var temp = 0,
      result;
    if (clanguage < 35) {
      temp++;
    }
    if (javascript < 35) {
      temp++;
    }
    if (java < 35) {
      temp++;
    }
    if (php < 35) {
      temp++;
    }
    if (python < 35) {
      temp++;
    }

    if (temp == 0) {
      result = "pass";
    } else if (temp == 1 || temp == 2) {
      result = "atkt";
    } else {
      result = "fail";
    }

    foundStudent.subject = subject;
    foundStudent.total = total;
    foundStudent.percentage = percentage;
    foundStudent.min = min;
    foundStudent.max = max;
    foundStudent.result = result;

    await foundStudent.save();

    res.status(200).json({
      message: "Subject added/updated successfully",
      student: foundStudent,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};

// controller/studentController.js

exports.updatesubject = async (req, res) => {
  const { email, subject } = req.body;

  if (!email || !subject) {
    return res
      .status(400)
      .json({ message: "Email and subject data are required" });
  }

  try {
    const foundStudent = await student.findOne({ email });

    if (!foundStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Extract marks
    const clanguage = Number(subject.clanguage);
    const javascript = Number(subject.javascript);
    const java = Number(subject.java);
    const php = Number(subject.php);
    const python = Number(subject.python);

    // Validation: ensure all are valid numbers
    if (
      isNaN(clanguage) ||
      isNaN(javascript) ||
      isNaN(java) ||
      isNaN(php) ||
      isNaN(python)
    ) {
      return res.status(400).json({ message: "Invalid subject marks" });
    }

    // Calculate result
    const total = clanguage + javascript + java + php + python;
    const percentage = total / 5;
    const min = Math.min(clanguage, javascript, java, php, python);
    const max = Math.max(clanguage, javascript, java, php, python);

    let temp2 = 0;
    if (clanguage < 35) temp2++;
    if (javascript < 35) temp2++;
    if (java < 35) temp2++;
    if (php < 35) temp2++;
    if (python < 35) temp2++;

    let result = "pass";
    if (temp2 === 1 || temp2 === 2) result = "atkt";
    else if (temp2 > 2) result = "fail";

    // Update fields
    foundStudent.subject = subject;
    foundStudent.total = total;
    foundStudent.percentage = percentage;
    foundStudent.min = min;
    foundStudent.max = max;
    foundStudent.result = result;

    await foundStudent.save();
    res.status(200).json({
      message: "Subjects updated successfully",
      student: foundStudent,
    });
  } catch (error) {
    console.error("Error updating subject:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.changepassword = async (req, res) => {
  const { email, oldpassword, newpassword } = req.body;

  try {
    const finddata = await student.findOne({ email });
    if (!finddata) {
      return res.status(400).json({ message: "Student not found" });
    }

    if (finddata.password !== oldpassword) {
      return res
        .status(400)
        .json({
          message: "old password is incorrent",
          finddatapass: finddata.password,
          oldpassword: oldpassword,
        });
    }
    console.log("finddata password", finddata.password);
    console.log("old password", oldpassword);
    finddata.password = newpassword;
    await finddata.save();

    res.json({ message: "Password changed successfully" });
  } catch (err) {
    console.error("Password change error:", err);
    res.status(400).json({ message: "Server error" });
  }
};

exports.getsubject = async (req, res) => {
  const { email } = req.body;

  try {
    const foundStudent = await student.findOne({ email, isLoggedIn: true });
    if (!foundStudent) {
      res.status(400).json({
        message: "data not found",
      });
    }

    if (!foundStudent.subject) {
      return res.status(404).json({ message: "No subject data found" });
    }

    res.status(200).json({
      subject: foundStudent.subject,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.multipleadd = async (req, res) => {
  const entries = req.body; // array of { email, date, status }

  if (!Array.isArray(entries) || entries.length === 0) {
    return res.status(400).json({ message: "Invalid or empty data" });
  }

  try {
    for (const { email, date, status } of entries) {
      const studentdata = await student.findOne({ email });
      if (!studentdata) continue; // skip if student not found

      const existing = studentdata.attendance.find((att) => att.date === date);
      if (existing) {
        existing.status = status;
      } else {
        studentdata.attendance.push({ date, status });
      }

      await studentdata.save();
    }

    res
      .status(200)
      .json({ message: "Multiple attendance records added successfully" });
  } catch (error) {
    console.error("Error in bulk attendance:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.filterrange = async (req, res) => {
  const { email, from, to } = req.body;

  if (!email || !from || !to) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const studentData = await student.findOne({ email });
  if (!studentData)
    return res.status(404).json({ message: "Student not found" });

  // Filter attendance range
  const filteredAttendance = studentData.attendance.filter(
    (att) => att.date >= from && att.date <= to
  );

  if (filteredAttendance.length === 0) {
    return res
      .status(200)
      .json({ message: "No attendance found in range", data: [] });
  }

  res.status(200).json({ message: "Records found", data: filteredAttendance });
};

exports.monthlyDisplay = async (req, res) => {
  try {
    const { email, month, year } = req.body;

    if (!email || !month || !year) {
      return res
        .status(400)
        .json({ error: "Email, month, and year are required" });
    }

    // Find student by email
    const data = await student.findOne({ email });

    if (!data) {
      return res.status(404).json({ error: "Student not found" });
    }

    const filteredAttendance = data.attendance.filter((entry) => {
      const [entryYear, entryMonth] = entry.date.split("-");

      return (
        parseInt(entryMonth) === parseInt(month) &&
        parseInt(entryYear) === parseInt(year)
      );
    });

    if (filteredAttendance.length === 0) {
      return res
        .status(404)
        .json({ message: "No attendance records found for this month" });
    }

    res.status(200).json({
      email: data.email,
      month,
      year,
      attendance: filteredAttendance,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// chart data in present and absent

// GET monthly attendance summary
exports.getmonthwisedata = async (req, res) => {
  const { email } = req.body;

  try {
    const data = await student.findOne({ email });
    if (!data) {
      return res.status(404).json({ message: "Student not found" });
    }
    const summary = {};

    for (let record of data.attendance) {
      const [year, month] = record.date.split("-");
      const key = `${year}-${month}`;

      if (!summary[key]) {
        summary[key] = { present: 0, absent: 0 };
      }

      if (record.status === "present") {
        summary[key].present++;
      } else {
        summary[key].absent++;
      }
    }

    // Add percentage for each month
    for (let month in summary) {
      const { present, absent } = summary[month];
      const total = present + absent;
      const percentage = total > 0 ? Math.round((present / total) * 100) : 0;

      summary[month].percentage = percentage;
    }

    res.json({ monthlyStats: summary });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getallattendancedata = async (req, res) => {
  const { email } = req.body;

  try {
    const studentdata = await student.findOne({ email });

    if (!studentdata)
      return res.status(404).json({ message: "Student not found" });

    let present = 0,
      absent = 0;

    studentdata.attendance.forEach((entry) => {
      if (entry.status === "present") present++;
      else if (entry.status === "absent") absent++;
    });

    res.json({
      present,
      absent,
    });
  } catch (err) {
    console.error("Attendance summary error", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.addSubjectone = async (req, res) => {
  try {
    const { email, subjectName, marks } = req.body;

    if (!email || !subjectName || marks == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 1. Find the student
    const studentdata = await student.findOne({ email });

    if (!studentdata) {
      return res.status(404).json({ message: "Student not found" });
    }

    // 2. Push new subject into the `subjects` array
    studentdata.subjects.push({ subjectName, marks });
    await studentdata.save();

    // 3. Calculate total, percentage, min, max, result
    const allMarks = studentdata.subjects.map((sub) => sub.marks);
    const total = allMarks.reduce((sum, m) => sum + m, 0);
    const count = studentdata.subjects.length;
    const percentage = (total / (count * 100)) * 100;
    const min = Math.min(...allMarks);
    const max = Math.max(...allMarks);

    const result = allMarks.some((m) => m < 33)
      ? allMarks.filter((m) => m < 33).length > 1
        ? "Fail"
        : "ATKT"
      : "Pass";

    res.status(200).json({
      message: "Subject added successfully to student",
      total,
      percentage: percentage.toFixed(2),
      min,
      max,
      result,
      subjects: studentdata.subjects,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

//  Controller: Update marks for a given subject
exports.updateSubjectMarks = async (req, res) => {
  try {
    const { email, subjectName, newMarks } = req.body;

    if (!email || !subjectName || newMarks == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const studentdata = await student.findOne({ email });

    if (!studentdata) {
      return res.status(404).json({ message: "Student not found" });
    }

    // ✅ Find subject and update marks
    const subject = studentdata.subjects.find(
      (subj) => subj.subjectName.toLowerCase() === subjectName.toLowerCase()
    );

    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    subject.marks = newMarks;
    await studentdata.save();

    res.json({ message: "Subject marks updated", updatedSubject: subject });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.deletebyid = async (req, res) => {
  try {
    const { email, subjectId } = req.params;

    const updatedStudent = await student.findOneAndUpdate(
      { email },
      { $pull: { subjects: { _id: subjectId } } },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({
      message: "Subject deleted successfully",
      student: updatedStudent.subjects,
    });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Error deleting subject" });
  }
};

// GET all subjects of a specific student by email
exports.getSubjectsByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const studentdata = await student.findOne({ email });

    if (!studentdata) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(studentdata.subjects); // return only the subjects array
  } catch (error) {
    console.error("Error fetching subjects:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// result ni application

// routes/resultRoutes.js or inside your studentController.js

exports.studentresult = async (req, res) => {
  try {
    const { email } = req.body;

    const studentdata = await student.findOne({ email });

    if (
      !studentdata ||
      !studentdata.subjects ||
      studentdata.subjects.length === 0
    ) {
      return res.status(404).json({ message: "No subjects found" });
    }

    const subjects = studentdata.subjects;

    const total = subjects.reduce((acc, sub) => acc + sub.marks, 0);
    const percentage = (total / (subjects.length * 100)) * 100;
    const min = Math.min(...subjects.map((s) => s.marks));
    const max = Math.max(...subjects.map((s) => s.marks));

    // Determine result status
    let status = "Pass";
    const failedSubjects = subjects.filter((s) => s.marks < 33);
    if (failedSubjects.length >= 3) status = "Fail";
    else if (failedSubjects.length >= 1) status = "ATKT";

    res.json({
      subjects,
      total,
      min,
      max,
      percentage: percentage.toFixed(2),
      result: status,
    });
  } catch (err) {
    console.error("Error calculating result:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getStudentByEmail = async (req, res) => {
  const { email } = req.params; // ✅ Use params instead of query

  try {
    const studentData = await student.findOne({ email });

    if (!studentData) {
      return res
        .status(404)
        .json({ message: "Student not found with this email" });
    }

    res.status(200).json({
      message: "Student fetched successfully",
      data: studentData,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching student", error: err });
  }
};

// PUT update student by email
exports.updateStudentByEmail = async (req, res) => {
  const { email } = req.body;

  try {
    // First, check if the student exists
    const existingStudent = await student.findOne({ email });

    if (!existingStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Now update the student
    const updatedStudent = await student.findOneAndUpdate({ email }, req.body, {
      new: true,
    });

    res.status(200).json({
      message: "Student updated successfully",
      data: updatedStudent,
    });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err });
  }
};

// getname controller (student.js or relevant controller file)

exports.getname = async (req, res) => {
  try {
    // login user id from token
    const loginUserId = req.user.id;

    // find all users except the one who's logged in
    const allUsers = await student.find({ _id: { $ne: loginUserId } });

    res.status(200).json({
      totalrecord: allUsers.length,
      all: allUsers,
    });
  } catch (err) {
    console.error("Error fetching users:", err.message);
    res.status(500).json({ message: "Error fetching users" });
  }
};


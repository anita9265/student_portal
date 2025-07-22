var express = require('express');
var router = express.Router();
const student=require("../controller/studentcontroller");
const token=require("../middleware/auth");
const { verify } = require('jsonwebtoken');

/*  GET home page */

router.post('/register',student.register);
router.get('/register',student.getallregister);
router.post('/login',student.login);
router.post('/logout',student.logout);

// verify token
router.get('/profile',token,student.getProfile);

// router.post('/addsubject',token,student.addsubject);
router.post('/editsubject',token,student.updatesubject);
router.post('/changepassword',token,student.changepassword);
router.post('/multi_atten',token,student.multipleadd);
router.post('/filterdate',token,student.filterrange);
router.post('/changepassword',token,student.changepassword);
// router.post('/getsubject',token,student.getsubject);
// router.post('/subject',token,student.addsubjectsep);
// router.post('/getsubject',token,student.getsubject);
router.post('/monthlyDisplay',token,student.monthlyDisplay);
router.post('/datachart',token,student.getmonthwisedata);
router.post('/getchartdata',token,student.getallattendancedata);


    // add subject
router.post('/addsubject',token,student.addSubjectone);
router.post('/updatemarks',token,student.updateSubjectMarks);
router.delete("/:email/:subjectId",token,student.deletebyid);
router.get("/getsubjects/:email",token,student.getSubjectsByEmail);
router.post("/result",token,student.studentresult);

// manage account

router.get("/studentemail/:email", token, student.getStudentByEmail);
// In routes

router.post("/studentmanage", token, student.updateStudentByEmail);
// chat in Socket.oi

router.get("/getname",token,student.getname);
module.exports = router;
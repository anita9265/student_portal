const mongoose = require("mongoose");

const studentschema = new mongoose.Schema({
  name: {
    type: String,
  },
    lastName: { type: String },


  email: {
    type: String,
    required: true,
    unique: true,
  },

  // contact information
  phoneNumber: { type: String }, 
  address: { type: String },     
  state: { type: String },       
  dateOfBirth: { type: Date },

  password: {
    type: String,
  },
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
  course: {
    type: String,
    default: "webdevlopment",
  },
     subjects: [
    {
      subjectName: { type: String },
      marks: { type: Number }
    }
  ],
  total: {
    type: Number,
  },
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
  percentage: {
    type: Number,
  },
  result: {
    type: String,
  },
  attendance: [
    {
      date: { type: String },
      status: { type: String, enum: ["present", "absent"], default: "present" },
    },
  ],

   subjectone: { type: String},
  marks: { type: Number }
});

module.exports = mongoose.model("student", studentschema);

const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    Name: String,
    code: String,
    instrutor: String,
    credits: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
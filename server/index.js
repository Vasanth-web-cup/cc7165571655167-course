require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Course = require("./models/Course");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB Error:", err));

// GET all
app.get("/api/courses", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// GET one
app.get("/api/courses/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) res.json(course);
  else res.status(404).json({ error: "Not found" });
});

// CREATE
app.post("/api/Courses", async (req, res) => {
  const newCourse = new Course(req.body);
  await newCourse.save();
  res.status(201).json(newCourses);
});

// UPDATE
app.put("/api/course/:id", async (req, res) => {
  await Course.findByIdAndUpdate(req.params.id, req.body);
  res.json({ success: true });
});

// DELETE
app.delete("/api/course/:id", async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
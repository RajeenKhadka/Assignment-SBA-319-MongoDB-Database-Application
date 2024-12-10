const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

//imports
const db = require("./db/conn");
const Student = require("./models/students");
const studentsRoutes = require("./routes/students");

const Teacher = require("./models/teachers");
const teachersRoutes = require("./routes/teachers");

const Course = require("./models/courses");
const coursesRoutes = require("./routes/courses");

//Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

//Set Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/home");
app.set("view engine", "ejs");

//===========================MethodOverride==========================//
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//===========================Middleware==============================//
//app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

// app.get("", (req, res) => {
//   res.render("index");
// });

//Routes
app.use("/api/students", studentsRoutes);
app.use("/api/teachers", teachersRoutes);
app.use("/api/courses", coursesRoutes);

//==================================Students===============================================
//Student list route
app.get("/students", async (req, res) => {
  try {
    const foundStudents = await Student.find({});
    res.status(200).render("students", { students: foundStudents });
  } catch (err) {
    res.send(err).status(400);
  }
});

//Modify Route
app.get("/students/:id/edit", async (req, res) => {
  try {
    const foundStudent = await Student.findById(req.params.id);
    res.status(200).render("modify", { student: foundStudent });
  } catch (err) {
    res.status(400).send(err);
  }
});

//==================================Teachers===============================================
//Teachers list route
app.get("/teachers", async (req, res) => {
  try {
    const foundTeachers = await Teacher.find({});
    res.status(200).render("teachers", { teachers: foundTeachers });
  } catch (err) {
    res.send(err).status(400);
  }
});

//Modify Route
app.get("/teachers/:id/edit", async (req, res) => {
  try {
    const foundTeachers = await Teacher.findById(req.params.id);
    res.status(200).render("modifyteacher", { teacher: foundTeachers });
  } catch (err) {
    res.status(400).send(err);
  }
});

//==================================Courses===============================================
app.get("/", async (req, res) => {
  try {
    const foundCourses = await Course.find({});
    res.status(200).render("index", { courses: foundCourses });
  } catch (err) {
    res.send(err).status(400);
  }
});

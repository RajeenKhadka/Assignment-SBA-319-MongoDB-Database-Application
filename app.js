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

app.get("", (req, res) => {
  res.render("index");
});

app.use("/api/students", studentsRoutes);

//Student list route
app.get("/students", async (req, res) => {
  try {
    const foundStudents = await Student.find({});
    res.status(200).render("students", { students: foundStudents });
  } catch (err) {
    res.send(err).status(400);
  }
});

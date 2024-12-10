const express = require("express");
const router = express.Router();
const Student = require("../models/students");

//add data
router.get("/seed", async (req, res) => {
  try {
    await Student.create([
      {
        name: { first: "John", last: "Doe" },
        email: "john.doe@example.com",
        age: 16,
        instrument: "guitar",
        skillLevel: "intermediate",
        enrolled: true,
      },
      {
        name: { first: "Jane", last: "Smith" },
        email: "jane.smith@example.com",
        age: 14,
        instrument: "vocals",
        skillLevel: "beginner",
        enrolled: true,
      },
      {
        name: { first: "Mike", last: "Brown" },
        email: "mike.brown@example.com",
        age: 20,
        instrument: "drums",
        skillLevel: "advanced",
        enrolled: false,
      },
      {
        name: { first: "Emily", last: "Davis" },
        email: "emily.davis@example.com",
        age: 18,
        instrument: "keys",
        skillLevel: "intermediate",
        enrolled: true,
      },
      {
        name: { first: "Chris", last: "Wilson" },
        email: "chris.wilson@example.com",
        age: 12,
        instrument: "bass",
        skillLevel: "beginner",
        enrolled: true,
      },
      {
        name: { first: "Sophia", last: "Martinez" },
        email: "sophia.martinez@example.com",
        age: 15,
        instrument: "vocals",
        skillLevel: "beginner",
        enrolled: true,
      },
      {
        name: { first: "Liam", last: "Taylor" },
        email: "liam.taylor@example.com",
        age: 17,
        instrument: "drums",
        skillLevel: "intermediate",
        enrolled: true,
      },
      {
        name: { first: "Olivia", last: "Anderson" },
        email: "olivia.anderson@example.com",
        age: 19,
        instrument: "guitar",
        skillLevel: "advanced",
        enrolled: false,
      },
      {
        name: { first: "James", last: "Thomas" },
        email: "james.thomas@example.com",
        age: 21,
        instrument: "keys",
        skillLevel: "advanced",
        enrolled: false,
      },
      {
        name: { first: "Ava", last: "Hernandez" },
        email: "ava.hernandez@example.com",
        age: 13,
        instrument: "bass",
        skillLevel: "beginner",
        enrolled: true,
      },
      {
        name: { first: "Noah", last: "Moore" },
        email: "noah.moore@example.com",
        age: 18,
        instrument: "drums",
        skillLevel: "intermediate",
        enrolled: true,
      },
      {
        name: { first: "Isabella", last: "Clark" },
        email: "isabella.clark@example.com",
        age: 16,
        instrument: "vocals",
        skillLevel: "intermediate",
        enrolled: true,
      },
      {
        name: { first: "Lucas", last: "Walker" },
        email: "lucas.walker@example.com",
        age: 14,
        instrument: "guitar",
        skillLevel: "beginner",
        enrolled: true,
      },
      {
        name: { first: "Mia", last: "Hall" },
        email: "mia.hall@example.com",
        age: 20,
        instrument: "keys",
        skillLevel: "advanced",
        enrolled: false,
      },
      {
        name: { first: "Ethan", last: "Allen" },
        email: "ethan.allen@example.com",
        age: 15,
        instrument: "bass",
        skillLevel: "beginner",
        enrolled: true,
      },
      {
        name: { first: "Amelia", last: "Young" },
        email: "amelia.young@example.com",
        age: 19,
        instrument: "drums",
        skillLevel: "advanced",
        enrolled: true,
      },
      {
        name: { first: "Matthew", last: "Harris" },
        email: "matthew.harris@example.com",
        age: 16,
        instrument: "vocals",
        skillLevel: "intermediate",
        enrolled: true,
      },
      {
        name: { first: "Charlotte", last: "King" },
        email: "charlotte.king@example.com",
        age: 22,
        instrument: "keys",
        skillLevel: "advanced",
        enrolled: false,
      },
      {
        name: { first: "Alexander", last: "Scott" },
        email: "alexander.scott@example.com",
        age: 14,
        instrument: "guitar",
        skillLevel: "beginner",
        enrolled: true,
      },
      {
        name: { first: "Harper", last: "Adams" },
        email: "harper.adams@example.com",
        age: 13,
        instrument: "vocals",
        skillLevel: "beginner",
        enrolled: true,
      },
    ]);

    res.status(200).redirect("/api/students");
  } catch (err) {
    res.status(400).send(err);
  }
});

//display data in localhost:5052/api/students
router.get("/", async (req, res) => {
  try {
    const foundStudents = await Student.find({});
    res.status(200).json(foundStudents);
  } catch (err) {
    res.status(400).send(err);
  }
});

//CREATE
router.post("/", async (req, res) => {
  if (req.body.enrolled === "on") {
    req.body.enrolled = true;
  } else {
    req.body.enrolled = false;
  }

  try {
    const createdStudent = await Student.create(req.body);
    res.status(200).redirect("/students");
  } catch (err) {
    res.status(400).send(err);
  }
});

//EDIT
router.put("/:id", async (req, res) => {
  try {
    req.body.enrolled = req.body.enrolled === "on";

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).redirect("/students");
  } catch (err) {
    res.status(400).send(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    res.status(200).redirect("/students");
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

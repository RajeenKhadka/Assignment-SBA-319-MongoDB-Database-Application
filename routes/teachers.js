const express = require("express");
const router = express.Router();
const Teacher = require("../models/teachers");

//add data
router.get("/seed", async (req, res) => {
  try {
    await Teacher.create([
      {
        name: {
          first: "Alice",
          last: "Johnson",
        },
        email: "alice.johnson@example.com",
        instrumentSpecialties: ["guitar", "vocals"],
        experienceYears: 5,
        hireDate: "2018-06-15",
        isFullTime: true,
      },
      {
        name: {
          first: "Bob",
          last: "Martinez",
        },
        email: "bob.martinez@example.com",
        instrumentSpecialties: ["bass"],
        experienceYears: 8,
        hireDate: "2015-09-10",
        isFullTime: true,
      },
      {
        name: {
          first: "Clara",
          last: "Evans",
        },
        email: "clara.evans@example.com",
        instrumentSpecialties: ["drums", "keys"],
        experienceYears: 3,
        hireDate: "2021-03-20",
        isFullTime: false,
      },
      {
        name: {
          first: "David",
          last: "Smith",
        },
        email: "david.smith@example.com",
        instrumentSpecialties: ["keys", "vocals"],
        experienceYears: 10,
        hireDate: "2013-11-05",
        isFullTime: true,
      },
      {
        name: {
          first: "Ella",
          last: "Brown",
        },
        email: "ella.brown@example.com",
        instrumentSpecialties: ["drums"],
        experienceYears: 7,
        hireDate: "2016-08-19",
        isFullTime: false,
      },
      {
        name: {
          first: "Frank",
          last: "Wilson",
        },
        email: "frank.wilson@example.com",
        instrumentSpecialties: ["guitar", "bass"],
        experienceYears: 12,
        hireDate: "2011-04-25",
        isFullTime: true,
      },
      {
        name: {
          first: "Grace",
          last: "Taylor",
        },
        email: "grace.taylor@example.com",
        instrumentSpecialties: ["vocals"],
        experienceYears: 6,
        hireDate: "2017-07-13",
        isFullTime: false,
      },
      {
        name: {
          first: "Henry",
          last: "Anderson",
        },
        email: "henry.anderson@example.com",
        instrumentSpecialties: ["bass", "keys"],
        experienceYears: 4,
        hireDate: "2019-12-01",
        isFullTime: true,
      },
      {
        name: {
          first: "Isabel",
          last: "Clark",
        },
        email: "isabel.clark@example.com",
        instrumentSpecialties: ["guitar"],
        experienceYears: 2,
        hireDate: "2022-05-20",
        isFullTime: true,
      },
      {
        name: {
          first: "Jack",
          last: "Miller",
        },
        email: "jack.miller@example.com",
        instrumentSpecialties: ["drums", "guitar"],
        experienceYears: 9,
        hireDate: "2014-02-15",
        isFullTime: false,
      },
    ]);

    res.status(200).redirect("/api/teachers");
  } catch (err) {
    res.status(400).send(err);
  }
});

//display data in localhost:5052/api/teachers
router.get("/", async (req, res) => {
  try {
    const foundTeachers = await Teacher.find({});
    res.status(200).json(foundTeachers);
  } catch (err) {
    res.status(400).send(err);
  }
});

//CREATE
router.post("/", async (req, res) => {
  if (req.body.isFullTime === "on") {
    req.body.isFullTime = true;
  } else {
    req.body.isFullTime = false;
  }

  try {
    const createdTeachers = await Teacher.create(req.body);
    res.status(200).redirect("/teachers");
  } catch (err) {
    res.status(400).send(err);
  }
});

//EDIT
router.put("/:id", async (req, res) => {
  try {
    req.body.isFullTime = req.body.isFullTime === "on";

    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).redirect("/teachers");
  } catch (err) {
    res.status(400).send(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
    res.status(200).redirect("/teachers");
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

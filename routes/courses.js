const express = require("express");
const router = express.Router();
const Course = require("../models/courses");

router.get("/seed", async (req, res) => {
  try {
    await Course.create([
      {
        name: "Complete Guitar Basics",
        instrument: "guitar",
        level: ["beginner"],
      },
      {
        name: "Bass Essentials",
        instrument: "bass",
        level: ["beginner", "intermediate"],
      },
      {
        name: "Drum Techniques for All Levels",
        instrument: "drums",
        level: ["beginner", "intermediate", "advanced"],
      },
      {
        name: "Vocal Warmups and Performance",
        instrument: "vocals",
        level: ["beginner", "intermediate"],
      },
      {
        name: "Advanced Jazz Keyboards",
        instrument: "keys",
        level: ["advanced"],
      },
      {
        name: "Rock Guitar Improvisation",
        instrument: "guitar",
        level: ["intermediate", "advanced"],
      },
      {
        name: "Percussion Workshop",
        instrument: "drums",
        level: ["intermediate"],
      },
      {
        name: "Bass Mastery",
        instrument: "bass",
        level: ["advanced"],
      },
      {
        name: "Choir Techniques and Harmony",
        instrument: "vocals",
        level: ["beginner"],
      },
      {
        name: "Synth Essentials for Keyboards",
        instrument: "keys",
        level: ["beginner", "intermediate"],
      },
    ]);

    res.status(200).redirect("/api/courses");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const foundCourses = await Course.find({});
    res.status(200).json(foundCourses);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

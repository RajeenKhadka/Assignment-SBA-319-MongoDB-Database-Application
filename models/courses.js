const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    instrument: {
      type: String,
      required: true,
      enum: ["guitar", "bass", "drums", "vocals", "keys", "other"],
    },
    level: {
      type: [String],
      required: true,
      enum: ["beginner", "intermediate", "advanced"],
    },
  },
  {
    timestamps: true,
  }
);

//Index on instrument for filtering by instrument
courseSchema.index({ instrument: 1 });
//Index on level for filtering by skill levels
courseSchema.index({ level: 1 });

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;

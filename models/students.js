const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      first: { type: String, required: true, trim: true },
      last: { type: String, required: true, trim: true },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    age: { type: Number, min: 5, max: 100, required: true }, // Assuming the school accommodates a wide age range.
    instrument: {
      type: String,
      required: true,
      enum: ["guitar", "bass", "drums", "vocals", "keys", "other"], // Limited to rock instruments.
    },
    skillLevel: {
      type: String,
      required: true,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },
    enrolled: { type: Boolean, default: true }, // Tracks if the student is actively enrolled.
  },
  {
    timestamps: true, // Tracks when the student document is created or updated.
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

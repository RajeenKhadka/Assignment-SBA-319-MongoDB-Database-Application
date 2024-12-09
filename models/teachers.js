const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
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
    instrumentSpecialties: {
      type: [String],
      required: true,
      enum: ["guitar", "bass", "drums", "vocals", "keys", "other"], // Limited to rock instruments.
    },
    experienceYears: {
      type: Number,
      min: 0,
      required: true,
    },
    hireDate: {
      type: Date,
      default: Date.now,
    },
    isFullTime: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Tracks when the teacher document is created or updated.
  }
);

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;

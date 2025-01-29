const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Global configuration
const mongoURI = process.env.MONGO_URI;

// Check if MONGO_URI exists in environment variables
if (!mongoURI) {
  console.error("Error: MONGO_URI is not defined in environment variables.");
  process.exit(1); // Exit the application if the URI is missing
}

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit the application on connection failure
  });

// Export the database connection
const db = mongoose.connection;
module.exports = db;

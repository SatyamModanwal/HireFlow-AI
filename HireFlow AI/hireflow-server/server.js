// ==========================================================
// Import Packages
// ==========================================================

const express = require("express");
const cors = require("cors");
require("dotenv").config();

// ==========================================================
// Database Connection
// ==========================================================

const connectDB = require("./config/db");

// ==========================================================
// Import Routes
// ==========================================================

const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");

// ==========================================================
// Create Express App
// ==========================================================

const app = express();

// ==========================================================
// Connect Database
// ==========================================================

connectDB();

// ==========================================================
// Middlewares
// ==========================================================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ==========================================================
// Home Route
// ==========================================================

app.get("/", (req, res) => {
    res.send("🚀 HireFlow AI Backend Running");
});

// ==========================================================
// API Routes
// ==========================================================

// Authentication Routes
app.use("/api/auth", authRoutes);

// Job Routes
app.use("/api/jobs", jobRoutes);

// ==========================================================
// Handle Invalid Routes
// ==========================================================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// ==========================================================
// Start Server
// ==========================================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server Running on Port ${PORT}`);
});
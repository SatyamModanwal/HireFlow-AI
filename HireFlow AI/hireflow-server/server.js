// // Express package ko import kar rahe hain
// const express = require("express");

// // CORS package import
// const cors = require("cors");

// // .env file ko load karega
// require("dotenv").config();

// // Express application create kar rahe hain
// const app = express();

// // Server kis port par chalega
// // Agar .env me PORT hai to wahi use hoga
// // Nahi hai to 5000 use karega
// const PORT = process.env.PORT || 5000;

// // Middleware

// // React se JSON data receive karne ke liye
// app.use(express.json());

// // React aur Backend ko connect karne ke liye
// app.use(cors());


// // ----------------------------
// // Test API
// // ----------------------------

// // Browser me check karne ke liye
// app.get("/", (req, res) => {

//     res.send("🚀 HireFlow AI Backend is Running");

// });


// // ----------------------------
// // Server Start
// // ----------------------------

// app.listen(PORT, () => {

//     console.log(`Server running on Port ${PORT}`);

// });




// ===============================
// Import Required Packages
// ===============================

// Express package ko import kar rahe hain.
// Express ki help se hum server aur APIs banayenge.
// const express = require("express");

// // CORS package import kar rahe hain.
// // Ye React (Frontend) aur Node.js (Backend)
// // ko ek dusre se communicate karne ki permission deta hai.
// const cors = require("cors");

// // .env file ke variables (PORT, MONGO_URI)
// // ko project me use karne ke liye dotenv import kar rahe hain.
// require("dotenv").config();

// // MongoDB connection function ko import kar rahe hain.
// const connectDB = require("./config/db");


// // ===============================
// // Create Express Application
// // ===============================

// // Express application create kar rahe hain.
// // Is 'app' object ki help se hum routes,
// // middleware aur server banayenge.
// const app = express();


// // ===============================
// // Define Port Number
// // ===============================

// // Agar .env file me PORT diya hai to wahi use hoga.
// // Agar nahi diya hai to default 5000 use hoga.
// const PORT = process.env.PORT || 5000;


// // ===============================
// // Middleware
// // ===============================

// // express.json() frontend se aane wale JSON data
// // ko JavaScript object me convert karta hai.
// //
// // Example:
// // {
// //   "name":"Rahul",
// //   "email":"rahul@gmail.com"
// // }
// //
// // Agar ye middleware nahi likhenge to req.body undefined milega.
// app.use(express.json());


// // CORS middleware
// // React localhost:5173 par chalega
// // Backend localhost:5000 par chalega
// //
// // Dono different ports par hone ki wajah se
// // browser request block kar deta hai.
// //
// // cors() is problem ko solve karta hai.
// app.use(cors());


// // ===============================
// // Connect MongoDB Database
// // ===============================

// // Ye function MongoDB Atlas se connection banayega.
// //
// // Agar connection successful hua to terminal me
// //
// // ✅ MongoDB Connected Successfully
// //
// // print hoga.
// connectDB();


// // ===============================
// // Test Route
// // ===============================

// // Ye hamari first API hai.
// //
// // URL:
// //
// // http://localhost:5000
// //
// // Browser me open karoge to
// //
// // 🚀 HireFlow AI Backend is Running
// //
// // dikhai dega.
// app.get("/", (req, res) => {

//     res.send("🚀 HireFlow AI Backend is Running");

// });


// // ===============================
// // Start Server
// // ===============================

// // app.listen() server ko start karta hai.
// //
// // PORT = 5000
// //
// // To browser me:
// //
// // http://localhost:5000
// //
// // open ho jayega.
// app.listen(PORT, () => {

//     console.log(`🚀 Server running on Port ${PORT}`);

// });


// ==========================================
// Import Required Packages
// ==========================================

// Express framework import
const express = require("express");

// CORS package import
// React Frontend aur Node Backend ko connect karne ke liye
const cors = require("cors");

// .env file ke variables load karega
require("dotenv").config();

// MongoDB connection function import
const connectDB = require("./config/db");

// Auth Routes import
const authRoutes = require("./routes/authRoutes");


// ==========================================
// Create Express App
// ==========================================

// Express application create kar rahe hain
const app = express();


// ==========================================
// Connect MongoDB
// ==========================================

// Server start hone se pehle database connect hoga
connectDB();


// ==========================================
// Port Number
// ==========================================

// .env se PORT lega
// Agar nahi mila to default 5000 use karega
const PORT = process.env.PORT || 5000;


// ==========================================
// Middleware
// ==========================================

// Frontend se JSON data receive karne ke liye
app.use(express.json());

// React aur Backend ko connect karne ke liye
app.use(cors());


// ==========================================
// Routes
// ==========================================

// Test Route
// Browser me http://localhost:5000 open karoge
// To ye message dikhega
app.get("/", (req, res) => {

    res.send("🚀 HireFlow AI Backend is Running");

});


// ==========================================
// Auth Routes
// ==========================================

// Register aur Login APIs isi route ke andar hongi
//
// Example:
//
// POST  /api/auth/register
// POST  /api/auth/login
//
app.use("/api/auth", authRoutes);


// ==========================================
// Start Server
// ==========================================

// Server start hoga
app.listen(PORT, () => {

    console.log(`🚀 Server running on Port ${PORT}`);

});
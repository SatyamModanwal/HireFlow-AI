// Express package ko import kar rahe hain
const express = require("express");

// CORS package import
const cors = require("cors");

// .env file ko load karega
require("dotenv").config();

// Express application create kar rahe hain
const app = express();

// Server kis port par chalega
// Agar .env me PORT hai to wahi use hoga
// Nahi hai to 5000 use karega
const PORT = process.env.PORT || 5000;

// Middleware

// React se JSON data receive karne ke liye
app.use(express.json());

// React aur Backend ko connect karne ke liye
app.use(cors());


// ----------------------------
// Test API
// ----------------------------

// Browser me check karne ke liye
app.get("/", (req, res) => {

    res.send("🚀 HireFlow AI Backend is Running");

});


// ----------------------------
// Server Start
// ----------------------------

app.listen(PORT, () => {

    console.log(`Server running on Port ${PORT}`);

});
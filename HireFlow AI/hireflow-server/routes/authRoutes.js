const express = require("express");

// Router create
const router = express.Router();

// Controller import
const { registerUser } = require("../controllers/authController");

// Register Route
router.post("/register", registerUser);

// Export
module.exports = router;
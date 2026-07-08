const express = require("express");

const router = express.Router();

const { addJob } = require("../controllers/jobController");

const authMiddleware = require("../middleware/authMiddleware");

// Add Job
router.post("/", authMiddleware, addJob);

module.exports = router;
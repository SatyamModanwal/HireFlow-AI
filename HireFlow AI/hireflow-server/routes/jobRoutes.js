const express = require("express");

const router = express.Router();

const {
  addJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

const authMiddleware = require("../middleware/authMiddleware");

// Add Job
router.post("/", authMiddleware, addJob);

// Get All Jobs
router.get("/", authMiddleware, getAllJobs);

// Get Single Job
router.get("/:id", authMiddleware, getSingleJob);

// Update Job
router.put("/:id", authMiddleware, updateJob);

// Delete Job
router.delete("/:id", authMiddleware, deleteJob);

module.exports = router;
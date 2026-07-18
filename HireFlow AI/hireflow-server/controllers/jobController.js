// ==========================================================
// Import Job Model
// ==========================================================

const Job = require("../models/Job");

// ==========================================================
// Add Job
// ==========================================================

const addJob = async (req, res) => {
  try {
    const { company, position, status, location } = req.body;

    if (!company || !position || !location) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const job = await Job.create({
      company,
      position,
      status,
      location,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Job Added Successfully",
      job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================================
// Get All Jobs
// ==========================================================

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({
      createdBy: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      totalJobs: jobs.length,
      jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================================
// Get Single Job
// ==========================================================

const getSingleJob = async (req, res) => {
  try {
    const job = await Job.findOne({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================================
// Update Job
// ==========================================================

const updateJob = async (req, res) => {
  try {
    const job = await Job.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user.id,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job Updated Successfully",
      job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================================
// Delete Job
// ==========================================================

const deleteJob = async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================================
// Dashboard Statistics
// ==========================================================

const getJobStats = async (req, res) => {
  try {
    const jobs = await Job.find({
      createdBy: req.user.id,
    });

    const stats = {
      totalJobs: jobs.length,
      applied: 0,
      interview: 0,
      offer: 0,
      rejected: 0,
    };

    jobs.forEach((job) => {
      switch (job.status) {
        case "Applied":
          stats.applied++;
          break;

        case "Interview":
          stats.interview++;
          break;

        case "Offer":
          stats.offer++;
          break;

        case "Rejected":
          stats.rejected++;
          break;

        default:
          break;
      }
    });

    res.status(200).json({
      success: true,
      stats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================================
// Export Controllers
// ==========================================================

module.exports = {
  addJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
  getJobStats,
};
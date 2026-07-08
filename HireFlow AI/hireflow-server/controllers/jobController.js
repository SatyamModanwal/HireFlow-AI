const Job = require("../models/Job");

// =============================
// Add New Job
// =============================
const addJob = async (req, res) => {
  try {
    const { company, position, status, location } = req.body;

    // Validation
    if (!company || !position || !location) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Create Job
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

module.exports = {
  addJob,
};
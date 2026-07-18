import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ==============================
// Attach JWT Token Automatically
// ==============================

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ==============================
// Add Job
// ==============================

export const addJob = (jobData) => {
  return API.post("/jobs", jobData);
};

// ==============================
// Get All Jobs
// ==============================

export const getJobs = () => {
  return API.get("/jobs");
};

// ==============================
// Get Single Job
// ==============================

export const getSingleJob = (id) => {
  return API.get(`/jobs/${id}`);
};

// ==============================
// Update Job
// ==============================

export const updateJob = (id, jobData) => {
  return API.put(`/jobs/${id}`, jobData);
};

// ==============================
// Delete Job
// ==============================

export const deleteJob = (id) => {
  return API.delete(`/jobs/${id}`);
};

// ==============================
// Dashboard Statistics
// ==============================

export const getJobStats = () => {
  return API.get("/jobs/stats");
};
import axios from "axios";

// Axios Instance
const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

// ==============================
// Register API
// ==============================
export const registerUser = async (userData) => {
  return await API.post("/register", userData);
};

// ==============================
// Login API
// ==============================
export const loginUser = async (userData) => {
  return await API.post("/login", userData);
};

// ==============================
// Profile API
// ==============================
export const getProfile = async () => {
  const token = localStorage.getItem("token");

  return await API.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
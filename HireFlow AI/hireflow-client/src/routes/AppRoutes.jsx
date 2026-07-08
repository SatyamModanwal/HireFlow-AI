// ==========================================================
// Import Required Packages
// ==========================================================

import { Routes, Route, Navigate } from "react-router-dom";

// ==========================================================
// Import Pages
// ==========================================================

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";

// ==========================================================
// Import Components
// ==========================================================

import ProtectedRoute from "../components/ProtectedRoute";

// ==========================================================
// App Routes Component
// ==========================================================

function AppRoutes() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Register */}
      <Route path="/register" element={<Register />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Profile */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<h1>404 | Page Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;
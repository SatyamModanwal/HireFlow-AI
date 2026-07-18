import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ==========================
// Pages
// ==========================
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import AddJob from "../pages/AddJob/AddJob";
import MyJobs from "../pages/MyJobs/MyJobs";
import EditJob from "../pages/EditJob/EditJob";

// ==========================
// Protected Route
// ==========================
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Add Job */}
        <Route
          path="/add-job"
          element={
            <ProtectedRoute>
              <AddJob />
            </ProtectedRoute>
          }
        />

        {/* My Jobs */}
        <Route
          path="/my-jobs"
          element={
            <ProtectedRoute>
              <MyJobs />
            </ProtectedRoute>
          }
        />

        {/* Edit Job */}
        <Route
          path="/edit-job/:id"
          element={
            <ProtectedRoute>
              <EditJob />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
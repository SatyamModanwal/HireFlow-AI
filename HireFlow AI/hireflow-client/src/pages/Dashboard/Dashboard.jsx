import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-page">

      <div className="dashboard-card">

        <h1>HireFlow AI</h1>
        <p>Welcome 👋</p>

        <div className="dashboard-buttons">

          <Link to="/profile">
            <button>👤 Profile</button>
          </Link>

          <Link to="/add-job">
            <button>➕ Add Job</button>
          </Link>

          <Link to="/my-jobs">
            <button>📋 My Jobs</button>
          </Link>

          <button className="logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;
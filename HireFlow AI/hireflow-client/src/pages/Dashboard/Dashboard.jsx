import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobStats } from "../../api/jobApi";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalJobs: 0,
    applied: 0,
    interview: 0,
    offer: 0,
    rejected: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await getJobStats();

      setStats(response.data.stats);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">

        {/* Heading */}

       <div className="dashboard-header">

  <h1>HireFlow AI</h1>

  <p>Manage your career smarter.</p>

</div>

        {/* Statistics */}

        <div className="stats-grid">

          <div className="stat-card">
    <div className="stat-icon">📋</div>
    <h2>{stats.totalJobs}</h2>
    <p>Total Jobs</p>
</div>

<div className="stat-card">
    <div className="stat-icon">📨</div>
    <h2>{stats.applied}</h2>
    <p>Applied</p>
</div>

<div className="stat-card">
    <div className="stat-icon">💼</div>
    <h2>{stats.interview}</h2>
    <p>Interview</p>
</div>

          

          <div className="stat-card">
    <div className="stat-icon">🎉</div>
    <h2>{stats.offer}</h2>
    <p>Offer</p>
</div>

<div className="stat-card">
    <div className="stat-icon">❌</div>
    <h2>{stats.rejected}</h2>
    <p>Rejected</p>
</div>

        </div>

        {/* Quick Actions */}

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

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;
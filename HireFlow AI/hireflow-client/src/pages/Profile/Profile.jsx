import "./Profile.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../api/authApi";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await getProfile();
      setUser(response.data.user);
    } catch (error) {
      alert(error.response?.data?.message || "Unable to load profile");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="profile-page">

      <div className="profile-card">

        <h1>👤 My Profile</h1>

        <div className="profile-info">
          <h2>{user.name}</h2>

          <p>{user.email}</p>
        </div>

        <button onClick={() => navigate("/dashboard")}>
          ← Back to Dashboard
        </button>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Profile;
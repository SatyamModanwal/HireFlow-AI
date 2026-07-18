import { useNavigate } from "react-router-dom";

const QuickActions = ({ logout }) => {

  const navigate = useNavigate();

  return (

    <div className="quick-actions">

      <div
        className="action-card"
        onClick={() => navigate("/profile")}
      >
        👤
        <h3>Profile</h3>
      </div>

      <div
        className="action-card"
        onClick={() => navigate("/add-job")}
      >
        ➕
        <h3>Add Job</h3>
      </div>

      <div
        className="action-card"
        onClick={() => navigate("/my-jobs")}
      >
        📋
        <h3>My Jobs</h3>
      </div>

      <div
        className="action-card logout-card"
        onClick={logout}
      >
        🚪
        <h3>Logout</h3>
      </div>

    </div>

  );

};

export default QuickActions;
import "./Dashboard.css";

const StatsCard = ({ icon, title, value, color }) => {
  return (
    <div className="stats-card">
      <div
        className="stats-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <h2>{value}</h2>

      <p>{title}</p>
    </div>
  );
};

export default StatsCard;
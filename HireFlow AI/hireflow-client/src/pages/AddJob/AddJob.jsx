import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addJob } from "../../api/jobApi";
import "./AddJob.css";

const AddJob = () => {
  const navigate = useNavigate();

  const [jobData, setJobData] = useState({
    company: "",
    position: "",
    status: "Applied",
    location: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !jobData.company ||
      !jobData.position ||
      !jobData.location
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await addJob(jobData);

      alert(response.data.message);

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-job-container">
      <h2>Add New Job</h2>

      <form onSubmit={handleSubmit} className="add-job-form">
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={jobData.company}
          onChange={handleChange}
        />

        <input
          type="text"
          name="position"
          placeholder="Job Position"
          value={jobData.position}
          onChange={handleChange}
        />

        <select
          name="status"
          value={jobData.status}
          onChange={handleChange}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
          <option value="Offer">Offer</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Job Location"
          value={jobData.location}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Job"}
        </button>
      </form>
    </div>
  );
};

export default AddJob;
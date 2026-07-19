import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSingleJob,
  updateJob,
} from "../../api/jobApi";
import "./EditJob.css";

const EditJob = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [jobData, setJobData] = useState({
    company: "",
    position: "",
    status: "Applied",
    location: "",
  });

  // ==========================
  // Load Single Job
  // ==========================

  useEffect(() => {

    fetchJob();

  }, []);

  const fetchJob = async () => {

    try {

      const response = await getSingleJob(id);

      setJobData(response.data.job);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Unable to fetch job"
      );

      navigate("/my-jobs");

    } finally {

      setLoading(false);

    }

  };

  // ==========================
  // Handle Input
  // ==========================

  const handleChange = (e) => {

    setJobData({

      ...jobData,

      [e.target.name]: e.target.value,

    });

  };

  // ==========================
  // Update Job
  // ==========================

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await updateJob(
        id,
        jobData
      );

   toast.success(response.data.message);

      navigate("/my-jobs");

    } catch (error) {

     toast.error(error.response?.data?.message || "Update Failed");
    }

  };

  // ==========================
  // Loading
  // ==========================

  if (loading) {

    return (

      <div className="loading">

        <h2>Loading...</h2>

      </div>

    );

  }

  return (

    <div className="edit-job-page">

      <div className="edit-job-container">

        <h2>Edit Job</h2>

        <p>

          Update your job details

        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Company</label>

            <input
              type="text"
              name="company"
              value={jobData.company}
              onChange={handleChange}
            />

          </div>

          <div className="input-group">

            <label>Position</label>

            <input
              type="text"
              name="position"
              value={jobData.position}
              onChange={handleChange}
            />

          </div>

          <div className="input-group">

            <label>Status</label>

            <select
              name="status"
              value={jobData.status}
              onChange={handleChange}
            >

              <option value="Applied">
                Applied
              </option>

              <option value="Interview">
                Interview
              </option>

              <option value="Rejected">
                Rejected
              </option>

              <option value="Offer">
                Offer
              </option>

            </select>

          </div>

          <div className="input-group">

            <label>Location</label>

            <input
              type="text"
              name="location"
              value={jobData.location}
              onChange={handleChange}
            />

          </div>

          <button type="submit">

            Update Job

          </button>

        </form>

        <button
          className="back-btn"
          onClick={() => navigate("/my-jobs")}
        >

          ← Back

        </button>

      </div>

    </div>

  );

};

export default EditJob;
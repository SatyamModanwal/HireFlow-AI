import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getJobs, deleteJob } from "../../api/jobApi";
import "./MyJobs.css";

const MyJobs = () => {

  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {

    try {

      const response = await getJobs();

      setJobs(response.data.jobs);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Unable to fetch jobs."
      );

    } finally {

      setLoading(false);

    }

  };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this job?"
    );

    if (!confirmDelete) return;

    try {

      const response = await deleteJob(id);

      alert(response.data.message);

      fetchJobs();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Delete Failed"
      );

    }

  };

  const filteredJobs = jobs.filter((job) => {

    const keyword = search.toLowerCase();

    const searchMatch =
      job.company.toLowerCase().includes(keyword) ||
      job.position.toLowerCase().includes(keyword);

    const statusMatch =
      statusFilter === "All"
        ? true
        : job.status === statusFilter;

    return searchMatch && statusMatch;

  });

  if (loading) {

    return (

      <div className="loading">

        <h2>Loading Jobs...</h2>

      </div>

    );

  }
    return (

    <div className="myjobs-page">

      <div className="myjobs-container">

        {/* Header */}

        <div className="header">

          <div>

            <h1>My Jobs</h1>

            <p>Manage all your job applications</p>

          </div>

          <button
            className="dashboard-btn"
            onClick={() => navigate("/dashboard")}
          >
            ← Dashboard
          </button>

        </div>

        {/* Search + Filter */}

        <div className="toolbar">

          <input
            type="text"
            placeholder="🔍 Search company or position..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>

        </div>

        {

          filteredJobs.length === 0 ?

          (

            <div className="empty-state">

              <div className="empty-icon">📂</div>

              <h2>No Jobs Found</h2>

              <p>Add your first job or change the search/filter.</p>

              <button
                onClick={() => navigate("/add-job")}
              >
                + Add Job
              </button>

            </div>

          )

          :

          (

            filteredJobs.map((job) => (

              <div
                className="job-card"
                key={job._id}
              >

                <div className="job-top">

                  <div className="company-logo">

                    {job.company.charAt(0).toUpperCase()}

                  </div>

                  <div className="job-info">

                    <h2>{job.company}</h2>

                    <p>{job.position}</p>

                  </div>

                  <span
                    className={`status-badge ${job.status.toLowerCase()}`}
                  >
                    {job.status}
                  </span>

                </div>

                <div className="job-details">

                  <p>📍 {job.location}</p>

                  <p>
                    📅{" "}
                    {new Date(job.createdAt).toLocaleDateString()}
                  </p>

                </div>

                <div className="job-actions">

                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate(`/edit-job/${job._id}`)
                    }
                  >
                    ✏ Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(job._id)
                    }
                  >
                    🗑 Delete
                  </button>

                </div>

              </div>

            ))

          )

        }

      </div>

    </div>

  );

};

export default MyJobs;
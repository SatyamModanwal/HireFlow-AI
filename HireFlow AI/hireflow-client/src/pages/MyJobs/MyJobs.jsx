import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getJobs, deleteJob } from "../../api/jobApi";

import Loader from "../../components/Loader/Loader";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";

import "./MyJobs.css";

const MyJobs = () => {

  const navigate = useNavigate();

  // ==========================
  // States
  // ==========================

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const [showModal, setShowModal] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);

  // ==========================
  // Load Jobs
  // ==========================

  useEffect(() => {

    fetchJobs();

  }, []);

    // ==========================
  // Fetch Jobs
  // ==========================

  const fetchJobs = async () => {

    try {

      const response = await getJobs();

      setJobs(response.data.jobs);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Unable to fetch jobs."
      );

    } finally {

      setLoading(false);

    }

  };

  // ==========================
  // Delete Button Click
  // ==========================

  const handleDelete = (id) => {

    setSelectedJobId(id);

    setShowModal(true);

  };

  // ==========================
  // Confirm Delete
  // ==========================

  const confirmDelete = async () => {

    try {

      const response = await deleteJob(selectedJobId);

      toast.success(response.data.message);

      fetchJobs();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Delete Failed"
      );

    } finally {

      setShowModal(false);

      setSelectedJobId(null);

    }

  };

    // ==========================
  // Search + Filter
  // ==========================

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

  // ==========================
  // Sorting
  // ==========================

  const sortedJobs = [...filteredJobs];

  switch (sortBy) {

    case "Newest":

      sortedJobs.sort(
        (a, b) =>
          new Date(b.createdAt) - new Date(a.createdAt)
      );

      break;

    case "Oldest":

      sortedJobs.sort(
        (a, b) =>
          new Date(a.createdAt) - new Date(b.createdAt)
      );

      break;

    case "A-Z":

      sortedJobs.sort((a, b) =>
        a.company.localeCompare(b.company)
      );

      break;

    case "Z-A":

      sortedJobs.sort((a, b) =>
        b.company.localeCompare(a.company)
      );

      break;

    case "Status":

      sortedJobs.sort((a, b) =>
        a.status.localeCompare(b.status)
      );

      break;

    default:

      break;

  };

  // ==========================
  // Loader
  // ==========================

  if (loading) {

    return <Loader />;

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

        {/* Search + Filter + Sort */}

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

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Newest">🆕 Newest First</option>
            <option value="Oldest">📅 Oldest First</option>
            <option value="A-Z">🔤 Company A-Z</option>
            <option value="Z-A">🔠 Company Z-A</option>
            <option value="Status">📌 Status Wise</option>
          </select>

        </div>

        {
          sortedJobs.length === 0 ? (

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

          ) : (

            sortedJobs.map((job) => (

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
                    📅 {new Date(job.createdAt).toLocaleDateString()}
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

      <ConfirmModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedJobId(null);
        }}
        onConfirm={confirmDelete}
      />

    </div>

  );

};

export default MyJobs;
  
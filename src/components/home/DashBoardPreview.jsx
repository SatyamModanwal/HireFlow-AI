import "./DashboardPreview.css";

function DashboardPreview() {

    return (

        <section className="dashboard-preview">

            <div className="dashboard-left">

                <h2>Your Career Dashboard</h2>

                <p>
                    Manage interviews, resumes, quizzes and job
                    applications from one modern dashboard.
                </p>

                <button>
                    Explore Dashboard
                </button>

            </div>

            <div className="dashboard-right">

                <div className="dashboard-card">

                    <h3>Dashboard</h3>

                    <div className="progress-box">

                        <p>Profile Completion</p>

                        <div className="progress">

                            <div className="progress-fill"></div>

                        </div>

                        <span>85%</span>

                    </div>

                    <div className="info-box">

                        <div>
                            <h4>92%</h4>
                            <p>Interview Score</p>
                        </div>

                        <div>
                            <h4>15</h4>
                            <p>Applications</p>
                        </div>

                    </div>

                    <div className="activity">

                        <h4>Recent Activity</h4>

                        <ul>
                            <li>✅ Resume Uploaded</li>
                            <li>✅ React Quiz Completed</li>
                            <li>✅ AI Interview Finished</li>
                        </ul>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default DashboardPreview;
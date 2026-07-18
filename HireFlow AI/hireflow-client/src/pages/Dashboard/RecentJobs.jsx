const RecentJobs = ({ jobs }) => {

  return (

    <div className="recent-section">

      <div className="section-title">

        <h2>Recent Jobs</h2>

      </div>

      {

        jobs.length === 0 ?

        (

          <div className="empty">

            No recent jobs

          </div>

        )

        :

        jobs.slice(0,3).map((job)=>(

          <div
            className="recent-job"
            key={job._id}
          >

            <div>

              <h3>{job.company}</h3>

              <p>{job.position}</p>

            </div>

            <span>{job.status}</span>

          </div>

        ))

      }

    </div>

  );

};

export default RecentJobs;
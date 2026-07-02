import "./Features.css";

function Features() {

    const features = [
        {
            title: "AI Mock Interview",
            description: "Practice interviews with AI and improve your confidence."
        },
        {
            title: "Resume Analyzer",
            description: "Upload your resume and get smart suggestions."
        },
        {
            title: "Job Tracker",
            description: "Track all your job applications in one place."
        },
        {
            title: "Skill Dashboard",
            description: "Monitor your learning progress with beautiful charts."
        }
    ];

    return (

        <section className="features">

            <h2>Our Features</h2>

            <p className="feature-subtitle">
                Everything you need to prepare for your dream job.
            </p>

            <div className="feature-container">

                {
                    features.map((item, index) => (

                        <div className="feature-card" key={index}>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                        </div>

                    ))
                }

            </div>

        </section>

    );
}

export default Features;
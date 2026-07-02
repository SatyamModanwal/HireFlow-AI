import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Crack Your Dream Job Faster
        </h1>

        <p>
          Prepare for interviews, improve your skills,
          track job applications and get AI-powered feedback
          in one place.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Watch Demo
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="dashboard-card">

          <h2>Dashboard Preview</h2>

          <p>Profile : 85%</p>

          <p>Interview Score : 92%</p>

          <p>Applications : 15</p>

        </div>

      </div>

    </section>
  );
}

export default Hero;
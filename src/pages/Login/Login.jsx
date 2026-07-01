import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">

        <h2>Welcome Back 👋</h2>

        <p>
          Login to continue your career journey.
        </p>

        <form>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button>
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;
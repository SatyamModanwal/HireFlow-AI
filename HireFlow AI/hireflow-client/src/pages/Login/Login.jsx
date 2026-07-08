import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/authApi";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await loginUser(formData);

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      alert(response.data.message);

      setFormData({
        email: "",
        password: "",
      });

      navigate("/profile");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome Back 👋</h2>

        <p>Login to continue your career journey.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
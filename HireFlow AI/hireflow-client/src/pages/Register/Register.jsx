import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../api/authApi";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Register
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser(formData);

      console.log("Register Success:", response);

      alert(response.data.message);

      navigate("/login");

    } catch (error) {

      console.log("========== REGISTER ERROR ==========");
      console.log(error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);

        alert(error.response.data.message);
      } else if (error.request) {
        console.log("No response received:", error.request);

        alert("Backend Not Connected");
      } else {
        console.log("Error:", error.message);

        alert(error.message);
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">

        <h2>Create Account</h2>

        <p>Create your HireFlow AI account.</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
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
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

        <div className="login-link">
          <p>Already have an account?</p>

          <Link to="/login">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Register;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../api/authApi";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    try {
      const response = await getProfile();

      setUser(response.data.user);
    } catch (error) {
      alert("Please Login First");

      localStorage.removeItem("token");

      navigate("/login");
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");

    navigate("/login");
  }

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>Profile Page</h1>

      {user ? (
        <>
          <h2>Welcome {user.name}</h2>

          <h3>{user.email}</h3>

          <button onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default Profile;
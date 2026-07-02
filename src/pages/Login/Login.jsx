// // React se useState hook import kar rahe hain
// import { useState } from "react";

// // CSS import
// import "./Login.css";

// function Login() {

//   // Form data ko state me store kar rahe hain
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   return (
//     <div className="login-page">
//       <div className="login-container">

//         <h2>Welcome Back 👋</h2>

//         <p>Login to continue your career journey.</p>

//         <form>

//           {/* Email */}
//           <div className="input-group">
//             <label>Email</label>

//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   email: e.target.value,
//                 })
//               }
//             />
//           </div>

//           {/* Password */}
//           <div className="input-group">
//             <label>Password</label>

//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   password: e.target.value,
//                 })
//               }
//             />
//           </div>

//           <button type="submit">
//             Login
//           </button>

//         </form>

//       </div>
//     </div>
//   );
// }

// export default Login;


// React se useState hook import kar rahe hain
import { useState } from "react";

// Login page ki CSS import
import "./Login.css";

function Login() {

    // Form ka data store karne ke liye state
    const [formData, setFormData] = useState({

        email: "",

        password: ""

    });

    // Jab user input me kuch type karega tab ye function chalega
    function handleChange(event) {

        // Input ka name aur value nikal rahe hain
        const { name, value } = event.target;

        // State update kar rahe hain
        setFormData({

            // Purana data copy kar rahe hain
            ...formData,

            // Sirf jis input me typing hui uski value update hogi
            [name]: value

        });

    }

    // Form submit hone par ye function chalega
    function handleSubmit(event) {

        // Page reload hone se rokta hai
        event.preventDefault();

        // Abhi backend nahi hai
        // Isliye data console me print kar rahe hain
        console.log("Login Data :", formData);

    }

    return (

        <div className="login-page">

            <div className="login-container">

                <h2>Welcome Back 👋</h2>

                <p>
                    Login to continue your career journey.
                </p>

                {/* Form Start */}
                <form onSubmit={handleSubmit}>

                    {/* Email Input */}
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

                    {/* Password Input */}
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

                    {/* Login Button */}
                    <button type="submit">

                        Login

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;
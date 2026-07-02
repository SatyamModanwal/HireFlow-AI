// function Register() {
//   return <h1>Register Page</h1>;
// }

// export default Register;


// React se useState import kar rahe hain
import { useState } from "react";

// CSS import
import "./Register.css";

function Register() {

    // Form data store karne ke liye
    const [formData, setFormData] = useState({

        fullName: "",

        email: "",

        password: "",

        confirmPassword: ""

    });

    // Password dikhana ya chupana
    const [showPassword, setShowPassword] = useState(false);

    // Error message store karne ke liye
    const [error, setError] = useState("");



    // Input change hone par chalega
    function handleChange(event){

        const {name,value}=event.target;

        setFormData({

            ...formData,

            [name]:value

        });

    }



    // Form submit
    function handleSubmit(event){

        event.preventDefault();

        // Purani error hata do
        setError("");



        // Validation

        if(formData.password!==formData.confirmPassword){

            setError("Password does not match");

            return;

        }


        console.log(formData);

    }


    return(

        <div className="register-page">

            <div className="register-container">

                <h2>Create Account 🚀</h2>

                <p>

                    Start your career journey today.

                </p>


                <form onSubmit={handleSubmit}>


                    {/* Full Name */}

                    <div className="input-group">

                        <label>Full Name</label>

                        <input

                            type="text"

                            name="fullName"

                            placeholder="Enter your name"

                            value={formData.fullName}

                            onChange={handleChange}

                            required

                        />

                    </div>



                    {/* Email */}

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



                    {/* Password */}

                    <div className="input-group">

                        <label>Password</label>

                        <input

                            type={showPassword ? "text":"password"}

                            name="password"

                            placeholder="Enter password"

                            value={formData.password}

                            onChange={handleChange}

                            required

                        />

                    </div>



                    {/* Confirm Password */}

                    <div className="input-group">

                        <label>Confirm Password</label>

                        <input

                            type={showPassword ? "text":"password"}

                            name="confirmPassword"

                            placeholder="Confirm password"

                            value={formData.confirmPassword}

                            onChange={handleChange}

                            required

                        />

                    </div>



                    {/* Show Password */}

                    <div className="show-password">

                        <input

                            type="checkbox"

                            onChange={()=>setShowPassword(!showPassword)}

                        />

                        <span>

                            Show Password

                        </span>

                    </div>



                    {/* Error */}

                    {

                        error &&

                        <p className="error">

                            {error}

                        </p>

                    }



                    <button type="submit">

                        Create Account

                    </button>

                </form>

            </div>

        </div>

    )

}

export default Register;
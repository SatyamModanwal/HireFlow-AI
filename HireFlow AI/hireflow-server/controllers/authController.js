// ==========================================================
// Import Required Packages
// ==========================================================

// User Model
const User = require("../models/User");

// Password Hashing
const bcrypt = require("bcryptjs");

// JWT Package
const jwt = require("jsonwebtoken");


// ==========================================================
// Register Controller
// ==========================================================

const registerUser = async (req, res) => {

    try {

        // Request Body Se Data
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {

            return res.status(400).json({

                success: false,

                message: "Please fill all fields"

            });

        }

        // Existing User Check
        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({

                success: false,

                message: "Email already registered"

            });

        }

        // Password Hash
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User
        const newUser = await User.create({

            name,

            email,

            password: hashedPassword

        });

        // Success Response
        res.status(201).json({

            success: true,

            message: "User Registered Successfully",

            user: {

                _id: newUser._id,

                name: newUser.name,

                email: newUser.email

            }

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// ==========================================================
// Login Controller
// ==========================================================

const loginUser = async (req, res) => {

    try {

        // Get Email And Password
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {

            return res.status(400).json({

                success: false,

                message: "Please fill all fields"

            });

        }

        // Find User
        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found"

            });

        }

        // Compare Password
        const isMatch = await bcrypt.compare(

            password,

            user.password

        );

        if (!isMatch) {

            return res.status(401).json({

                success: false,

                message: "Invalid Password"

            });

        }

        // Generate JWT Token
        const token = jwt.sign(

            {

                id: user._id

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "7d"

            }

        );

        // Success Response
        res.status(200).json({

            success: true,

            message: "Login Successful",

            token,

            user: {

                _id: user._id,

                name: user.name,

                email: user.email

            }

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// ==========================================================
// Get Profile Controller
// ==========================================================

const getProfile = async (req, res) => {

    try {

        // User ID Middleware Se Aayegi
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found"

            });

        }

        res.status(200).json({

            success: true,

            user

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// ==========================================================
// Export Controllers
// ==========================================================

module.exports = {

    registerUser,

    loginUser,

    getProfile

};
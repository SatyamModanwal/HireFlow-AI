
// Password ko Hash karne ke liye
const bcrypt = require("bcryptjs");


// User Model import
const User = require("../models/User");

// Register Controller
// ===============================

// Register API ko handle karega
const registerUser = async (req, res) => {

    try {

        // Frontend se data le rahe hain
        const { name, email, password } = req.body;

        // Check karo sab fields aayi hain ya nahi
        if (!name || !email || !password) {

            return res.status(400).json({

                success: false,

                message: "Please fill all fields"

            });

        }

        // Check karo email pehle se exist karta hai ya nahi
        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({

                success: false,

                message: "Email already registered"

            });

        }
        // Password ko Hash kar rahe hain
const hashedPassword = await bcrypt.hash(password, 10);

// Naya User Create
const newUser = await User.create({

    name,

    email,

    password: hashedPassword

});

        

        // Success response
        res.status(201).json({

            success: true,

            message: "User Registered Successfully",

            user: newUser

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// Export
module.exports = {

    registerUser

};
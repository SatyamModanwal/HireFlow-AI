// Mongoose package import
const mongoose = require("mongoose");

// ===============================
// User Schema
// ===============================

// Schema batata hai ki database me User ka data
// kis format me store hoga.

const userSchema = new mongoose.Schema(

    {

        // User ka Full Name

        name: {

            type: String,          // Data String hoga

            required: true,        // Name mandatory hai

            trim: true             // Extra spaces remove karega

        },



        // User Email

        email: {

            type: String,

            required: true,

            unique: true,          // Same email dubara register nahi ho sakti

            lowercase: true,       // Email ko lowercase me save karega

            trim: true

        },



        // Password

        password: {

            type: String,

            required: true,

            minlength: 6           // Minimum 6 characters

        }

    },



    // Automatically Created At & Updated At save karega

    {

        timestamps: true

    }

);


// ===============================
// Model Create
// ===============================

// Collection Name => users

const User = mongoose.model("User", userSchema);


// Export

module.exports = User;
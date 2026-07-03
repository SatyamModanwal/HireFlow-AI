// Mongoose package import
const mongoose = require("mongoose");

// Database connect karne ka function
const connectDB = async () => {
    try {

        // MongoDB Atlas se connect
        await mongoose.connect(process.env.MONGO_URI);

        console.log("✅ MongoDB Connected Successfully");

    } catch (error) {

        console.log("❌ MongoDB Connection Failed");

        console.log(error.message);

        process.exit(1);

    }
};

// Function export kar rahe hain
module.exports = connectDB;
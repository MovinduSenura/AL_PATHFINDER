const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const emailRoutes = require("./routes/emailRoutes"); // Import the email routes

const app = express();
const PORT = 4700;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const URL = "mongodb+srv://movindusenuraaluthge:SLIIT@sliit.9pnop.mongodb.net/AlPathFinder?retryWrites=true&w=majority&appName=SLIIT";
mongoose.connect(URL)
    .then(() => {
        console.log("MongoDB Connection Successful!");
    })
    .catch((err) => {
        console.log("MongoDB Connection Unsuccessful!", err);
    });

// Use the email routes
app.use(emailRoutes); // Register email routes

// Start the server
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});

const quizRoutes = require('./routes/quizRoutes');
app.use('/api', quizRoutes);
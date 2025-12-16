require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 7000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB database connection successful"))
    .catch((err) => console.log("MongoDB connection error:", err));

app.get('/', (req, res) => {
    res.json({ message: "Amusement Park API Server Running" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});






const express = require('express');
const mongoose = require('mongoose');
const chickenModel = require('./schema/Chicken')
const cors = require('cors');
// using .env to connect to mongo db
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// The "Hello World" Route
app.get('/api/chickens', (req, res) => {
  chickenModel.find({}).then(data=>{
    console.log(data)
    // res.send(data)
  })
  res.json({ message: "Hello from the MERN Server!" });
});

// Database Connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log("DB Connection Error:", err));

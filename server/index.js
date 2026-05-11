const express = require('express');
const mongoose = require('mongoose');
const ChickenModel = require('./models/ChickenModel')
const cors = require('cors');
// using .env to connect to mongo db
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

storedChickens=[]
// Problem: two servers running but not connection
app.get('/api/storedChickens', async (req, res) => {
  try {
    const storedChickens = await ChickenModel.find(); 
    res.status(200).json(storedChickens);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Database Connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log("DB Connection Error:", err));

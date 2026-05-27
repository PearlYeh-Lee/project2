const express = require('express');
const mongoose = require('mongoose');
const ChickenModel = require('./schema/Chicken')
const cors = require('cors');
// using .env to connect to mongo db
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());



  // TODO: create a POST to get new chicken

  //TODO: Add new chicken to DB 




app.get('/api/storedChickens', async (req, res) => {
  console.log("doing a get")
  try {
      ChickenModel.find({}).then((data) => {
        console.log(data)
      res.send(data);
    })
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/postChicken'), async(req, res) => {
  console.log("doing a post")
  let newChicken = new ChickenModel({
newChickenDictionary
  })
  newChicken.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })

}

// app.get('/api/storedPigs', async (req, res) => {
//   try {
//     const storedChickens = await ChickenModel.find(); 
//     res.status(200).json(storedChickens);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// Database Connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log("DB Connection Error:", err));

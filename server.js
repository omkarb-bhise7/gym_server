require('dotenv').config(); // .env लोड करते
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(express.json());

// ✅ ROUTE IMPORT
const memberRoutes = require('./routes/memberRoutes');

// ✅ ROUTE MOUNT
app.use('/api/members', memberRoutes);

// Debugging: बघा MONGO_URI लोड झाला का
console.log('Loaded MONGO_URI:', process.env.MONGO_URI); // 👈 हे टाका

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(' ✅ MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` 🚀 Server running on port ${PORT}`);
});


// require('dotenv').config(); // Load environment variables from .env
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');


// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // ✅ Add a root route so Render shows something at "/"
// app.get('/', (req, res) => {
//   res.send('✅ Gym Server is running 💪');
// });

// // ✅ ROUTES
// const memberRoutes = require('./routes/memberRoutes');
// app.use('/api/members', memberRoutes);



// // Debugging: Confirm MONGO_URI loaded
// console.log('Loaded MONGO_URI:', process.env.MONGO_URI);

// // ✅ MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => {
//     console.error('❌ MongoDB connection error:', err);
//     process.exit(1); // Exit the app if DB connection fails 
//   });

// // ✅ Server listen
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Static for images

// Root test route
app.get('/', (req, res) => {
  res.send('✅ Gym Server is running 💪');
});

// Routes
const memberRoutes = require('./routes/memberRoutes');
app.use('/api/members', memberRoutes);

// MongoDB
console.log('Loaded MONGO_URI:', process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


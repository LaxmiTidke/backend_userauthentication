const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://prasaddhobale:Prasad123@arbsa.9ibun.mongodb.net');
app.use('/ping', (req, res)=>{res.send("Pong");})
app.use('/api', authRoutes);
app.use('/api/admin', adminRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));

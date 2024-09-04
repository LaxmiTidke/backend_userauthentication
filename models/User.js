const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
  count: { type: Number, default: 0 },
  lastLoginDate: Date
});

module.exports = mongoose.model('User', userSchema);

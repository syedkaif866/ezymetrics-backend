const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  phone: String,
  companyName: String,
  website: String,
  status: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Lead', LeadSchema);

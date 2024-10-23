const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  name: String,
  platform: String,
  budget: Number,
  leadsGenerated: Number,
  startDate: Date,
  endDate: Date
});

module.exports = mongoose.model('Campaign', CampaignSchema);

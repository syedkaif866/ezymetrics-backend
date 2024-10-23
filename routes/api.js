const express = require('express');
const axios = require('axios');
const Lead = require('../models/Lead');
const Campaign = require('../models/Campaign');
const router = express.Router();
const { generateCsvReport } = require('../controllers/reportController'); // Import your CSV report controller
const { sendAlert } = require('../controllers/alertController'); // Import your alert controller

// Route to generate CSV report
router.get('/reports/csv', generateCsvReport);

// Route to send alerts
router.post('/alerts', sendAlert);

// Simulate fetching leads from a CRM
router.get('/leads', async (req, res) => {
  try {
    const dummyLeads = [
      { name: 'John Doe', email: 'john@example.com', phone: '1234567890', campaign: 'Facebook Ads', status: 'converted' },
      { name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', campaign: 'Google Ads', status: 'interested' },
    ];

    // Store leads in the database
    await Lead.insertMany(dummyLeads);
    res.status(200).json({ message: 'Leads fetched and stored', data: dummyLeads });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching leads' });
  }
});

// Simulate fetching campaign data from marketing platforms
router.get('/campaigns', async (req, res) => {
  try {
    const dummyCampaigns = [
      { name: 'Facebook Ads', platform: 'Facebook', budget: 5000, leadsGenerated: 10, startDate: new Date('2023-01-01'), endDate: new Date('2023-02-01') },
      { name: 'Google Ads', platform: 'Google', budget: 3000, leadsGenerated: 5, startDate: new Date('2023-01-10'), endDate: new Date('2023-02-10') },
    ];

    // Store campaigns in the database
    await Campaign.insertMany(dummyCampaigns);
    res.status(200).json({ message: 'Campaigns fetched and stored', data: dummyCampaigns });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching campaigns' });
  }
});


// Fetch campaign performance metrics
router.get('/metrics', async (req, res) => {
    try {
      const campaigns = await Campaign.find();
      const metrics = campaigns.map(campaign => {
        const costPerLead = campaign.budget / campaign.leadsGenerated;
        return {
          campaign: campaign.name,
          platform: campaign.platform,
          leadsGenerated: campaign.leadsGenerated,
          costPerLead: costPerLead.toFixed(2)
        };
      });
      res.status(200).json(metrics);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching metrics' });
    }
  });


  
module.exports = router;

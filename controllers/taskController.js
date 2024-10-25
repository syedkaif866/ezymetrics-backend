const express = require('express');
const axios = require('axios');
const Lead = require('../models/Lead');

exports.fetchleads = async (req, res) => {
    try {
      
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      console.log(response)
      const users = response.data.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        companyName: user.company.name,
        website: user.website,
        status: 'new',
      }));
  
      
      const userIds = users.map(user => user.id);
  
      
      const existingLeads = await Lead.find({ id: { $in: userIds } });
  
      
      const existingLeadIds = new Set(existingLeads.map(lead => lead.id));
  
      
      const uniqueUsers = users.filter(user => !existingLeadIds.has(user.id));
  
      if (uniqueUsers.length === 0) {
        return res.status(409).json({ message: 'All leads already exist in db' ,data: existingLeads});
      }
  
      
      await Lead.insertMany(uniqueUsers);
  
      res.status(200).json({ message: 'Unique leads fetched and stored', data: uniqueUsers });
    } catch (err) {
      res.status(500).json({ error: 'Error fetching leads' });
    }
};

exports.fetchsinglelead=  async (req, res) => {
  const userId = req.params.id;

  try {
    
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = response.data;

    const leadData = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      companyName: user.company.name,
      website: user.website,
      status: 'new',
    };

   
    const existingLead = await Lead.findOne({ id: user.id });

    if (existingLead) {
      return res.status(409).json({ message: 'Lead already exists', data: existingLead });
    }

    const newLead = new Lead(leadData);
    await newLead.save();

    res.status(201).json({ message: 'Lead fetched and stored', data: leadData });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching lead' });
  }
};


exports.metrics = async (req, res) => {
  try {
    const leads = await Lead.find();
    const metrics = leads.map(lead => ({
      leadId: lead.id,
      name: lead.name,
      email: lead.email,
      company: lead.companyName,
      status: lead.status,
    }));

    res.status(200).json(metrics);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching metrics' });
  }
}
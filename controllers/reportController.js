const { Parser } = require('json2csv');
const Lead = require('../models/Lead');

exports.generateCsvReport = async (req, res) => {
  try {
    const leads = await Lead.find();
    const fields = ['id', 'name', 'email', 'phone', 'companyName', 'status'];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(leads);

    res.attachment('leads-report.csv');
    res.status(200).send(csv);
  } catch (err) {
    res.status(500).json({ error: 'Error generating CSV report' });
  }
};

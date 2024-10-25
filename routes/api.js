const express = require('express');
const router = express.Router();
const alertController = require('../controllers/alertController');
const reportController = require('../controllers/reportController');
const taskController = require('../controllers/taskController');


router.get('/fetch-leads', taskController.fetchleads);

router.get('/fetch-leads/:id',taskController.fetchsinglelead);

router.get('/metrics',taskController.metrics);



router.post('/send-alert', alertController.sendAlert);

router.get('/generate-report', reportController.generateCsvReport);

module.exports = router;

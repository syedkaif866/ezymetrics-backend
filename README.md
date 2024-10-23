# ezymetrics-backend
 
GET /api/leads
Description: Fetch and store dummy lead data.
Request Type: GET
URL: http://localhost:5000/api/leads

GET /api/campaigns
Description: Fetch and store dummy campaign data.
Request Type: GET
URL: http://localhost:5000/api/campaigns

GET /api/metrics
Description: Fetch performance metrics of campaigns.
Request Type: GET
URL: http://localhost:5000/api/metrics


 GET /api/reports/csv (assuming you've set this up)
Description: Generate a CSV report of leads.
Request Type: GET
URL: http://localhost:5000/api/reports/csv


POST /api/alerts (assuming you set this up)
Description: Send an alert email.
Request Type: POST
URL: http://localhost:5000/api/alerts
body :
{
  "campaign": "Some Campaign",
  "leads": 3 
}


Note :You can put the recievers mail id in alertcontroller file



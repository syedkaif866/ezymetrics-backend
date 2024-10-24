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


 GET /api/reports/csv 
Description: Generate a CSV report of leads.
Request Type: GET
URL: http://localhost:5000/api/reports/csv


POST /api/alerts 
Description: Send an alert email.
Request Type: POST
URL: http://localhost:5000/api/alerts
body :
{
  "campaign": "Some Campaign",
  "leads": 3 
}


Note :You can put the recievers mail id in alertcontroller file
      I have used data for api fetching directly . i did not get any dummy api.
      If i would do with dummy api ,i would havbe used fetch method and converted the data in json and used it .



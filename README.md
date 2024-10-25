# ezymetrics-backend

url of json data : https://jsonplaceholder.typicode.com/users
                   https://jsonplaceholder.typicode.com/users/:id

GET /api/fetch-leads
Description: Fetch and store lead data from json.
Request Type: GET
URL: http://localhost:5000/api/fetch-leads

GET /api/fetch-leads/:id
Description: Fetch and store lead data from json.
Request Type: GET
URL: http://localhost:5000/api/fetch-leads/:id

GET /api/metrics
Description: Fetch  metrics of leads.
Request Type: GET
URL: http://localhost:5000/api/metrics


 GET /api/generate-report
Description: Generate a CSV report of leads.
Request Type: GET
URL: http://localhost:5000/api/generate-report


POST /api/send-alert
Description: Send an alert email.
Request Type: POST
URL: http://localhost:5000/api/send-alert
body :
{
  "email" :" "
}





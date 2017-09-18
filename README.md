Simple node.js app to turn a CSV file into an OData endpoint.

To run:

npm install
node index.js

configuration settings live in config.js

Now you can try requests like:<br/>
GET [http://localhost:1337/$metadata]()<br/>
GET [http://localhost:1337/leads?$orderby=LastName desc]()<br/>
GET [http://localhost:1337/leads/$count]()<br/>
POST, PATCH, DELETE

# Domain Status Checker

The Domain Status Checker is a Node.js module designed to help developers determine the online/offline status of a list of domain names. By asynchronously checking the status of each domain name provided, this module returns the results as an array of objects containing the domain name and its status.

## Features

- Asynchronously checks the online/offline status of multiple domain names.
- Can be easily integrated into Node.js projects.
- Returns results indicating whether each domain name is online or offline.

## Usage

```javascript
const { DomainStatus, checkStatus, areAllResultsOnline } = require('domain-status_checker');

const domains = ['https://example.com', 'https://google.com', 'https://nonexistentdomain123.com'];

// Check status of domain names
checkStatus(domains)
  .then(results => {
    console.log(results);
    console.log(`Are all domains online? ${areAllResultsOnline(results)}`);
  })
  .catch(error => {
    console.error('Error occurred while checking domain status:', error);
  });

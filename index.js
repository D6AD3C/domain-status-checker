const axios = require('axios');

const DomainStatus = {
  OFFLINE: 0,
  ONLINE: 1,
};

async function checkStatus(domainNames) {
  const results = await Promise.all(domainNames.map(async (domain) => {
    try {
      await axios.get(domain);
      return { domain, status: DomainStatus.ONLINE };
    } catch {
      return { domain, status: DomainStatus.OFFLINE };
    }
  }));
  return results;
}

function areAllResultsOnline(results) {
  return results.every(result => result.status === DomainStatus.ONLINE);
}

module.exports = { DomainStatus, checkStatus, areAllResultsOnline };
var request = require('request');

var options = {
  method: 'POST',
  url: 'http://localhost:7070/v1beta1/projects/testProject/locations/us-east-1',
  qs: { instanceId: 'redisTest123' },
  headers: {
    'Postman-Token': 'f0f5d2f5-ffda-4f7b-9f81-d45aedb3a900',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
  body: {
    name: 'redisTest',
    displayName: 'Redis Test',
    locationId: 'us-east-1',
    redisConfigs: { test: 'test' },
    tier: 'free',
  },
  json: true,
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

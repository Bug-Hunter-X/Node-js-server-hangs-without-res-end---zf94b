const http = require('http');

const server = http.createServer((req, res) => {
  res.end(); //This line is added to solve the bug
  console.log('Request received');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
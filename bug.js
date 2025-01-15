const http = require('http');

const server = http.createServer((req, res) => {
  // Without this line, the server will hang
  // res.end();
  console.log('Request received');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
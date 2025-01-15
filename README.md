# Node.js Server Hang Bug
This repository demonstrates a common bug in Node.js where a server hangs if the response is not explicitly ended using `res.end()`.  The bug is caused by a missing call to `res.end()` in the HTTP request handler. This can lead to unexpected behavior and performance issues.

## Bug Description
The `bug.js` file contains a simple HTTP server that listens on port 3000.  However, it omits the crucial `res.end()` call, which prevents the server from properly closing the connection after receiving a request. This results in the server hanging, and no further requests will be processed.

## Solution
The `bugSolution.js` demonstrates the corrected code that includes the `res.end()` call. This simple addition ensures that the server properly handles each request and responds accordingly, preventing the hanging issue.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.
3. Send a request to `http://localhost:3000`. The server will hang.
4. Run `node bugSolution.js`.
5. Send a request to `http://localhost:3000`. The server will respond correctly.

This example highlights the importance of proper resource management and cleanup in Node.js applications, particularly within HTTP request handlers.
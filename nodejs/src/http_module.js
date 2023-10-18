const http = require('http');

const server = http.createServer((req, res) => {
    const message = "Hello Cramer, I'm Steverocket";
    res.end(message);
});

server.listen(3000, () => {
    console.log("server listening on port:3000");
});
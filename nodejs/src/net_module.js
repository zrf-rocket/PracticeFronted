const net = require('net');

const server = net.createServer(socket => {
    socket.write('Hello cramer', new Date());
    socket.on('data', data => {
        console.log(`Received data from client ${data}`);
    });

});

server.listen(3000, () => {
    console.log('Server listening on port:3000');
});
var http = require('http');
var fs =require('fs');

http.createServer(function(req,res){
        res.end(fs.readFileSync('asdf.html'));

}).listen(8080);




var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 12345;

var ws = new WebSocketServer({
    port: port
});

var messages = [];
console.log('websockets server started');



ws.on('connection', function(socket) {
    console.log('client connection established');
    messages.forEach(function(msg) {
        socket.send(msg);
    });

    socket.on('message', function(data) {
        console.log('message received: ' + data);
        messages.push(data);
        ws.clients.forEach(function(clientSocket) {
            clientSocket.send(data);
        });
    });
});

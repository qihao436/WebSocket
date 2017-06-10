var http = require('http');
var fs =require('fs');

http.createServer(function(req,res){
	fs.readFileSync('.\asdf.html').pipe(req);

}).listen(8080);


var net = require('net');

var port =12345;

net.createServer(function(socket){
  console.log('Connected: ' + socket.remoteAddress + ' : ' + socket.remotePort);



  socket.on('data',function(data){

      socket.write('nihao');
  });

  socket.on('close',function(data){
      console.log('CLOSED' + socket.remoteAddress + ' : ' + data);
  });
}).listen(port);

console.log('listening on: ' +port);

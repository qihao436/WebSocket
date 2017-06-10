var net = require('net');

var port =12345;

net.createServer(function(socket){
  console.log('Connected: ' + socket.remoteAddress + ' : ' + socket.remotePort);
  socket.write('nihao');


  socket.on('data',function(data){
    console.log('DATA' + socket.remoteAddress + ' : ' + data);
  });

  socket.on('close',function(data){
      console.log('CLOSED' + socket.remoteAddress + ' : ' + data);
  });
}).listen(port);

console.log('listening on: ' +port);

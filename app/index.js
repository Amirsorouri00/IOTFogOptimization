'use strict';

var http = require('http'),
 
 server = http.createServer(function(req,res){
  //increment the counter
 res.end('data receive from mqtt server')
});

//our application listen to port for any incomming request
server.listen(5000,function(){
  console.log('Server listening on port '+5000);
});

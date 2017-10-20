var path = require('path');
var express = require('express');
var util = require('util')

var httpServer = express();

httpServer.post('/coap/*', function(req, res){
  var buff = '';

  req.on('data', function(data){
    buff = data;
  });
  req.on('end', function(data){
    fromGW = JSON.parse(buff)
	console.log (util.inspect(fromGW))

    res.writeHead(200);
    res.end();
  });
});

httpServer.listen(3007);
console.log('Listening on port 3007');

var path = require('path');
var express = require('express');

var httpServer = express();

httpServer.post('/coap/*', function(req, res){
  var buff = '';

  req.on('data', function(data){
    buff = data;
  });
  req.on('end', function(data){
    console.log ('http received'+buff.toString('hex')+"["+buff.toString()+"]")

    res.writeHead(200);
    res.end();
  });
});

httpServer.listen(3007);
console.log('Listening on port 3007');

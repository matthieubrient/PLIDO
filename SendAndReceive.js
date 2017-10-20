httpServer.post('/coap/*', function(req, res){
  var buff = '';

  req.on('data', function(data){
    buff = data;
  });
  req.on('end', function(){
   	fromGW = JSON.parse(buff)
	console.log (util.inspect(fromGW))
	
	var devEUI = fromGW.devEUI
	
    res.writeHead(200);
	var responsStruct = {
	'fport' : 2,
	'data' : new Buffer("Please tom meet you").toString("base64"),
	'devEUI' : devEUI
	}
	console.log(responseStruct)
	res.end(JSON.stringify(responseStruct));    
 });
});


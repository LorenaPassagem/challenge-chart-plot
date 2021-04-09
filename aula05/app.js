let http = require('http');

http.createServer(function(req,res){
    res.end("Hello visitor! Go AWAY!!!")
}).listen(5500);

console.log('SERVER RUNNING!\\O/');
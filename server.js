var express = require ('express');
var server = express();

server.use(express.static(__dirname));

server.get("/",function(req, res){
    res.sendFile(__dirname +"/index.html");
});

server.get("/index.html",function(req, res){
    res.sendFile(__dirname +"/competences.json");
});

server.listen(3002);
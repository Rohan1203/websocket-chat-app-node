var express = require('express');
var socket  = require('socket.io');

var app = express();

var server = app.listen(3000, function(){
  console.log("Listening on port 3000");
});

//static files
app.use(express.static("public"));

//socket settle
var io = socket(server);

io.on("connection", function(socket){
  console.log("made socket connection");
});

const express = require("express");
const app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.get("/", function (req, res, next) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (client) {
  console.log("Client connected...");

  client.on("join", function (data) {
    console.log("I am here " + data);
  });
  client.emit("connect");
});

server.listen(3000);

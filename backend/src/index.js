const { userInfo } = require("os");

var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname.concat("/pages/index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", (msg) => {
    io.emit('chat message', msg);
  });
});

http.listen(3000, () => {
  console.log("Listening on *:3000");
});

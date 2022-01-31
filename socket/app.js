const io = require("socket.io");

io.socket.on("connection", function (socket) {
  socket.emit("news", { hello: "world" });

  socket.on("my other event", function (data) {
    console.log(data);
  });
});

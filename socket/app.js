const app = require("express")();
const socket = require("socket.io");
const server = app.listen(8005, () => {});

const io = socketId(server, { path: "socket.io" });

io.on("connection", (socket) => {
  //* 연결 종료 시
  socket.on("disconnect", () => {
    console.log("클라이언트 접속 해제", ip, socket.id);
    clearInterval(socket.interval);
  });

  //* 에러 시
  socket.on("error", (error) => {
    console.error(error);
  });

  //* 클라이언트로부터 메시지 수신
  socket.on("reply", (data) => {
    // reply라는 이벤트로 송신오면 메세지가 data인수에 담김
    console.log(data);
  });

  //* 클라이언트로 메세지 송신
  socket.emit("news", "Hello Socket.IO"); // news라는 이벤트로 문자열을 포함하여 송신
});

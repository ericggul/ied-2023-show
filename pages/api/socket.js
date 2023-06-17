import { Server } from "socket.io";

export default function handler(req, res) {
  if (res.socket.server.io) {
    console.log("socket already enabled");
    res.end();
  } else {
    console.log("socket enabled");
    const io = new Server(res.socket.server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("project-click", (data) => {
        socket.broadcast.emit("new-project-click", data);
      });
    });
  }

  res.end();
}

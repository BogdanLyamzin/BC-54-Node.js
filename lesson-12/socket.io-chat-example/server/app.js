const {Server} = require("socket.io");
const {createServer} = require("http");

const httpServer = createServer();

const wsServer = new Server(httpServer, {
    cors: {
        origin: "*"
    }
})

wsServer.on("connection", socket => {
    // console.log("New fontend connected")
    socket.on("chat-message", data => {
        socket.broadcast.emit("chat-message", data);
    })
})

httpServer.listen(4000);
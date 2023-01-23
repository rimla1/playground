const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = 3999;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

http.listen(PORT, function () {
  console.log("listening on *:" + PORT);
});

io.on("connection", (socket) => {
  console.log("User has connected!");
});

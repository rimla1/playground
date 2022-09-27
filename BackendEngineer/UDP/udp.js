const dgram = require("dgram");
const socket = dgram.createSocket("udp4");

socket.on("message", (msg, rinfo) => {
  console.log(`Server got message: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

socket.bind(8877, () => {
  console.log("server is up and running on port 8877");
});

var net = require('net')

const PORT = process.env.PORT || 3000

var server = net.createServer((socket) => {
  socket.write('Demo server\r\n')
  
  socket.on('data', (data) => {
    console.log(`Got some data: ${data}`)

    socket.destroy()
  })

	socket.pipe(socket);
});

console.log(`Starting server on :${PORT}`)

server.listen(PORT, '0.0.0.0')

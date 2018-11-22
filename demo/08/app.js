const http = require('http');
const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const server = require('http').Server(app.callback())


const io = require('socket.io')(server);



// $ GET /package.json
app.use(serve('./demo/08/'));

var roomno = 1;
io.on('connection', function(socket) {
   
   //Increase roomno 2 clients are present in a room.
   if(io.nsps['/'].adapter.rooms[roomno] && io.nsps['/'].adapter.rooms[roomno].length > 1) roomno++;
   socket.join(roomno);

   //Send this event to everyone in the room.
   io.sockets.in(roomno).emit('connectToRoom', "You are in room no. "+roomno);
})

 server.listen(3000, () => {
    console.log('Application is starting on port 3000')
})
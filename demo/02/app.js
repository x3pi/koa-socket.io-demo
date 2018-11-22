const http = require('http');
const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const server = require('http').Server(app.callback())


const io = require('socket.io')(server);



// $ GET /package.json
app.use(serve('./demo/02/'));

io.on('connection', function(socket) {
    console.log('A user connected');
     //Send a message after a timeout of 4seconds
   setTimeout(function() {
      socket.send('Sent a message 4seconds after connection!');
   }, 4000);
 
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });

 server.listen(3000, () => {
    console.log('Application is starting on port 3000')
})
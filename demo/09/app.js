const http = require('http');
const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const server = require('http').Server(app.callback())


const io = require('socket.io')(server);



// $ GET /package.json
app.use(serve('./demo/09/'));

users = [];
io.on('connection', function (socket) {
   console.log('A user connected');
   socket.on('setUsername', function (data) {
      console.log(data);

      if (users.indexOf(data) > -1) {
         socket.emit('userExists', data + ' username is taken! Try some other username.');
      } else {
         users.push(data);
         socket.emit('userSet', { username: data });
      }
   });

   socket.on('msg', function (data) {
      //Send message to everyone
      io.sockets.emit('newmsg', data);
   })
});


server.listen(3000, () => {
   console.log('Application is starting on port 3000')
})
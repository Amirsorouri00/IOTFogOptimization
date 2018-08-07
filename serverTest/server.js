var WebSocketServer = require('ws').Server,
const axios = require('axios');
  wss = new WebSocketServer({port: 18123})
wss.on('connection', function (ws) {
    console.log('one socket has connected')
  ws.on('message', function (message) {

    axios.post('http://nginx/', {
      message:message
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
   // console.log('Published', packet.payload);
  });
  
  

    console.log('received:', message)
  })
//   setInterval(
//     () => ws.send(`${new Date()}`),
//     1000
//   )
})
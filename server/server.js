var mosca = require('mosca');
const axios = require('axios');
var ascoltatore = {
  //using ascoltatore
  type: 'mongo',
  url: 'mongodb://mongo:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var settings = {
  port: 1886,
  backend: ascoltatore
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});
// axios.get('http://nginxx/' )
// .then(function(response){
//   console.log(response.data); // ex.: { user: 'Your User'}
//   console.log(response.status); // ex.: 200
// }); 
// fired when a message is received
server.on('published', function(packet, client) {
  // axios.get('http://nginx' )
  // .then(function(response){
  //   console.log(response.data); // ex.: { user: 'Your User'}
  //   console.log(response.status); // ex.: 200
  // }); 
  
  axios.post('http://reverse-proxy/', {
    message:packet
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
 // console.log('Published', packet.payload);
});



server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running',settings);
}
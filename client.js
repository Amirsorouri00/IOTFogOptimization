var mqtt = require('mqtt')
var client  = mqtt.connect('http://localhost:1886')

client.on('connect', function () {
  client.subscribe('presence/a')
  client.publish('presence/a', 'Hello mqtt')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log('message',message.toString())
  console.log('topic',topic.toString())
  //client.end()
})
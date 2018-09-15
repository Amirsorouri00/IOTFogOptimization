var mqtt = require('mqtt')
var client  = mqtt.connect('http://localhost:1886')

client.on('connect', function () {
  console.log('is connected')
  //client.subscribe('presence/a')

  for(i=0;i<100000;i++)
  {

    client.publish('mohsen/a', 'Hello mqtt')
  }
})

client.on('message', function (topic, message) {
  // message is Buffer
  // console.log('message',message.toString())
  // console.log('topic',topic.toString())
  //client.end()
})



/*
'use strict'

var mqtt = require('mqtt')
var clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
var host = 'wss://localhost:3001/Mosca'
var options = {
  keepalive: 10,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  username: 'demo',
  password: 'demo',
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false
  },
  rejectUnauthorized: false
}

var client = mqtt.connect(host, options)

client.on('error', function (err) {
  console.log(err)
  client.end()
})

client.on('connect', function () {
  console.log('client connected:' + clientId)
})

client.subscribe('topic', { qos: 0 })

client.publish('topic', 'wss secure connection demo...!', { qos: 0, retain: false })

client.on('message', function (topic, message, packet) {
  console.log('Received Message:= ' + message.toString() + '\nOn topic:= ' + topic)

})

client.on('close', function () {
  console.log(clientId + ' disconnected')
*/


const kafka = require('kafka-node')
const client = new kafka.KafkaClient({kafkaHost: '172.25.1.2:9092'})
let consumer = new kafka.Consumer(client, [{topic: 'test'}])

consumer.on('message', function (message) {
    console.log(message)
})

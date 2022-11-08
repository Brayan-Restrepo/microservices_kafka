
const kafka = require('kafka-node')
const client = new kafka.KafkaClient({kafkaHost: '172.25.1.2:9092'})
let producer = new kafka.Producer(client)

let numMessage = 1
producer.on('ready', function () {
    setInterval(function () {
        numMessage++
        producer.send([ {
            topic: 'test',
            messages:'numMessage #: ' + numMessage
        }], function (err,data) {})
    }, 5000)
})




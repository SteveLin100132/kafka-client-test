const Kafka = require('kafka-node');
const ConsumerGroup = Kafka.ConsumerGroup;
const ConsumerGroupStream = Kafka.ConsumerGroupStream;

let client = new Kafka.Client();

var options = {
  kafkaHost: 'localhost:9092',
  groupId: 'ak3.group1'
};

let consumerGroup = new ConsumerGroup(options, 'ak3.consumer.groups');
let consumerGroupStream = new ConsumerGroupStream();

consumerGroup.on('message', (msg, err) => {
  if(err) throw console.log(err);
  console.log(msg);
});